import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import StickyCTA from '@/components/shared/StickyCTA';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stovamedia.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Stova Media - Powering Digital Growth with Ads, AI & Web',
    template: '%s | Stova Media',
  },
  description: 'We are a results-obsessed digital agency helping businesses grow with performance ads, powerful websites, and smart AI agents.',
  keywords: ['Meta Ads', 'Website Development', 'AI Agents', 'Digital Marketing', 'Stova Media'],
  openGraph: {
    title: 'Stova Media - Powering Digital Growth with Ads, AI & Web',
    description: 'Results-obsessed digital agency specializing in Meta Ads, Website Development, and AI Agents.',
    url: siteUrl,
    siteName: 'Stova Media',
    images: [
      {
        url: '/og-image.jpg', // It's recommended to create and add an og-image.jpg in your public folder
        width: 1200,
        height: 630,
        alt: 'Stova Media Digital Growth Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stova Media - Powering Digital Growth with Ads, AI & Web',
    description: 'Results-obsessed digital agency specializing in Meta Ads, Website Development, and AI Agents.',
    images: ['/og-image.jpg'], // Must be an absolute URL in the future
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
