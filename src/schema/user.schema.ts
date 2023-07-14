import { z } from 'zod';

enum UserRole {
  USER = 'USER',
  GUIDE = 'GUIDE',
  LEAD_GUIDE = 'LEAD_GUIDE',
  ADMIn = 'ADMIN',
}

export const createUserSchema = z.object({
  body: z
    .object({
      name: z.string({
        required_error: 'Please provide a name',
      }),
      email: z
        .string({
          required_error: 'Please provide your email',
        })
        .email('Invalid email address'),
      photo: z.optional(z.string()),
      role: z.optional(z.nativeEnum(UserRole)),
      password: z
        .string({
          required_error: 'Please provide your password',
        })
        .min(8, 'Password must be more than 8 characters')
        .max(32, 'Password too long, please provide a shorter password'),
      passwordConfirm: z.string({
        required_error: 'Please confirm your password',
      }),
    })
    .refine((user) => user.password === user.passwordConfirm, {
      message: "Passwords don't match",
      path: ['passwordConfirm'],
    }),
});

export type CreateUser = z.infer<typeof createUserSchema>['body'];

export const loginUserSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Please provide your email',
      })
      .email('Invalid email address'),
    password: z
      .string({
        required_error: 'Please privide your password',
      })
      .min(8, 'Password should be more than 8 characters')
      .max(32, 'Password should be less than 32 characters'),
  }),
});

export type LoginUser = z.infer<typeof loginUserSchema>['body'];
