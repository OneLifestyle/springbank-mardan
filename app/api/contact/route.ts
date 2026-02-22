import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const inquiryTypeLabels: Record<string, string> = {
  inspection: "Private Inspection",
  "floor-plans": "Request Floor Plans",
  pricing: "Pricing Enquiry",
  general: "General Information",
  other: "Other",
};

const BOT_OR_RATE_LIMIT_ERROR =
  "Unable to submit enquiry right now. Please try again or contact us directly.";

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value || "", 10);
  if (Number.isNaN(parsed) || parsed <= 0) {
    return fallback;
  }
  return parsed;
}

const RATE_LIMIT_WINDOW_SECONDS = parsePositiveInt(
  process.env.CONTACT_RATE_LIMIT_WINDOW_SECONDS,
  600
);
const RATE_LIMIT_MAX_REQUESTS = parsePositiveInt(
  process.env.CONTACT_RATE_LIMIT_MAX_REQUESTS,
  5
);

type ContactRateLimitStore = Map<string, number[]>;
type GlobalWithContactLimiter = typeof globalThis & {
  __contactRateLimitStore?: ContactRateLimitStore;
};

const globalWithContactLimiter = globalThis as GlobalWithContactLimiter;
const contactRateLimitStore =
  globalWithContactLimiter.__contactRateLimitStore ?? new Map<string, number[]>();
if (!globalWithContactLimiter.__contactRateLimitStore) {
  globalWithContactLimiter.__contactRateLimitStore = contactRateLimitStore;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_SECONDS * 1000;
  const timestamps = contactRateLimitStore.get(key) ?? [];
  const recentTimestamps = timestamps.filter((timestamp) => timestamp > windowStart);

  if (recentTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((recentTimestamps[0] + RATE_LIMIT_WINDOW_SECONDS * 1000 - now) / 1000)
    );

    contactRateLimitStore.set(key, recentTimestamps);
    return { limited: true, retryAfterSeconds };
  }

  recentTimestamps.push(now);
  contactRateLimitStore.set(key, recentTimestamps);
  return { limited: false, retryAfterSeconds: 0 };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = (await request.json()) as Record<string, unknown>;
    const fullName = typeof rawBody.fullName === "string" ? rawBody.fullName.trim() : "";
    const phone = typeof rawBody.phone === "string" ? rawBody.phone.trim() : "";
    const email = typeof rawBody.email === "string" ? rawBody.email.trim() : "";
    const inquiryType = typeof rawBody.inquiryType === "string" ? rawBody.inquiryType.trim() : "";
    const message = typeof rawBody.message === "string" ? rawBody.message.trim() : "";
    const website = typeof rawBody.website === "string" ? rawBody.website.trim() : "";

    if (!fullName || !phone || !email || !inquiryType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (website) {
      return NextResponse.json({ error: BOT_OR_RATE_LIMIT_ERROR }, { status: 400 });
    }

    const clientIp = getClientIp(request);
    const rateLimitResult = checkRateLimit(`${clientIp}:/api/contact`);
    if (rateLimitResult.limited) {
      return NextResponse.json(
        { error: BOT_OR_RATE_LIMIT_ERROR },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimitResult.retryAfterSeconds),
          },
        }
      );
    }

    const formattedInquiryType = inquiryTypeLabels[inquiryType] || inquiryType;
    const subjectInquiryType = formattedInquiryType.replace(/[\r\n]/g, " ").slice(0, 120);

    const safeFullName = escapeHtml(fullName);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeFormattedInquiryType = escapeHtml(formattedInquiryType);
    const safeMessage = message ? escapeHtml(message).replace(/\n/g, "<br>") : "";

    const { data, error } = await resend.emails.send({
      from: "Springbank Enquiry <onboarding@resend.dev>",
      to: ["sgbcproperty@icloud.com"],
      replyTo: email,
      subject: `New Enquiry: ${subjectInquiryType} - Springbank, 30 O'Malleys Rd Mardan`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a1a1a; border-bottom: 2px solid #1a1a1a; padding-bottom: 10px;">
            New Property Enquiry
          </h1>

          <h2 style="color: #333; margin-top: 24px;">Springbank - 30 O'Malleys Rd, Mardan VIC 3953</h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 12px; background: #fafafa;">${safeFullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Phone</td>
              <td style="padding: 12px; background: #fafafa;">
                <a href="tel:${safePhone}" style="color: #1a1a1a;">${safePhone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Email</td>
              <td style="padding: 12px; background: #fafafa;">
                <a href="mailto:${safeEmail}" style="color: #1a1a1a;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Enquiry Type</td>
              <td style="padding: 12px; background: #fafafa;">${safeFormattedInquiryType}</td>
            </tr>
          </table>

          ${
            safeMessage
              ? `
            <div style="margin-top: 24px;">
              <h3 style="color: #333; margin-bottom: 8px;">Message</h3>
              <div style="padding: 16px; background: #f5f5f5; border-left: 4px solid #1a1a1a;">
                ${safeMessage}
              </div>
            </div>
          `
              : ""
          }

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>This enquiry was submitted via springbankmardan.com</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
