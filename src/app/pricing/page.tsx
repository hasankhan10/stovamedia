// src/app/pricing/page.tsx
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const pricingData = {
  'meta-ads': {
    title: 'Meta Advertising Plans',
    description: 'Choose the right plan to amplify your reach and drive results.',
    plans: [
      {
        name: 'Basic',
        price: '₹15,000',
        period: '/month',
        description: 'Perfect for startups and small businesses testing the waters.',
        features: [
          '1 Ad Campaign Setup',
          '2 Ad Sets',
          'Weekly Reporting',
          'Basic Audience Targeting',
          'Email Support',
        ],
        cta: 'Choose Basic Plan',
        service: 'Meta Advertising',
      },
      {
        name: 'Medium',
        price: '₹30,000',
        period: '/month',
        description: 'Ideal for growing businesses looking to scale their efforts.',
        features: [
          '3 Ad Campaigns Setup',
          '6 Ad Sets',
          'Bi-Weekly Strategy Calls',
          'Advanced Audience Targeting & Retargeting',
          'A/B Testing',
          'Priority Support',
        ],
        cta: 'Choose Medium Plan',
        service: 'Meta Advertising',
        popular: true,
      },
      {
        name: 'Pro',
        price: '₹50,000',
        period: '/month',
        description: 'Comprehensive solution for established brands.',
        features: [
          'Unlimited Ad Campaigns',
          'Full Funnel Strategy',
          'Weekly Strategy Calls',
          'Custom Audience & Lookalike Creation',
          'Conversion Rate Optimization',
          'Dedicated Account Manager',
        ],
        cta: 'Choose Pro Plan',
        service: 'Meta Advertising',
      },
    ],
  },
  'website-development': {
    title: 'Website Development Packages',
    description: 'High-performance websites built to convert.',
    plans: [
      {
        name: 'Basic Site',
        price: '₹40,000',
        period: 'one-time',
        description: 'A professional landing page or a small brochure site.',
        features: [
          'Up to 3 Pages',
          'Responsive Design',
          'Contact Form',
          'Basic SEO Setup',
          '1 Week of Support',
        ],
        cta: 'Get Basic Site',
        service: 'Website Development',
      },
      {
        name: 'Business Site',
        price: '₹80,000',
        period: 'one-time',
        description: 'A complete website solution for most businesses.',
        features: [
          'Up to 8 Pages',
          'Custom Design',
          'CMS Integration (e.g., WordPress)',
          'Advanced SEO Setup',
          '1 Month of Support',
          'Blog Setup',
        ],
        cta: 'Get Business Site',
        service: 'Website Development',
        popular: true,
      },
      {
        name: 'E-commerce',
        price: '₹1,50,000',
        period: 'one-time',
        description: 'A full-featured online store to sell your products.',
        features: [
          'Unlimited Pages',
          'Full E-commerce Functionality',
          'Payment Gateway Integration',
          'Product Management System',
          '3 Months of Support',
          'Advanced Security',
        ],
        cta: 'Get E-commerce Site',
        service: 'Website Development',
      },
    ],
  },
};

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  service: string;
  popular?: boolean;
};

type ServicePricing = {
  title: string;
  description: string;
  plans: Plan[];
};

function PricingContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') as keyof typeof pricingData | null;

  if (!service || !pricingData[service]) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Invalid Service</h2>
        <p className="text-muted-foreground">Please select a service to see pricing.</p>
        <Button asChild className="mt-4">
          <Link href="/services">Back to Services</Link>
        </Button>
      </div>
    );
  }

  const { title, description, plans } = pricingData[service];

  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-6 md:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
            {title}
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>
      </section>

      <AnimatedSection as="section" className="py-16 md:py-24 bg-background">
        <div className="container px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <Card key={plan.name} className={`flex flex-col h-full ${plan.popular ? 'border-primary shadow-2xl relative' : ''}`}>
                 {plan.popular && (
                  <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="pt-10">
                  <CardTitle className="font-headline text-3xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-6">
                  <div>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild size="lg" className="w-full" variant={plan.popular ? 'default' : 'secondary'}>
                    <Link href={`/contact?service=${encodeURIComponent(plan.service)}&plan=${encodeURIComponent(plan.name)}`}>
                      {plan.cta}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default function PricingPage() {
    return (
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading pricing...</div>}>
            <PricingContent />
        </Suspense>
    )
}
