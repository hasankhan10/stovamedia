import type { Metadata } from 'next';
import ConsultationPageContent from './ConsultationPageContent';
import { Suspense } from 'react';

const title = 'Free AI Business Growth Consultation';
const description = 'Get a free, personalized growth plan for your business. Our AI-powered tool analyzes your goals and provides actionable strategies to help you succeed.';
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
