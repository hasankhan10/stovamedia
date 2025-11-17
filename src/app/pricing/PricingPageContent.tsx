// src/app/pricing/PricingPageContent.tsx
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Pricing } from '@/components/blocks/pricing';
import type { PricingPlan } from '@/components/blocks/pricing';
import { motion } from 'framer-motion';

const pricingData: { [key: string]: { title: string; description: string; plans: PricingPlan[] } } = {
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
        name: 'Ecommerce',
        price: '17999',
        yearlyPrice: (17999 * 0.8).toFixed(0),
        period: 'one-time',
        description: 'A complete ecommerce solution to sell your products online.',
        features: [
            'All Business Plan Features',
            'Up to 20 Products Upload',
            'Payment Gateway Integration',
            'Shopping Cart & Checkout',
            'Order Management System',
        ],
        buttonText: 'Get Ecommerce Site',
        href: '/contact?service=Website+Development&plan=Ecommerce',
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

  const getPricingData = () => {
    if (service && pricingData[service]) {
        return pricingData[service];
    }
    // Default to showing a primary service if none is selected, e.g., 'website-development'
    return pricingData['website-development'];
  }

  const { title, description, plans } = getPricingData();

  return <div className="max-w-screen-lg mx-auto"><Pricing plans={plans} title={title} description={description} /></div>;
}

export default function PricingPageContent() {
    return (
        <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            {/* The outer Suspense is in page.tsx, so we can use hooks here */}
            <PricingContent />
        </motion.div>
    )
}
