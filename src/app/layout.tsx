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
  icons: {
    icon: 'https://scontent.fixb1-1.fna.fbcdn.net/v/t39.30808-6/496951606_122118032312829021_4712571896223912843_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vbRkCDnXTeIQ7kNvwFIACiI&_nc_oc=AdkbLaswwvzf7kWPsDJiLQp8B5cbo8KrdSGTR8pRTkHuhAbfe0HphBuM5bfGrzR74Y4&_nc_zt=23&_nc_ht=scontent.fixb1-1.fna&_nc_gid=nYZLC8s-yS5Ch34G4rueSA&oh=00_AfQUK48s2TbPKtF00GUyTi1PJ2v98BJyfK8sGwul_lG53A&oe=687B139C',
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
