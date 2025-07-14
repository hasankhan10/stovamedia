
"use client";

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';
import Image from 'next/image';
import { Megaphone, CodeXml, Bot, CheckCircle, Target, LineChart, MessageCircle } from 'lucide-react';
import type { SVGProps } from 'react';
import { cn } from "@/lib/utils";

const FloatingIcon = ({ icon: Icon, className, delay }: { icon: React.ElementType, className?: string, delay: string }) => (
    <div
        className={cn("absolute rounded-full p-3 md:p-4 bg-card shadow-xl float border-2 border-accent/10", className)}
        style={{ animationDelay: delay }}
    >
        <Icon className="h-6 w-6 md:h-8 md:w-8 text-accent" />
    </div>
);

export default function Home() {
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
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Built for Modern Brands That Want Real Growth.</h2>
              <p className="text-lg text-muted-foreground">We’re a results-obsessed digital agency helping businesses grow with performance ads, powerful websites, and smart AI.</p>
            </div>
          </div>
        </section>

        {/* Service Preview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-6 md:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-accent/10 rounded-full mb-4"><Target className="h-10 w-10 text-accent" /></div>
                  <CardTitle className="font-headline text-2xl">Meta Ads</CardTitle>
                  <CardDescription>Lead-focused Meta campaigns with clear ROI.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-accent/10 rounded-full mb-4"><CodeXml className="h-10 w-10 text-accent" /></div>
                  <CardTitle className="font-headline text-2xl">Website Development</CardTitle>
                  <CardDescription>Fast, beautiful, conversion-ready websites.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                <CardHeader className="flex flex-col items-center text-center">
                   <div className="p-4 bg-accent/10 rounded-full mb-4"><Bot className="h-10 w-10 text-accent" /></div>
                  <CardTitle className="font-headline text-2xl">AI Agents</CardTitle>
                  <CardDescription>Automate sales & support with AI-powered bots.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Trusted by Businesses Like Yours</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg italic mb-4">"Stova Media transformed our online presence. Their Meta ad strategies are second to none. We've seen a huge return on our investment."</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="https://placehold.co/100x100.png" alt="Jane Doe" data-ai-hint="person portrait" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">Jane Doe</p>
                      <p className="text-sm text-muted-foreground">Owner, The Local Boutique</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg italic mb-4">"The website they built for us is not only beautiful but it's a lead-generating machine. The AI agent is the cherry on top."</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="https://placehold.co/100x100.png" alt="John Smith" data-ai-hint="person smiling" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">John Smith</p>
                      <p className="text-sm text-muted-foreground">CEO, Smith Services Co.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Let’s Make Growth Happen.</h2>
            <p className="mt-4 mb-8 text-lg text-primary-foreground/80 max-w-xl mx-auto">Ready to see how we can help your business scale? Book a no-obligation strategy call today.</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Book Your Free Strategy Call</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
