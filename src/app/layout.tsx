import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import StickyCTA from '@/components/shared/StickyCTA';

export const metadata: Metadata = {
  title: 'Stova Media - Powering Digital Growth with Ads, AI & Web',
  description: 'We are a results-obsessed digital agency helping businesses grow with performance ads, powerful websites, and smart AI agents.',
  keywords: ['Meta Ads', 'Website Development', 'AI Agents', 'Digital Marketing', 'Stova Media'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyCTA />
        <Toaster />
      </body>
    </html>
  );
}
