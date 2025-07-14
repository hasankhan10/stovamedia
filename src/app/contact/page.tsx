"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Suspense, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string({ required_error: "Please select a service." }),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be less than 500 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function ContactForm() {
    const { toast } = useToast();
    const searchParams = useSearchParams();
    const serviceQuery = searchParams.get('service');

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            service: serviceQuery || undefined,
            message: "",
        },
    });

    useEffect(() => {
        if (serviceQuery) {
            form.setValue('service', serviceQuery);
        }
    }, [serviceQuery, form]);

    async function onSubmit(data: ContactFormValues) {
        console.log(data);
        // Here you would typically send the data to your backend or a service like Formspree
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll get back to you within 12 hours.",
        });
        form.reset();
    }

    const { isSubmitting } = form.formState;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>We usually respond within 12 hours.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                        <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem><FormLabel>Phone (Optional)</FormLabel><FormControl><Input placeholder="(123) 456-7890" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                        <FormField control={form.control} name="service" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Service Interested In</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl><SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                                    <SelectContent>
                                        <SelectItem value="Meta Advertising">Meta Advertising</SelectItem>
                                        <SelectItem value="Website Development">Website Development</SelectItem>
                                        <SelectItem value="AI Agents">AI Agents</SelectItem>
                                        <SelectItem value="Not Sure">Not Sure</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name="message" render={({ field }) => (
                            <FormItem><FormLabel>Short Message</FormLabel><FormControl><Textarea placeholder="Tell us a little about your project..." className="resize-none" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                            Send Message
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}


export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-6 md:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
            Tell Us About Your Business.
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            Let's unlock your growth potential. The first step is a conversation.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                   <Suspense fallback={<div>Loading...</div>}>
                        <ContactForm />
                    </Suspense>
                </div>
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold font-headline text-primary">Quick Contact Options</h2>
                    <p className="text-muted-foreground">Prefer a different method? No problem. Reach out to us directly through any of these channels.</p>
                    
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="block">
                        <Card className="hover:bg-muted transition-colors">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <MessageCircle className="h-8 w-8 text-accent" />
                                <div>
                                    <CardTitle>WhatsApp</CardTitle>
                                    <CardDescription>Chat with us directly for a quick response.</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    </a>

                    <a href="mailto:hello@stovamedia.com" className="block">
                        <Card className="hover:bg-muted transition-colors">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Mail className="h-8 w-8 text-accent" />
                                <div>
                                    <CardTitle>Email</CardTitle>
                                    <CardDescription>hello@stovamedia.com</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    </a>

                    <a href="tel:+1234567890" className="block">
                        <Card className="hover:bg-muted transition-colors">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Phone className="h-8 w-8 text-accent" />
                                <div>
                                    <CardTitle>Phone</CardTitle>
                                    <CardDescription>+1 (234) 567-890</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    </a>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
