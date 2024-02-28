import { z } from "zod";
export const loginFormSchema = z.object({
  username: z.string().regex(/^[A-Za-z0-9]{3,12}$/),
  password: z
    .string()
    .regex(/^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,18}$/),
});

export const registerFormSchema = z.object({
  firstname: z.string().regex(/^.{1,25}$/),
  lastname: z.string().regex(/^.{1,25}$/),
  username: z.string().regex(/^[A-Za-z0-9]{3,12}$/),
  email: z.string().regex(/^(?=.*[@])(?=.*[.])[a-zA-Z0-9!@#$%^&*.]{8,40}$/),
  // year: z.string().transform(val => Number(val) - 18).positive()
  gender: z.string().min(3),
  password: z
    .string()
    .regex(/^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,18}$/),
  confirmPass: z.string().min(1),
});

export const editUserSchema = z.object({
  firstname: z.string().regex(/^.{1,25}$/),
  lastname: z.string().regex(/^.{1,25}$/),
  username: z.string().regex(/^[A-Za-z0-9]{3,12}$/),
  email: z.string().regex(/^(?=.*[@])(?=.*[.])[a-zA-Z0-9!@#$%^&*.]{8,40}$/),
  job: z.string().regex(/^.{1,25}$/),
  link: z.string().regex(/^.{1,40}$/),
  bio: z.string().regex(/^.{1,225}$/),
});
