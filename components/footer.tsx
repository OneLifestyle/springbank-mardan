import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Property Info */}
          <div>
            <h3 className="font-serif text-2xl mb-4">Springbank</h3>
            <p className="text-primary-foreground/70 leading-relaxed mb-4">
              A master-built Mediterranean sanctuary on 5 acres overlooking the Tarwin Valley. The ultimate tree change or sea change lifestyle property in{" "}
              <Link href="/south-gippsland" className="underline underline-offset-4 hover:text-primary-foreground">
                South Gippsland
              </Link>
              , centrally located between{" "}
              <Link href="/leongatha" className="underline underline-offset-4 hover:text-primary-foreground">
                Leongatha
              </Link>
              ,{" "}
              <Link href="/mirboo-north" className="underline underline-offset-4 hover:text-primary-foreground">
                Mirboo North
              </Link>
              {" "}and{" "}
              <Link href="/meeniyan" className="underline underline-offset-4 hover:text-primary-foreground">
                Meeniyan
              </Link>
              , with easy access to{" "}
              <Link href="/wilsons-promontory" className="underline underline-offset-4 hover:text-primary-foreground">
                Wilsons Promontory
              </Link>
              .
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4" />
              <span>30 O'Malleys Rd, Mardan VIC 3953</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#overview"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Overview
              </a>
              <a
                href="#features"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#gallery"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Gallery
              </a>
              <a
                href="#grounds"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                The Grounds
              </a>
              <a
                href="#location"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Location
              </a>
              <Link
                href="/blog"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Journal
              </Link>
              <a
                href="#contact"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact Agent</h4>
            <p className="text-primary-foreground/90 font-medium mb-1">
              Dean Jones
            </p>
            <p className="text-primary-foreground/70 mb-4">
              One Lifestyle Real Estate
            </p>
            <div className="space-y-2">
              <a
                href="tel:0431639749"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                0431 639 749
              </a>
              <a
                href="mailto:dean@onelifestyle.com.au"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                dean@onelifestyle.com.au
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-primary-foreground/50">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://onelifestylerealestate.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors underline underline-offset-4"
            >
              One Lifestyle Real Estate
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.realestate.com.au/property-acreage+semi-rural-vic-mardan-150373704"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors"
            >
              View on realestate.com.au
            </a>
            <span>|</span>
            <a
              href="https://www.onelifestylerealestate.com.au/listings/30-omalleys-road-mardan-197100.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors"
            >
              View on onelifestylerealestate.com.au
            </a>
            <span>|</span>
            <span>springbankmardan.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
