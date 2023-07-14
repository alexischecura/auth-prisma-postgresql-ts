import { z } from 'zod';

enum UserRole {
  USER = 'USER',
  GUIDE = 'GUIDE',
  LEAD_GUIDE = 'LEAD_GUIDE',
  ADMIn = 'ADMIN',
}

export const createUserSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Please provide your name',
    }),
    email: z
      .string({
        required_error: 'Please provide your email',
      })
      .email('Invalid email address'),
  }),
});
