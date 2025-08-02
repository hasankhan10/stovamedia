
import { Suspense } from 'react';
import type { Metadata } from 'next';
import PricingPageContent from './PricingPageContent';

export const metadata: Metadata = {
    title: 'Pricing for Website, AI, and Meta Ads Services',
    description: 'Find transparent pricing for Stova Media services. We offer clear packages for website development, AI agents, and Meta Ads to fit your business needs in India.',
    alternates: {
      canonical: '/pricing',
    }
};

export default function PricingPage() {
    return (
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading pricing...</div>}>
           <PricingPageContent />
        </Suspense>
    )
}
