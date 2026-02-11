"use client";

import React from "react"

import { useState } from "react";
import { Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      setIsSubmitted(true);

      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          inquiryType: "",
          message: "",
        });
      }, 5000);
    } catch {
      setError("There was an error submitting your enquiry. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div>
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Arrange Your Private Inspection
            </h2>
            <div className="w-20 h-px bg-primary mb-8" />

            <p className="text-muted-foreground leading-relaxed mb-8">
              For further information or to arrange a private inspection of this
              unique Mediterranean sanctuary, please contact Dean Jones at{" "}
              <a
                href="https://onelifestylerealestate.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                One Lifestyle Real Estate
              </a>
              . Experience the lifestyle of profound
              tranquillity that Springbank offers.
            </p>

            {/* Agent Card */}
            <div className="bg-secondary p-6 md:p-8 border border-border mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center shrink-0">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-1">
                    Dean Jones
                  </h3>
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
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  0431 639 749
                </a>
                <a
                  href="mailto:dean@onelifestyle.com.au"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  dean@onelifestyle.com.au
                </a>
              </div>
            </div>

            {/* Property Link */}
            <a
              href="https://www.realestate.com.au/property-house-vic-mardan-150094768"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            >
              View on realestate.com.au →
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 md:p-10 border border-border">
            <h3 className="font-serif text-2xl text-foreground mb-6">
              Send an Enquiry
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl text-foreground mb-2">
                  Thank You!
                </h4>
                <p className="text-muted-foreground">
                  Your enquiry has been submitted. Dean will be in touch
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Your email address"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inquiryType">Nature of Enquiry *</Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, inquiryType: value })
                    }
                    required
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select enquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inspection">
                        Private Inspection
                      </SelectItem>
                      <SelectItem value="floor-plans">
                        Request Floor Plans
                      </SelectItem>
                      <SelectItem value="pricing">Pricing Enquiry</SelectItem>
                      <SelectItem value="general">
                        General Information
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us more about your enquiry..."
                    rows={4}
                    className="mt-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted regarding
                  this property.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
