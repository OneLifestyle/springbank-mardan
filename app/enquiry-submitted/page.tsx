import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Enquiry Submitted | Springbank Mardan",
  description:
    "Thank you for your enquiry. Our team will be in touch shortly regarding Springbank at 30 O'Malleys Rd, Mardan.",
  alternates: {
    canonical: "https://springbankmardan.com/enquiry-submitted",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnquirySubmittedPage() {
  return (
    <main className="min-h-screen bg-background py-20 md:py-28">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <section className="rounded-xl border border-border bg-card p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Enquiry Received
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Thank you, your enquiry has been sent
            </h1>
            <p className="mt-5 text-muted-foreground">
              Dean Jones will review your request and be in touch shortly.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:0431639749"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                0431 639 749
              </a>
              <a
                href="mailto:dean@onelifestyle.com.au"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                dean@onelifestyle.com.au
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/">Return to property listing</Link>
              </Button>
              <Button variant="outline" asChild className="bg-transparent">
                <a
                  href="https://www.realestate.com.au/property-acreage+semi-rural-vic-mardan-150373704"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View listing on realestate.com.au
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
