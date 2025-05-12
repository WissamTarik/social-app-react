import {z} from "zod"

export const passwordSchema=z.string().min(1,'Password is required').regex(  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      { message: "Password must contain at least 1 special character and one upper case character" })
export const emailSchema=z.string().min(1,'Email is required').email({message:"Invalid email"})