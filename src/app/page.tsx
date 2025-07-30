
"use client";

import { useState, useEffect, useCallback } from 'react';
import type { EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Link from 'next/link';
import { Megaphone, CodeXml, Bot, Target, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CTASection } from "@/components/blocks/cta-with-glow";
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const timelineData = [
  {
    id: 1,
    title: "Websites",
    date: "Conversion-Ready",
    content: "Fast, beautiful, conversion-ready websites. We build custom sites that are lightning-fast and optimized to convert.",
    category: "Development",
    icon: CodeXml,
    relatedIds: [2, 3],
    status: "in-progress" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "AI Agents",
    date: "24/7 Automation",
    content: "Automate sales & support with AI-powered bots. Qualify leads and provide instant support with custom-trained AI.",
    category: "Automation",
    icon: Bot,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 3,
    title: "Meta Ads",
    date: "ROI-Focused",
    content: "Lead-focused Meta campaigns with clear ROI. We design and manage campaigns to get you in front of the right customers.",
    category: "Advertising",
    icon: Megaphone,
    relatedIds: [1, 2],
    status: "in-progress" as const,
    energy: 90,
  },
];


const testimonials = [
    {
        quote: "Our new website is not only beautiful but also incredibly fast. We've seen a 40% increase in conversions, which is beyond what we hoped for. The team was professional and delivered on time.",
        name: "Rajesh Kumar",
        rating: 5,
        avatar: "/rajesh-kumar.png"
    },
    {
        quote: "The Meta ad campaign they ran for our boutique was a game-changer. Sales have tripled, and we're finally seeing a positive ROI on our ad spend. Highly effective and data-driven.",
        name: "Priya Sharma",
        rating: 5,
        avatar: "/priya-sharma.png"
    },
    {
        quote: "As a startup, budget was tight. Stova Media built a fantastic website and a targeted ad campaign that started bringing in qualified leads almost immediately. Great value and great results.",
        name: "Anjali Mehta",
        rating: 5,
        avatar: "/anjali-mehta.png"
    },
    {
        quote: "The communication was excellent throughout the web development process. They listened to our feedback and created a site that perfectly represents our brand. We're very pleased.",
        name: "Sneha Patel",
        rating: 4,
        avatar: "/sneha-patel.png"
    },
    {
        quote: "Our ad spend is finally profitable. Their team dug deep into our analytics and found opportunities we had missed. It took a couple of weeks to see results, but it was worth the wait.",
        name: "Vikram Singh",
        rating: 4,
        avatar: "/vikram-singh.png"
    },
    {
        quote: "Stova Media was a pleasure to work with. They took our vague ideas for an ad campaign and turned them into a high-performing lead generation machine. Solid execution.",
        name: "Amit Tiwari",
        rating: 5,
        avatar: "/amit-tiwari.png"
    }
];


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

export default function Home() {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);

  const startAutoplay = useCallback((api: EmblaCarouselType) => {
    const autoPlay = api.plugins().autoplay;
    if (!autoPlay) return;
    autoPlay.play();
  }, []);

  const stopAutoplay = useCallback((api: EmblaCarouselType) => {
    const autoPlay = api.plugins().autoplay;
    if (!autoPlay) return;
    autoPlay.stop();
  }, []);

  useEffect(() => {
    if (emblaApi) {
        startAutoplay(emblaApi);
        emblaApi.on("pointerDown", () => stopAutoplay(emblaApi));
        emblaApi.on("select", () => startAutoplay(emblaApi));
    }
  }, [emblaApi, startAutoplay, stopAutoplay]);
    
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] dark:bg-grid-slate-900"></div>
          <div className="container px-6 md:px-8 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                  Advanced Websites & AI Agents, Supported by Expert Meta Ads
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                   We build future-ready digital platforms for Indian businesses, driving growth with intelligent automation and targeted advertising.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
                  <Button asChild size="lg">
                    <Link href="/contact">Book Strategy Call</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
               <div className="relative w-full h-[500px] lg:h-[500px] -mt-12 lg:mt-0">
                 <RadialOrbitalTimeline timelineData={timelineData} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mini-About Section */}
        <motion.section
          className="py-16 md:py-24 bg-background"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Your Partner for Real Growth in India's Market</h2>
              <p className="text-lg text-muted-foreground">We’re a results-obsessed digital agency helping businesses across India grow with high-performance Meta ads, powerful Next.js websites, and intelligent AI automation.</p>
            </div>
          </div>
        </motion.section>

        {/* Service Preview Section */}
        <motion.section
          className="py-16 md:py-24 bg-background"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, delay: 0.1 }}
        >
          <div className="container px-6 md:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <Link href="/services#websites">
                <Card className="transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl rounded-lg h-full">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="p-4 bg-accent/10 rounded-full mb-4"><CodeXml className="h-10 w-10 text-accent" /></div>
                    <CardTitle className="font-headline text-2xl">Website Development</CardTitle>
                    <CardDescription>Fast, SEO-friendly, and conversion-optimized websites built with Next.js.</CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services#ai-agents">
                <Card className="transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl rounded-lg h-full">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="p-4 bg-accent/10 rounded-full mb-4"><Bot className="h-10 w-10 text-accent" /></div>
                    <CardTitle className="font-headline text-2xl">AI Agents</CardTitle>
                    <CardDescription>Custom AI chatbots to automate lead qualification and customer support 24/7.</CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services#meta-ads">
                <Card className="transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl rounded-lg h-full">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="p-4 bg-accent/10 rounded-full mb-4"><Target className="h-10 w-10 text-accent" /></div>
                    <CardTitle className="font-headline text-2xl">Meta Ads</CardTitle>
                    <CardDescription>ROI-focused campaigns on Facebook & Instagram to generate leads and sales.</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="py-16 md:py-24 bg-background"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, delay: 0.2 }}
        >
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Trusted by Businesses Like Yours</h2>
            </div>
            <Carousel 
                setApi={setEmblaApi} 
                className="w-full max-w-4xl mx-auto"
                opts={{
                  loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 4000,
                        stopOnInteraction: true,
                    }),
                ]}
                onMouseEnter={() => emblaApi && stopAutoplay(emblaApi)}
                onMouseLeave={() => emblaApi && startAutoplay(emblaApi)}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="rounded-lg">
                      <CardContent className="pt-6 flex flex-col items-center text-center">
                         <Avatar className="w-20 h-20 mb-4 border-4 border-background shadow-lg">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex mb-4">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                            ))}
                            {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                                <Star key={`empty-${i}`} className="h-5 w-5 text-muted-foreground/30 fill-muted-foreground/30" />
                            ))}
                        </div>
                        <p className="text-lg italic mb-6 max-w-2xl">"{testimonial.quote}"</p>
                        <p className="font-bold">{testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <CTASection
          title="Ready to Grow Your Business?"
          action={{
            text: "Get Your Free Growth Plan",
            href: "/contact",
            variant: "default",
          }}
          className="bg-secondary"
        />
      </main>
    </div>
  );
}
