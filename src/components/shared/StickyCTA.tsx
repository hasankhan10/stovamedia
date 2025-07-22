"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function StickyCTA() {
  const pathname = usePathname();
  
  if (pathname === '/contact') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button asChild size="lg" className="rounded-lg shadow-lg animate-pulse">
        <a href="tel:+919432053261">
          <Phone className="mr-2 h-5 w-5" />
          Book a Call
        </a>
      </Button>
    </div>
  );
}
