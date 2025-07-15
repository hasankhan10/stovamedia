import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Facebook, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="container py-8 px-6 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground">Powering Digital Growth with Ads, AI & Web.</p>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Dholahat & Garia, India</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/company/stova-media" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/stovamedia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.facebook.com/profile.php?id=61574870648770" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="font-semibold text-primary mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services#meta-ads" className="text-muted-foreground hover:text-accent">Meta Advertising</Link></li>
                <li><Link href="/services#websites" className="text-muted-foreground hover:text-accent">Website Development</Link></li>
                <li><Link href="/services#ai-agents" className="text-muted-foreground hover:text-accent">AI Agents</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-accent">Home</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-accent">Services</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-accent">Contact Us</Link></li>
                <li><Link href="/consultation" className="text-muted-foreground hover:text-accent">AI Consultation</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Stova Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
