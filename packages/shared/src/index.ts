import { z } from 'zod';

export const ecommerceSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
});

export type ecommerceDto = z.infer<typeof ecommerceSchema>;

export const PI = 3.14; // Just to prove it works