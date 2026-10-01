import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please provide a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(100, "Name must not exceed 100 characters"),

    email: z.string().email("Please provide a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(100, "Password must not exceed 100 characters"),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });