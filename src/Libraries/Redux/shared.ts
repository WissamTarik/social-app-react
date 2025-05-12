import { isAxiosError } from "axios"

export function isString(error:unknown):error is string{
       return typeof error=='string'
}
export function isErrorHandler(error:unknown){
    if(isAxiosError(error)){
        return error.response?.data.message||error.message
    }
    else{
        return 'An unexpected error'
    }
     
}