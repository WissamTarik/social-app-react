import { useForm, SubmitHandler } from "react-hook-form"
import { signUpSchema, SignUpType } from '@validation/SignUpValidation';
import {zodResolver} from "@hookform/resolvers/zod"

import { useAppDispatch, useAppSelector } from '@redux/index';
import { actRegister } from '@redux/Auth/act/actRegister';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function useRegister() {
    const dispatch=useAppDispatch()
  const {loading}=useAppSelector((store)=>store.authReducer)
  const navigate=useNavigate()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    

  } = useForm<SignUpType>({
    mode:'onBlur',
    resolver:zodResolver(signUpSchema),
  

  })
  const onSubmit: SubmitHandler<SignUpType> = (data) =>{
    const rowDate=new Date(data.dateOfBirth)
    
    const formattedDate=`${rowDate.getMonth()+1}-${rowDate.getDate()}-${rowDate.getFullYear()}`
    const newData={
      ...data,
      dateOfBirth:formattedDate
    }
    dispatch(actRegister(newData)).unwrap().then(()=>{
      toast.success("You registered successfully", {
        theme: "colored",
        position: 'top-center',
      })
      navigate('/login')
    }).catch((error)=>{
      toast.error(error, {
        theme: "colored",
        position: 'top-center',
      })
    })
       
  }

  return {onSubmit,handleSubmit,register,loading,errors}
}
