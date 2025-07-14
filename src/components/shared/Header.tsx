
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/icons/Logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/consultation", label: "AI Consultation" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 max-w-screen-2xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-10 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium text-foreground/70 transition-colors hover:text-foreground",
                pathname === link.href && "font-semibold text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild size="lg">
            <Link href="/contact">Book Strategy Call</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm p-0">
               <SheetHeader className="p-6 border-b">
                 <SheetTitle><Logo /></SheetTitle>
                 <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-2 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-semibold p-3 rounded-lg transition-colors hover:bg-muted text-foreground/70",
                       pathname === link.href && "text-foreground bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-6">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Book Strategy Call</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
