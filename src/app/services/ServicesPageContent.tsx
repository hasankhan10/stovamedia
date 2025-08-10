
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import Image from "next/image";
import { Zap, MessageSquare, Check } from "lucide-react";
import { motion } from 'framer-motion';

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

export default function ServicesPageContent() {
  return (
    <div className="flex flex-col">
      {/* Intro Section */}
      <motion.section 
        className="py-20 md:py-28 bg-background"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container px-6 md:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
            Our Digital Marketing Services
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            We offer three core services designed to deliver real, measurable business growth.
          </p>
        </div>
      </motion.section>

      {/* Service #1: Website Development */}
      <motion.section 
        id="websites" 
        className="py-16 md:py-24 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
           <div className="text-center p-8 bg-card rounded-xl shadow-lg order-last md:order-first">
            <p className="text-lg italic text-muted-foreground mb-4">"A local garage booked 23 new appointments from their new website in just 1 month"</p>
             <Image 
              src="https://placehold.co/400x300.png"
              alt="A clean, modern website on a laptop screen"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
              data-ai-hint="modern website"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-semibold">Website Development</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">High-Performance modern and elegant Websites</h2>
            <p className="text-lg text-muted-foreground">We build custom Next.js websites that are lightning-fast, fully responsive, and optimized to convert visitors into customers and rank on Google. Our designs are not only visually stunning but also built with a mobile-first approach, ensuring a seamless experience on any device.</p>
            <Card>
              <CardHeader><CardTitle>Features</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Modern UI/UX & Conversion-Focused Design</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Mobile-First & Responsive on All Devices</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> SEO Ready & Optimized for Search Engines</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Custom Forms & Integrations</p>
              </CardContent>
            </Card>
            <Button asChild size="lg"><Link href="/pricing?service=website-development">View Website Packages</Link></Button>
          </div>
        </div>
      </motion.section>

      {/* Service #2: Custom AI Agents */}
      <motion.section 
        id="ai-agents" 
        className="py-16 md:py-24 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-semibold">AI Agents</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Intelligent AI Agent</h2>
            <p className="text-lg text-muted-foreground">Automate routine tasks, qualify leads, and provide 24/7 customer support with custom-trained AI chatbots for your business. Our agents are designed to integrate seamlessly into your workflow and handle everything from answering FAQs to scheduling appointments.</p>
            <Card>
              <CardHeader><CardTitle>Use Cases</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> 24/7 Lead Qualification Bots</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Instant FAQ & Knowledge Base Bots</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> First-Line Customer Support Assistants</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Appointment Booking & Scheduling Agents</p>
              </CardContent>
            </Card>
            <Button asChild size="lg"><Link href="/pricing?service=ai-services">View AI Services</Link></Button>
          </div>
           <div className="text-center p-8 bg-card rounded-xl shadow-lg">
            <p className="text-lg italic text-muted-foreground mb-4">"Saved 7 hours/week in manual responses for a service provider"</p>
             <Image 
              src="https://placehold.co/400x300.png"
              alt="An AI chatbot conversation on a smartphone"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
              data-ai-hint="ai chatbot"
            />
          </div>
        </div>
      </motion.section>
      
      {/* Service #3: Meta Advertising */}
      <motion.section 
        id="meta-ads" 
        className="py-16 md:py-24 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 order-last md:order-first">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-semibold">Meta Advertising</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Meta Ads</h2>
            <p className="text-lg text-muted-foreground">As a Meta Ads agency, we design and manage profitable ad campaigns on Facebook & Instagram to get you in front of the right customers at the right time. We handle everything from strategy and creative to targeting and analytics to maximize your return on investment.</p>
            <Card>
              <CardHeader><CardTitle>What You Get</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Comprehensive Ad Strategy & Funnel Design</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> High-Converting Ad Creatives & Copywriting</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Pixel-Perfect Tracking & Analytics</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Continuous Optimization & Reporting</p>
              </CardContent>
            </Card>
            <Button asChild size="lg"><Link href="/pricing?service=meta-ads">View Advertising Plans</Link></Button>
          </div>
          <div className="text-center p-8 bg-card rounded-xl shadow-lg">
            <p className="text-lg italic text-muted-foreground mb-4">"Helped a B2B supplier generate 120+ new leads in only 30 days."</p>
            <Image 
              src="https://placehold.co/400x300.png"
              alt="A dashboard showing a graph with positive upward trend"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
              data-ai-hint="social media graph"
            />
          </div>
        </div>
      </motion.section>

      {/* Global CTA */}
      <motion.section 
        className="py-24 md:py-32 bg-secondary"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Not Sure What You Need?</h2>
          <p className="mt-4 mb-8 text-lg text-muted-foreground max-w-xl mx-auto">Let our AI analyze your business and provide a personalized growth plan. It's free and takes just a few minutes.</p>
          <Button asChild size="lg">
            <Link href="/consultation">Get Your Free AI Growth Consultation</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
