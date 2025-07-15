// src/ai/flows/personalized-growth-consultation.ts
'use server';

/**
 * @fileOverview Provides personalized growth strategies based on user-inputted business details.
 *
 * - personalizedGrowthConsultation - A function that takes business details and returns personalized growth strategies.
 * - PersonalizedGrowthConsultationInput - The input type for the personalizedGrowthConsultation function.
 * - PersonalizedGrowthConsultationOutput - The return type for the personalizedGrowthConsultation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGrowthConsultationInputSchema = z.object({
  businessType: z
    .string()
    .describe('The type of business, e.g., e-commerce, SaaS, local business.'),
  businessGoals: z
    .string()
    .describe('The primary goals of the business, e.g., increase sales, generate leads, improve brand awareness.'),
  currentMarketingEfforts: z
    .string()
    .describe('A description of the current marketing efforts of the business.'),
  annualRevenue: z
    .string()
    .describe('The annual revenue of the business as a string'),
});
export type PersonalizedGrowthConsultationInput = z.infer<
  typeof PersonalizedGrowthConsultationInputSchema
>;

const PersonalizedGrowthConsultationOutputSchema = z.object({
  personalizedStrategies: z
    .string()
    .describe('Personalized growth strategies for the business.'),
});
export type PersonalizedGrowthConsultationOutput = z.infer<
  typeof PersonalizedGrowthConsultationOutputSchema
>;

export async function personalizedGrowthConsultation(
  input: PersonalizedGrowthConsultationInput
): Promise<PersonalizedGrowthConsultationOutput> {
  return personalizedGrowthConsultationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedGrowthConsultationPrompt',
  input: {schema: PersonalizedGrowthConsultationInputSchema},
  output: {schema: PersonalizedGrowthConsultationOutputSchema},
  prompt: `You are a Senior Growth Strategist at Stova Media, a top-tier digital marketing agency. Your expertise is in creating innovative, data-driven growth plans. A potential client has provided their business details. Your task is to provide a compelling, high-value, and actionable growth consultation. Be creative, specific, and professional.

  **Client Business Profile:**
  - **Business Type:** {{{businessType}}}
  - **Primary Goals:** {{{businessGoals}}}
  - **Current Marketing Efforts:** {{{currentMarketingEfforts}}}
  - **Estimated Annual Revenue:** {{{annualRevenue}}}

  **Your Task:**
  Generate a personalized growth strategy. Structure your response with the following sections, using markdown for formatting (like **bolding** headers):

  **1. Initial Analysis & Opportunities:**
  Start with a brief, encouraging analysis of their current situation. Identify 1-2 key untapped opportunities based on their profile.

  **2. Quick Wins (Next 30-60 Days):**
  Provide 2-3 specific, high-impact, and low-cost strategies they can implement immediately. These should be creative and directly tied to their goals. For example, instead of "Use social media," suggest "Launch a targeted Instagram Story ad campaign showcasing customer testimonials for your top product, driving traffic to a dedicated landing page."

  **3. Long-Term Growth Blueprint (3-12 Months):**
  Outline 2-3 more substantial, strategic initiatives. Think bigger here. This could involve things like SEO content funnels, developing a lead nurturing email sequence, or building a specific type of AI agent. Explain WHY these are important for their long-term success.

  **4. How Stova Media Can Accelerate Your Growth:**
  This is your sales pitch. Clearly and concisely explain how Stova Media's specific services (Meta Ads, Website Development, AI Agents) are the perfect solution to execute this plan. Connect your services directly to the strategies you've just recommended. Be persuasive and demonstrate clear value.

  Maintain a confident, expert, and helpful tone throughout. The goal is to impress the client with your insight and make them eager to work with Stova Media.
`,
});

const personalizedGrowthConsultationFlow = ai.defineFlow(
  {
    name: 'personalizedGrowthConsultationFlow',
    inputSchema: PersonalizedGrowthConsultationInputSchema,
    outputSchema: PersonalizedGrowthConsultationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
