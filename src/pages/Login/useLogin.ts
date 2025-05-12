import { signInSchema, SignInType } from '@validation/SignInValidation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@redux/index';
import { actLogin } from '../../Libraries/Redux/Auth/act/actLogin';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

export default function useLogin() {
      const dispatch=useAppDispatch()
      const {loading}=useAppSelector((store)=>store.authReducer)
      const navigate=useNavigate()
    
      const {register,handleSubmit,formState:{errors}}=useForm<SignInType>({
        mode:'onBlur',
        resolver:zodResolver(signInSchema)
      })
    const onSubmit:SubmitHandler<SignInType>=(data)=>{
       dispatch(actLogin(data)).unwrap().then(()=>{
        toast.success("Welcome to our social app", {
                theme: "colored",
                position: 'top-center',
              })
              navigate('/')
       }).catch(()=>{
        toast.error('Failed to login', {
                theme: "colored",
                position: 'top-center',
              })
       })
      
    }
  return {onSubmit,loading,register,handleSubmit,errors}
}
