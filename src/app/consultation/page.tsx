import type { Metadata } from 'next';
import ConsultationPageContent from './ConsultationPageContent';
import { Suspense } from 'react';

const title = 'Free AI Business Growth Consultation | Stova Media';
const description = 'Get a free, personalized business growth plan from our AI-powered tool. Analyze your goals, marketing, and revenue to receive actionable strategies to help your business succeed in India.';
const pageUrl = '/consultation';

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

export default function AIBusinessConsultantPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConsultationPageContent />
    </Suspense>
  );
}
