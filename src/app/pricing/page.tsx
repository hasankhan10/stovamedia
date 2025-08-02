// src/app/pricing/page.tsx
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Pricing } from '@/components/blocks/pricing';
import type { PricingPlan } from '@/components/blocks/pricing';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

// Although this is a client component, we can export metadata from it.
// Next.js will render it on the server.
export const metadata: Metadata = {
    title: 'Pricing for Website, AI, and Meta Ads Services',
    description: 'Find transparent pricing for Stova Media services. We offer clear packages for website development, AI agents, and Meta Ads to fit your business needs in India.',
    alternates: {
      canonical: '/pricing',
    }
};

const pricingData: { [key: string]: { title: string; description: string; plans: PricingPlan[] } } = {
  'meta-ads': {
    title: 'Meta Advertising Plans',
    description: 'Choose the right plan to amplify your reach and drive results.',
    plans: [
      {
        name: 'Basic',
        price: '1999',
        yearlyPrice: (1999 * 12 * 0.8).toFixed(0),
        period: 'per month',
        description: 'Perfect for startups and small businesses testing the waters.',
        features: [
          '1 Ad Campaign Setup',
          '2 Ad Sets',
          'Weekly Reporting',
          'Basic Audience Targeting',
          'Email Support',
        ],
        buttonText: 'Choose Basic Plan',
        href: '/contact?service=Meta+Advertising&plan=Basic',
        isPopular: false,
      },
      {
        name: 'Medium',
        price: '2999',
        yearlyPrice: (2999 * 12 * 0.8).toFixed(0),
        period: 'per month',
        description: 'Ideal for growing businesses looking to scale their efforts.',
        features: [
          '3 Ad Campaigns Setup',
          '6 Ad Sets',
          'Bi-Weekly Strategy Calls',
          'Advanced Audience Targeting & Retargeting',
          'A/B Testing',
          'Priority Support',
        ],
        buttonText: 'Choose Medium Plan',
        href: '/contact?service=Meta+Advertising&plan=Medium',
        isPopular: true,
      },
      {
        name: 'Pro',
        price: '6999',
        yearlyPrice: (6999 * 12 * 0.8).toFixed(0),
        period: 'per month',
        description: 'Comprehensive solution for established brands.',
        features: [
          'Unlimited Ad Campaigns',
          'Full Funnel Strategy',
          'Weekly Strategy Calls',
          'Custom Audience & Lookalike Creation',
          'Conversion Rate Optimization',
          'Dedicated Account Manager',
        ],
        buttonText: 'Choose Pro Plan',
        href: '/contact?service=Meta+Advertising&plan=Pro',
        isPopular: false,
      },
    ],
  },
  'website-development': {
    title: 'Website Development Packages',
    description: 'High-performance websites built to convert.',
    plans: [
      {
        name: 'Basic Site',
        price: '6999',
        yearlyPrice: (6999 * 0.8).toFixed(0),
        period: 'one-time',
        description: 'A professional landing page or a small brochure site.',
        features: [
          'Up to 5 Pages',
          'Fully Responsive Design',
          'Contact Form',
          'Advance SEO Setup',
          '6 Months of Support',
        ],
        buttonText: 'Get Basic Site',
        href: '/contact?service=Website+Development&plan=Basic+Site',
        isPopular: false,
      },
      {
        name: 'Business Site',
        price: '8999',
        yearlyPrice: (8999 * 0.8).toFixed(0),
        period: 'one-time',
        description: 'A complete website solution for most businesses.',
        features: [
          'Up to 8 Pages',
          'Custom Design',
          'Advanced SEO Setup',
          'AI Chat Bot Installation',
          'Admin dashboard setup',
          '6 Months of Support',
        ],
        buttonText: 'Get Business Site',
        href: '/contact?service=Website+Development&plan=Business+Site',
        isPopular: true,
      },
      {
        name: 'Full Customise',
        price: 'Custom',
        yearlyPrice: 'Custom',
        period: 'one-time',
        description: 'Contact us for a custom quote tailored to your specific needs.',
        features: [],
        buttonText: 'Contact for Quote',
        href: '/contact?service=Website+Development&plan=Full+Customise',
        isPopular: false,
      },
    ],
  },
  'ai-services': {
    title: 'AI Service Plans',
    description: 'Automate and enhance your business with intelligent AI agents.',
    plans: [
      {
        name: 'AI Chat Bot',
        price: 'Custom',
        yearlyPrice: '0',
        period: 'one-time',
        description: 'Pricing is based on your specific requirements. Contact us for a quote.',
        features: [
          'Custom Trained on Your Data',
          '24/7 Lead Qualification',
          'Automated FAQ Answering',
          'Website Integration',
          'Monthly Performance Report',
        ],
        buttonText: 'Contact for Quote',
        href: '/contact?service=AI+Agents&plan=AI+Chat+Bot',
        isPopular: false,
      },
      {
        name: 'Full Email Automation',
        price: 'Custom',
        yearlyPrice: '0',
        period: 'one-time',
        description: 'Pricing is based on your specific requirements. Contact us for a quote.',
        features: [
          'Automated Welcome & Follow-up Sequences',
          'Lead Nurturing Funnels',
          'Personalized Content Insertion',
          'Integration with Website Forms',
          'A/B Testing for Subject Lines & Content',
        ],
        buttonText: 'Contact for Quote',
        href: '/contact?service=AI+Agents&plan=Full+Email+Automation',
        isPopular: false,
      },
      {
        name: 'AI Voice Assistance',
        price: 'Custom',
        yearlyPrice: '0',
        period: 'one-time',
        description: 'Make AI voice assistance according to your business.',
        features: [
          'AI Receptionist for Inbound Calls',
          'AI Personal Assistant for Task Management',
          'Automated Appointment Setting & Reminders',
          'Custom Voice & Personality Configuration',
          'CRM Integration',
        ],
        buttonText: 'Contact for Quote',
        href: '/contact?service=AI+Agents&plan=AI+Voice+Assistance',
        isPopular: false,
      },
      {
        name: 'Personalized AI Automation',
        price: 'Custom',
        yearlyPrice: '0',
        period: 'one-time',
        description: 'Bespoke AI solutions tailored to your unique business processes and workflow.',
        features: [
          'Custom Workflow Integration',
          'Automated Data Entry & Processing',
          'Personalized Customer Interactions',
          'API integrations with your existing tools',
          'Dedicated Project Manager',
        ],
        buttonText: 'Contact for Quote',
        href: '/contact?service=AI+Agents&plan=Personalized+AI+Automation',
        isPopular: false,
      },
    ],
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function PricingContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') as keyof typeof pricingData | null;

  if (!service || !pricingData[service]) {
    // Default to showing a primary service if none is selected, e.g., 'website-development'
    const defaultService = 'website-development';
    const { title, description, plans } = pricingData[defaultService];
    return <Pricing plans={plans} title={title} description={description} />;
  }

  const { title, description, plans } = pricingData[service];

  return <Pricing plans={plans} title={title} description={description} />;
}

export default function PricingPage() {
    return (
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading pricing...</div>}>
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
            >
                <PricingContent />
            </motion.div>
        </Suspense>
    )
}
