import type { Metadata } from 'next';
import ServicesPageContent from './ServicesPageContent';
import { Suspense } from 'react';

const title = 'Our Services: Meta Ads, Web Development, AI Agents';
const description = 'Explore the services offered by Stova Media. We specialize in ROI-driven Meta Ads, high-performance website development, and intelligent AI automation to grow your business.';
const pageUrl = '/services';

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: pageUrl,
    },
    twitter: {
      title: title,
      description: description,
    },
    alternates: {
      canonical: pageUrl,
    }
};

export default function ServicesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <ServicesPageContent />
    </Suspense>
  );
}
