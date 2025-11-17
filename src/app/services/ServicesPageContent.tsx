
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import Image from "next/image";
import { Check } from "lucide-react";
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
        <div className="container px-6 md:px-8 text-center max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
            Our Digital Solutions
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            We offer two core services designed to deliver real, measurable business growth through superior technology and intelligent automation.
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
        <div className="container px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center max-w-screen-lg mx-auto">
           <div className="text-center p-8 bg-card rounded-xl shadow-lg order-last md:order-first">
            <p className="text-lg italic text-muted-foreground mb-4">"A local garage booked 23 new appointments from their new website in just 1 month"</p>
             <Image 
              src="/website.jpg"
              alt="A clean, modern website for Stova Media's web development service"
              data-ai-hint="modern website"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-semibold">Website Development</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">High-Performance modern and elegant Websites</h2>
            <p className="text-lg text-muted-foreground">Your website is the heart of your digital presence. We don't just build websites; we craft high-performance, elegant digital experiences using Next.js. Our sites are lightning-fast, fully responsive, and optimized to convert visitors into loyal customers, all while ranking effectively on Google. We focus on mobile-first design to ensure a flawless experience on any device.</p>
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
        <div className="container px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center max-w-screen-lg mx-auto">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-semibold">AI Agents</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Intelligent AI Agent</h2>
            <p className="text-lg text-muted-foreground">Unlock 24/7 efficiency with custom-trained AI agents. We design and deploy intelligent chatbots that automate routine tasks, qualify leads, and provide instant customer support. Our agents integrate seamlessly into your website and workflow, handling everything from answering frequently asked questions to scheduling appointments, freeing up your team to focus on high-value work.</p>
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
              src="/ai.jpg"
              alt="An AI chatbot from Stova Media automating customer service"
              data-ai-hint="ai chatbot"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
