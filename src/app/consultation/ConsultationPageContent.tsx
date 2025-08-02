// src/app/consultation/ConsultationPageContent.tsx
"use client";

import { Sparkles } from "lucide-react";
import ConsultationForm from "./ConsultationForm";
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

export default function ConsultationPageContent() {
  return (
    <>
      <motion.section 
        className="py-20 md:py-28 bg-background"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container px-6 md:px-8 text-center">
          <Sparkles className="h-12 w-12 mx-auto text-accent mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
            Get Your Free AI-Powered Growth Plan
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            Answer a few questions about your business and our AI will generate a personalized set of growth strategies to help you scale.
          </p>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 md:py-24 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container px-6 md:px-8">
          <ConsultationForm />
        </div>
      </motion.section>
    </>
  );
}
