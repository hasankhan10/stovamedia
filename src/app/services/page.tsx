import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import Image from "next/image";
import { Zap, MessageSquare, Check } from "lucide-react";
import type { Metadata } from 'next';
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
    title: 'Our Services: Meta Ads, Web Development, AI Agents | Stova Media',
    description: 'Explore the services offered by Stova Media. We specialize in ROI-driven Meta Ads, high-performance website development, and intelligent AI automation to grow your business.',
};


export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-6 md:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
            Three Services. One Mission: Your Growth.
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            Every business is unique. We offer tailored solutions that deliver real, measurable results.
          </p>
        </div>
      </section>

      {/* Service #1: Meta Advertising */}
      <AnimatedSection as="section" id="meta-ads" className="py-16 md:py-24 bg-background">
        <div className="container px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-semibold">Meta Advertising</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">ROI-Driven Meta Ads</h2>
            <p className="text-lg text-muted-foreground">We design and manage ROI-driven ad campaigns on Facebook & Instagram to get you in front of the right customers at the right time.</p>
            <Card>
              <CardHeader><CardTitle>What You Get</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Comprehensive Ad Strategy & Funnel Design</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> High-Converting Ad Creatives & Copywriting</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Pixel-Perfect Tracking & Analytics</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Continuous Optimization & Reporting</p>
              </CardContent>
            </Card>
            <Button asChild size="lg"><Link href="/pricing?service=meta-ads">View Pricing & Plans</Link></Button>
          </div>
          <div className="text-center p-8 bg-card rounded-xl shadow-lg">
            <p className="text-lg italic text-muted-foreground mb-4">"Helped a B2B supplier generate 120+ new leads in only 30 days."</p>
            <Image 
              src="/meta.jpg"
              alt="Graph showing business growth from Meta Ads"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Service #2: Website Development */}
      <AnimatedSection as="section" id="websites" className="py-16 md:py-24 bg-white">
        <div className="container px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
           <div className="text-center p-8 bg-card rounded-xl shadow-lg order-last md:order-first">
            <p className="text-lg italic text-muted-foreground mb-4">"A local garage booked 23 new appointments from their new website in just 1 month"</p>
             <Image 
              src="/website.jpg"
              alt="Screenshot of a modern website developed by Stova Media"
              width={400}
              height={300}
              className="rounded-lg mx-auto mt-8"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-semibold">Website Development</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">High-Performance Websites</h2>
            <p className="text-lg text-muted-foreground">We build custom websites that are lightning-fast, fully responsive, and optimized to convert visitors into customers.</p>
            <Card>
              <CardHeader><CardTitle>Features</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Modern UI/UX & Conversion-Focused Design</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Mobile-First & Responsive on All Devices</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> SEO Ready & Optimized for Search Engines</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Custom Forms & Integrations</p>
              </CardContent>
            </Card>
            <Button asChild size="lg"><Link href="/pricing?service=website-development">View Pricing & Packages</Link></Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Service #3: Custom AI Agents */}
      <AnimatedSection as="section" id="ai-agents" className="py-16 md:py-24 bg-background">
        <div className="container px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-semibold">AI Agents</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Intelligent AI Automation</h2>
            <p className="text-lg text-muted-foreground">Automate routine tasks, qualify leads, and provide 24/7 customer support with custom-trained AI agents for your business.</p>
            <Card>
              <CardHeader><CardTitle>Use Cases</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> 24/7 Lead Qualification Bots</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Instant FAQ & Knowledge Base Bots</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> First-Line Customer Support Assistants</p>
                <p className="flex items-center"><Check className="h-5 w-5 mr-2 text-accent" /> Appointment Booking & Scheduling Agents</p>
              </CardContent>
            </Card>
            <Button asChild size="lg"><Link href="/contact?service=AI+Agents">Contact Us for a Custom Quote</Link></Button>
          </div>
           <div className="text-center p-8 bg-card rounded-xl shadow-lg">
            <p className="text-lg italic text-muted-foreground mb-4">"Saved 7 hours/week in manual responses for a service provider"</p>
             <Image 
              src="/ai.jpg"
              alt="AI Chatbot conversation example"
              width={400}
              height={300}
              className="rounded-lg mx-auto mt-8"
            />
          </div>
        </div>
      </AnimatedSection>
      
      {/* Global CTA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Not Sure What You Need?</h2>
          <p className="mt-4 mb-8 text-lg text-primary-foreground/80 max-w-xl mx-auto">Let our AI analyze your business and provide a personalized growth plan. It's free and takes just a few minutes.</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/consultation">Get Free Growth Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
