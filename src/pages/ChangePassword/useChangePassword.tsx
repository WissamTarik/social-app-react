import { actChangePassword } from "@redux/Auth/act/actChangePassword"
import { useAppDispatch, useAppSelector } from "@redux/index"
import { changePasswordSchema, ChangePasswordType } from "@validation/ChangePasswordValidation"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { zodResolver } from "@hookform/resolvers/zod"
export default function useChangePassword() {
     const dispatch=useAppDispatch()
    const {loading}=useAppSelector((store)=>store.authReducer)
    const navigate=useNavigate()
    const {register,formState:{errors},handleSubmit}=useForm<ChangePasswordType>({
        mode:"onBlur",
        resolver:zodResolver(changePasswordSchema)
    })
    const onSubmit:SubmitHandler<ChangePasswordType>=(data)=>{
        dispatch(actChangePassword(data)).unwrap().then(()=>{
          toast.success('Password changed successfully',{
            theme:'colored',
            position:'top-center'
           })
          navigate('/')
        }).catch(()=>{
           toast.error('Failed to change the password',{
            theme:'colored',
            position:'top-center'
           })
        })

    }
  return {loading,onSubmit,handleSubmit,register,errors}
}
