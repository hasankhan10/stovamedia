"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address.").optional(),
  phone: z.string().optional(),
  service: z.string({ required_error: "Please select a service." }),
  plan: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must be less than 500 characters.")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get("service");
  const planQuery = searchParams.get("plan");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: serviceQuery || undefined,
      plan: planQuery || "",
      message: ""
    }
  });

  useEffect(() => {
    // This effect ensures the form values are updated if the URL parameters change
    // after the component has already been rendered.
    if (serviceQuery) {
      form.setValue("service", serviceQuery, { shouldValidate: true });
    } else {
      form.setValue("service", undefined);
    }
    if (planQuery) {
      form.setValue("plan", planQuery);
    } else {
        form.setValue("plan", "");
    }
  }, [serviceQuery, planQuery, form]);

  async function onSubmit(data: ContactFormValues) {
    // Note: It's best practice to use environment variables on the server-side
    // to avoid exposing keys to the client. For this form submission service (web3forms),
    // a public key is expected, but for other services, this should be handled in a server action.
    const formData = {
      ...data,
      access_key: process.env.NEXT_PUBLIC_WEB3API 
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description:
            "Thanks for reaching out. We'll get back to you within 12 hours."
        });
        form.reset();
        // Reset the form fields to their initial state, including query params
        form.reset({
          name: "",
          email: "",
          phone: "",
          service: serviceQuery || undefined,
          plan: planQuery || "",
          message: ""
        });
      } else {
        toast({
          title: "Something went wrong",
          description: result.message || "Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive"
      });
    }
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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Interested In</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Meta Advertising">
                          Meta Advertising
                        </SelectItem>
                        <SelectItem value="Website Development">
                          Website Development
                        </SelectItem>
                        <SelectItem value="AI Agents">AI Agents</SelectItem>
                        <SelectItem value="Not Sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="E.g., Basic, Medium" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little about your project..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
