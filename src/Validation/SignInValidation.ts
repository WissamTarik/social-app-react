import {z} from "zod"
import { emailSchema, passwordSchema } from "./CommonValidation"

export const signInSchema=z.object({
     email:emailSchema,
     password:passwordSchema
})
export type SignInType=z.infer<typeof signInSchema>