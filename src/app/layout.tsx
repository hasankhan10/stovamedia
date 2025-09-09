
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import StickyCTA from '@/components/shared/StickyCTA';
import { ThemeProvider } from '@/components/shared/theme-provider';
import AIChatbot from '@/components/shared/AIChatbot';
import Script from 'next/script';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stovamedia.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Stova Media - Websites & AI Solutions Agency',
    template: '%s | Stova Media',
  },
  description: 'Stova Media builds high-performance websites and AI agents to fuel business growth for Indian companies.',
  keywords: ['Website Development India', 'AI Agents India', 'Next.js Development', 'AI Chatbot Services', 'Digital Agency India', 'Stova Media'],
  verification: {
    google: 'YOUR_VERIFICATION_CODE',
  },
  openGraph: {
    title: 'Stova Media - Websites & AI Solutions Agency',
    description: 'Stova Media builds high-performance websites and AI agents to fuel business growth for Indian companies.',
    url: siteUrl,
    siteName: 'Stova Media',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Stova Media Digital Growth Platform',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stova Media - Websites & AI Solutions Agency',
    description: 'Stova Media builds high-performance websites and AI agents to fuel business growth for Indian companies.',
    images: [`${siteUrl}/og-image.jpg`],
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
  icons: {
    icon: '/stovalogo.jpg',
    shortcut: '/stovalogo.jpg',
    apple: '/stovalogo.jpg',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Stova Media',
  url: siteUrl,
  logo: `${siteUrl}/stovalogo.jpg`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-94320-53261',
    contactType: 'Customer Service',
    areaServed: 'IN',
    availableLanguage: 'en',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61574870648770',
    'https://www.instagram.com/stovamedia/',
    'https://www.linkedin.com/company/stova-media',
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-screen">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <AIChatbot />
          <StickyCTA />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
