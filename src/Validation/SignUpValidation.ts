import { z } from "zod";
import { emailSchema, passwordSchema } from "./CommonValidation";

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "User name is required" }),
  email: emailSchema,
  password: passwordSchema,
  rePassword: z.string().min(1, { message: "Confirm password is required" }),
  gender: z.enum(['male', 'female'], {
  errorMap: () => ({ message: "Gender must be 'female' or 'male'" }),
}),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
}).refine((input) => input.rePassword === input.password, {
  message: "Passwords and confirm password do not match",
  path: ["rePassword"], 
});

export type SignUpType = z.infer<typeof signUpSchema>;
