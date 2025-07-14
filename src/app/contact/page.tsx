import { Suspense } from "react";
import type { Metadata } from 'next';
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
    title: 'Contact Stova Media | Digital Growth Agency',
    description: 'Get in touch with Stova Media to discuss your project. Contact us for a free strategy call about Meta Ads, Website Development, or AI Agents.',
};

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
                    
                    <a href="https://wa.me/919432053261" target="_blank" rel="noopener noreferrer" className="block">
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

                    <a href="mailto:stovamedia@gmail.com" className="block">
                        <Card className="hover:bg-muted transition-colors">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Mail className="h-8 w-8 text-accent" />
                                <div>
                                    <CardTitle>Email</CardTitle>
                                    <CardDescription>stovamedia@gmail.com</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    </a>

                    <a href="tel:+919432053261" className="block">
                        <Card className="hover:bg-muted transition-colors">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Phone className="h-8 w-8 text-accent" />
                                <div>
                                    <CardTitle>Phone</CardTitle>
                                    <CardDescription>+91 94320 53261</CardDescription>
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
