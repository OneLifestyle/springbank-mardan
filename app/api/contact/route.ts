import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, inquiryType, message } = body;

    // Validate required fields
    if (!fullName || !phone || !email || !inquiryType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format the inquiry type for display
    const inquiryTypeLabels: Record<string, string> = {
      inspection: "Private Inspection",
      "floor-plans": "Request Floor Plans",
      pricing: "Pricing Enquiry",
      general: "General Information",
      other: "Other",
    };

    const formattedInquiryType =
      inquiryTypeLabels[inquiryType] || inquiryType;

    // Send email to the Resend account owner's email (required for free tier without verified domain)
    // The reply-to is set to the inquirer's email so you can reply directly to them
    const { data, error } = await resend.emails.send({
      from: "Springbank Enquiry <onboarding@resend.dev>",
      to: ["sgbcproperty@icloud.com"],
      replyTo: email,
      subject: `New Enquiry: ${formattedInquiryType} - Springbank, 30 O'Malleys Rd Mardan`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a1a1a; border-bottom: 2px solid #1a1a1a; padding-bottom: 10px;">
            New Property Enquiry
          </h1>
          
          <h2 style="color: #333; margin-top: 24px;">Springbank - 30 O'Malleys Rd, Mardan VIC 3953</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 12px; background: #fafafa;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Phone</td>
              <td style="padding: 12px; background: #fafafa;">
                <a href="tel:${phone}" style="color: #1a1a1a;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Email</td>
              <td style="padding: 12px; background: #fafafa;">
                <a href="mailto:${email}" style="color: #1a1a1a;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Enquiry Type</td>
              <td style="padding: 12px; background: #fafafa;">${formattedInquiryType}</td>
            </tr>
          </table>
          
          ${
            message
              ? `
            <div style="margin-top: 24px;">
              <h3 style="color: #333; margin-bottom: 8px;">Message</h3>
              <div style="padding: 16px; background: #f5f5f5; border-left: 4px solid #1a1a1a;">
                ${message.replace(/\n/g, "<br>")}
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
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
