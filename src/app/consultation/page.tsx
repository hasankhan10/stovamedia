import { Sparkles } from "lucide-react";
import type { Metadata } from 'next';
import ConsultationForm from "./ConsultationForm";

export const metadata: Metadata = {
    title: 'Free AI Business Growth Consultation | Stova Media',
    description: 'Get a free, personalized growth plan for your business. Our AI-powered tool analyzes your goals and provides actionable strategies to help you succeed.',
};

export default function AIBusinessConsultantPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-6 md:px-8 text-center">
          <Sparkles className="h-12 w-12 mx-auto text-accent mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
            Get Your Free AI Growth Plan
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            Answer a few questions and our AI will generate a personalized set of growth strategies for your business.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 md:px-8">
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
