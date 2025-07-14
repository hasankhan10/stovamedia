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
  prompt: `You are a digital marketing expert at Stova Media. A business has come to you seeking personalized growth strategies. Based on the information they provide, give them actionable strategies and recommendations on how Stova Media can help them achieve their goals.

Here is information about their business:

Business Type: {{{businessType}}}
Business Goals: {{{businessGoals}}}
Current Marketing Efforts: {{{currentMarketingEfforts}}}
Annual Revenue: {{{annualRevenue}}}

Provide personalized growth strategies and explain how Stova Media can help.
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
