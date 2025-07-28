import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import StickyCTA from '@/components/shared/StickyCTA';
import { ThemeProvider } from '@/components/shared/theme-provider';
import AIChatbot from '@/components/shared/AIChatbot';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stovamedia.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Stova Media - Digital Marketing Agency | Meta Ads, Websites, AI',
    template: '%s | Stova Media',
  },
  description: 'Stova Media is a top-rated digital marketing agency in India, specializing in ROI-driven Meta Ads, high-performance website development, and custom AI chatbots to fuel business growth.',
  keywords: ['Digital Marketing Agency India', 'Meta Ads Expert', 'Facebook Ads Agency', 'Next.js Website Development', 'AI Chatbot Services', 'SEO Services India', 'Stova Media'],
  verification: {
    google: 'VZ9jbL8gtCq7CswbB05g5pLSN-hSzcoFxHtTd8lLoGs',
  },
  openGraph: {
    title: 'Stova Media - Digital Marketing Agency | Meta Ads, Websites, AI',
    description: 'Stova Media is a top-rated digital marketing agency in India, specializing in ROI-driven Meta Ads, high-performance website development, and custom AI chatbots to fuel business growth.',
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
    title: 'Stova Media - Digital Marketing Agency | Meta Ads, Websites, AI',
    description: 'Stova Media is a top-rated digital marketing agency in India, specializing in ROI-driven Meta Ads, high-performance website development, and custom AI chatbots to fuel business growth.',
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
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
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
