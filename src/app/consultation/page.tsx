"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { personalizedGrowthConsultation, type PersonalizedGrowthConsultationOutput } from "@/ai/flows/personalized-growth-consultation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  businessType: z.string().min(3, "Please describe your business type (e.g., e-commerce, local cafe)."),
  businessGoals: z.string().min(10, "Please describe your primary business goals (e.g., increase sales, get more leads)."),
  currentMarketingEfforts: z.string().min(10, "Briefly describe your current marketing (e.g., social media posts, word of mouth)."),
  annualRevenue: z.string().min(2, "Please provide an estimated annual revenue (e.g., $50k, $250k+, Pre-revenue)."),
});

type FormValues = z.infer<typeof formSchema>;

export default function AIBusinessConsultantPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedGrowthConsultationOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessType: "",
      businessGoals: "",
      currentMarketingEfforts: "",
      annualRevenue: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setResult(null);
    try {
      const response = await personalizedGrowthConsultation(values);
      setResult(response);
    } catch (error) {
      console.error("Error getting consultation:", error);
      toast({
        title: "Error",
        description: "There was an issue getting your consultation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6 text-center">
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
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Tell Us About Your Business</CardTitle>
                <CardDescription>The more details you provide, the better the recommendations.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Type</FormLabel>
                          <FormControl>
                            <Input placeholder="E.g., Local Coffee Shop, SaaS Startup" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessGoals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Business Goals</FormLabel>
                          <FormControl>
                            <Textarea placeholder="E.g., Increase online sales by 20%, generate 50 new leads per month" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="currentMarketingEfforts"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Marketing Efforts</FormLabel>
                          <FormControl>
                            <Textarea placeholder="E.g., We post on Instagram occasionally, rely on word-of-mouth." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="annualRevenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated Annual Revenue</FormLabel>
                          <FormControl>
                            <Input placeholder="E.g., $100,000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={loading} className="w-full">
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating Your Plan...
                        </>
                      ) : (
                        "Get My Free Consultation"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="sticky top-24">
              <Card className="min-h-[400px]">
                <CardHeader>
                  <CardTitle className="flex items-center"><Lightbulb className="mr-2 text-accent"/> Your Personalized Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  {loading && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                      <p className="text-muted-foreground">Analyzing your business...</p>
                    </div>
                  )}
                  {result && (
                     <div className="prose prose-sm max-w-none text-foreground">
                        <p style={{whiteSpace: 'pre-wrap'}}>{result.personalizedStrategies}</p>
                    </div>
                  )}
                  {!loading && !result && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <p className="text-muted-foreground">Your growth plan will appear here.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
