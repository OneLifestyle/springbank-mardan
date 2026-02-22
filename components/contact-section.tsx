"use client";

import { Mail, Phone, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type TurnstileRenderOptions = {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type ContactFormData = {
  fullName: string;
  phone: string;
  email: string;
  inquiryType: string;
  message: string;
  website: string;
};

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const FORM_UNAVAILABLE_MESSAGE =
  "Form verification is not configured. Please call or email Dean directly.";

export function ContactSection() {
  const router = useRouter();
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: "",
    website: "",
  });
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isTurnstileLoaded, setIsTurnstileLoaded] = useState(false);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!turnstileSiteKey) {
      setTurnstileError(FORM_UNAVAILABLE_MESSAGE);
      return;
    }

    const onScriptError = () => {
      setTurnstileError(
        "Verification service is unavailable. Please call or email Dean directly."
      );
    };

    const initTurnstile = () => {
      if (!window.turnstile || !turnstileContainerRef.current || turnstileWidgetIdRef.current) {
        return;
      }

      turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: turnstileSiteKey,
        callback: (token: string) => {
          setTurnstileToken(token);
          setTurnstileError(null);
        },
        "expired-callback": () => {
          setTurnstileToken("");
          setTurnstileError("Verification expired. Please complete it again.");
        },
        "error-callback": () => {
          setTurnstileToken("");
          setTurnstileError("Verification failed. Please try again.");
        },
      });

      setIsTurnstileLoaded(true);
    };

    if (window.turnstile) {
      initTurnstile();
      return;
    }

    const scriptId = "cloudflare-turnstile-api";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    script.addEventListener("load", initTurnstile);
    script.addEventListener("error", onScriptError);

    return () => {
      script?.removeEventListener("load", initTurnstile);
      script?.removeEventListener("error", onScriptError);
    };
  }, []);

  const resetTurnstile = () => {
    setTurnstileToken("");
    if (window.turnstile && turnstileWidgetIdRef.current) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!turnstileSiteKey) {
      setError(FORM_UNAVAILABLE_MESSAGE);
      return;
    }

    if (!turnstileToken) {
      setError("Please complete the verification check before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(
          payload?.error ||
            "There was an error submitting your enquiry. Please try again or contact us directly."
        );
      }

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        inquiryType: "",
        message: "",
        website: "",
      });
      resetTurnstile();
      router.push("/enquiry-submitted?source=contact-form");
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "There was an error submitting your enquiry. Please try again or contact us directly.";
      setError(message);
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">Get in Touch</p>
            <h2 className="mb-6 font-serif text-3xl text-foreground text-balance md:text-4xl lg:text-5xl">
              Arrange Your Private Inspection
            </h2>
            <div className="mb-8 h-px w-20 bg-primary" />

            <p className="mb-8 leading-relaxed text-muted-foreground">
              For further information or to arrange a private inspection of this unique Mediterranean
              sanctuary, please contact Dean Jones at{" "}
              <a
                href="https://onelifestylerealestate.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                One Lifestyle Real Estate
              </a>
              . Experience the lifestyle of profound tranquillity that Springbank offers.
            </p>

            <div className="mb-8 border border-border bg-secondary p-6 md:p-8">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-primary/10">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-xl text-foreground">Dean Jones</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://onelifestylerealestate.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      One Lifestyle Real Estate
                    </a>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <a
                  href="tel:0431639749"
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  0431 639 749
                </a>
                <a
                  href="mailto:dean@onelifestyle.com.au"
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  dean@onelifestyle.com.au
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://www.realestate.com.au/property-acreage+semi-rural-vic-mardan-150373704"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
              >
                View on realestate.com.au →
              </a>
              <a
                href="https://www.onelifestylerealestate.com.au/listings/30-omalleys-road-mardan-197100.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
              >
                View on onelifestylerealestate.com.au →
              </a>
            </div>
          </div>

          <div className="border border-border bg-card p-6 md:p-10">
            <h3 className="mb-6 font-serif text-2xl text-foreground">Send an Enquiry</h3>

            <form onSubmit={handleSubmit} className="relative space-y-6">
              {error && (
                <div className="border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
                  {error}
                </div>
              )}

              <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="mt-2"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone number"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email address"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="inquiryType">Nature of Enquiry *</Label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                  required
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select enquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inspection">Private Inspection</SelectItem>
                    <SelectItem value="floor-plans">Request Floor Plans</SelectItem>
                    <SelectItem value="pricing">Pricing Enquiry</SelectItem>
                    <SelectItem value="general">General Information</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about your enquiry..."
                  rows={4}
                  className="mt-2 resize-none"
                />
              </div>

              {turnstileSiteKey && (
                <div>
                  <Label htmlFor="turnstile-container">Verification *</Label>
                  <div id="turnstile-container" ref={turnstileContainerRef} className="mt-2 min-h-16" />
                  {!isTurnstileLoaded && !turnstileError && (
                    <p className="mt-2 text-xs text-muted-foreground">Loading verification...</p>
                  )}
                  {turnstileError && (
                    <p className="mt-2 text-sm text-destructive">{turnstileError}</p>
                  )}
                </div>
              )}

              {!turnstileSiteKey && (
                <div className="border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
                  {FORM_UNAVAILABLE_MESSAGE}
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={
                  isSubmitting ||
                  !turnstileSiteKey ||
                  !turnstileToken ||
                  Boolean(turnstileError)
                }
              >
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting this form, you agree to be contacted regarding this property.
              </p>
              <p className="text-center text-[11px] text-muted-foreground">
                This site is protected by Cloudflare Turnstile.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
