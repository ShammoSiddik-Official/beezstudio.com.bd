import { Link } from "wouter";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/beez-studio-logo.png"
                alt="Beez Studio"
                className="h-14 w-auto brightness-0"
              />
            </Link>
            <p className="text-muted-foreground max-w-xs leading-relaxed mb-6">
              Where architecture becomes art. Precision, intention, and beauty in every line.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <SiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <SiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Studio</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Architecture & Planning</li>
              <li>Interior Design</li>
              <li>Construction Management</li>
              <li>Renovation & Remodeling</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Dhaka, Bangladesh</li>
              <li>+880 1234 567 890</li>
              <li>info@beezstudio.com.bd</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Beez Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
