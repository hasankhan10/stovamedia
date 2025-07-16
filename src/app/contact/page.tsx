import { Suspense } from "react";
import type { Metadata } from 'next';
import ContactPageContent from "./ContactPageContent";

const title = 'Contact Stova Media | Digital Growth Agency';
const description = 'Get in touch with Stova Media to discuss your project. Contact us for a free strategy call about Meta Ads, Website Development, or AI Agents.';
const pageUrl = '/contact';

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

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
