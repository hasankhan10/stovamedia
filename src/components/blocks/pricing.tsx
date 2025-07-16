"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you. All plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  const showToggle = plans.some(plan => plan.period.includes('month'));

  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      {showToggle && (
        <div className="flex justify-center mb-10 items-center">
            <span className="mr-2 font-semibold">
                Monthly
            </span>
            <Label>
                <Switch
                ref={switchRef as any}
                checked={!isMonthly}
                onCheckedChange={handleToggle}
                className="relative"
                />
            </Label>
            <span className="ml-2 font-semibold">
                Annual <span className="text-primary font-bold">(Save 20%)</span>
            </span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-center">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
                y: plan.isPopular ? -20 : 0,
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 50,
              delay: 0.2 * index
            }}
            className={cn(
              `rounded-2xl border p-6 text-center flex flex-col`,
              plan.isPopular ? "border-primary border-2 shadow-xl" : "border-border",
              plan.isPopular && "relative"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  Most Popular
                </div>
              </div>
            )}
            <div className="flex-1 flex flex-col pt-4">
              <h3 className="text-lg font-semibold text-primary">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  ₹{isMonthly || plan.period === 'one-time' ? plan.price : plan.yearlyPrice}
                </span>
                {plan.period !== "one-time" && (
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    / {plan.period.split('/')[1]}
                  </span>
                )}
              </div>

               <p className="mt-1 text-xs leading-5 text-muted-foreground">
                 {plan.period === 'one-time' ? 'one-time payment' : (isMonthly ? "billed monthly" : "billed annually")}
              </p>

              <p className="mt-4 text-sm text-muted-foreground h-12">{plan.description}</p>
              
              <ul className="mt-6 space-y-3 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-left">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link
                    href={plan.href}
                    className={cn(
                    buttonVariants({
                        variant: plan.isPopular ? "default" : "secondary",
                        size: "lg",
                    }),
                    "w-full"
                    )}
                >
                    {plan.buttonText}
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
