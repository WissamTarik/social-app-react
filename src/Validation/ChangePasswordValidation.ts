import {z} from "zod"
import { passwordSchema } from "./CommonValidation"

export const changePasswordSchema=z.object({
     password:passwordSchema,
     newPassword:passwordSchema,
})
export type ChangePasswordType=z.infer<typeof changePasswordSchema>