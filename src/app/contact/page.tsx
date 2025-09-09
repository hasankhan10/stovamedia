
import { Suspense } from "react";
import type { Metadata } from 'next';
import ContactPageContent from "./ContactPageContent";

const title = 'Contact Stova Media | Web & AI Agency India';
const description = 'Get in touch with Stova Media to discuss your project. Contact us for a free strategy call about Next.js Website Development or AI Chatbot services for your business in India.';
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
