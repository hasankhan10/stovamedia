
"use client";

import { useState, useEffect, useRef } from 'react';
import type { EmblaCarouselType } from 'embla-carousel-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Link from 'next/link';
import { Megaphone, CodeXml, Bot, Target, Star } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CTASection } from "@/components/blocks/cta-with-glow";
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const testimonials = [
    {
        quote: "Stova Media's Meta ad strategies are phenomenal. Our boutique's online sales have tripled in just two months. We're getting a fantastic return on our investment.",
        name: "Priya Sharma",
        rating: 5,
    },
    {
        quote: "The website they developed is not just beautiful, it's a lead-generating machine. The AI agent they integrated handles most initial queries, saving us hours.",
        name: "Rajesh Kumar",
        rating: 5,
    },
    {
        quote: "As a startup, we needed to make every rupee count. Stova Media's team delivered a high-performance website and an ad campaign that brought in quality leads from day one.",
        name: "Anjali Mehta",
        rating: 5,
    },
    {
        quote: "We were skeptical about AI, but the customer support bot they built for us has been a game-changer. Our response times have improved, and our customers are happier.",
        name: "Vikram Singh",
        rating: 5,
    },
    {
        quote: "The level of professionalism and the results delivered were beyond our expectations. Our new website looks incredible and functions flawlessly. Highly recommended!",
        name: "Sneha Patel",
        rating: 5,
    },
    {
        quote: "Working with Stova Media was a breeze. They understood our vision for the ad campaign and executed it perfectly, bringing a significant boost to our lead generation.",
        name: "Amit Tiwari",
        rating: 5,
    }
];

const FloatingIcon = ({ icon: Icon, className, delay }: { icon: React.ElementType, className?: string, delay: string }) => (
    <div
        className={cn("absolute rounded-full p-3 md:p-4 bg-card shadow-xl float border-2 border-accent/10", className)}
        style={{ animationDelay: delay }}
    >
        <Icon className="h-6 w-6 md:h-8 md:w-8 text-accent" />
    </div>
);

export default function Home() {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    if (!emblaApi) return;
    autoplayInterval.current = setInterval(() => {
        if (emblaApi.canScrollNext()) {
            emblaApi.scrollNext();
        } else {
            emblaApi.scrollTo(0);
        }
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current);
    }
  };

  useEffect(() => {
    if (emblaApi) {
        startAutoplay();
        emblaApi.on("pointerDown", stopAutoplay);
        emblaApi.on("select", startAutoplay);
    }
    return () => stopAutoplay();
  }, [emblaApi]);
    
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
          <div className="container px-6 md:px-8 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                  Meta Ads. Custom Websites. Smart AI Agents.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                  Growth-Driven Solutions Built for the Future.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
                  <Button asChild size="lg">
                    <Link href="/contact">Book Strategy Call</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative w-full max-w-md mx-auto h-64 lg:h-80">
                <FloatingIcon icon={Megaphone} className="top-0 left-1/4" delay="0s" />
                <FloatingIcon icon={CodeXml} className="top-1/3 right-4 md:right-0" delay="1s" />
                <FloatingIcon icon={Bot} className="bottom-0 left-1/2 -translate-x-1/2" delay="2s" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mini-About Section */}
        <AnimatedSection as="section" className="py-16 md:py-24 bg-background">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Built for Modern Brands That Want Real Growth.</h2>
              <p className="text-lg text-muted-foreground">We’re a results-obsessed digital agency helping businesses grow with performance ads, powerful websites, and smart AI.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Service Preview Section */}
        <AnimatedSection as="section" className="py-16 md:py-24 bg-white">
          <div className="container px-6 md:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="p-4 bg-accent/10 rounded-full mb-4"><Target className="h-10 w-10 text-accent" /></div>
                  <CardTitle className="font-headline text-2xl">Meta Ads</CardTitle>
                  <CardDescription>Lead-focused Meta campaigns with clear ROI.</CardDescription>
                </CardContent>
              </Card>
              <Card className="transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="p-4 bg-accent/10 rounded-full mb-4"><CodeXml className="h-10 w-10 text-accent" /></div>
                  <CardTitle className="font-headline text-2xl">Website Development</CardTitle>
                  <CardDescription>Fast, beautiful, conversion-ready websites.</CardDescription>
                </CardContent>
              </Card>
              <Card className="transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                   <div className="p-4 bg-accent/10 rounded-full mb-4"><Bot className="h-10 w-10 text-accent" /></div>
                  <CardTitle className="font-headline text-2xl">AI Agents</CardTitle>
                  <CardDescription>Automate sales & support with AI-powered bots.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection as="section" className="py-16 md:py-24 bg-background">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Trusted by Businesses Like Yours</h2>
            </div>
            <Carousel setApi={setEmblaApi} className="w-full max-w-4xl mx-auto"
                onMouseEnter={stopAutoplay}
                onMouseLeave={startAutoplay}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="pt-6 flex flex-col items-center text-center">
                        <div className="flex mb-4">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
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
        </AnimatedSection>

        {/* Final CTA Section */}
        <CTASection
          title="Let’s Make Growth Happen."
          action={{
            text: "Book Your Free Strategy Call",
            href: "/contact",
            variant: "default",
          }}
          className="bg-primary text-primary-foreground"
        />
      </main>
    </div>
  );
}
