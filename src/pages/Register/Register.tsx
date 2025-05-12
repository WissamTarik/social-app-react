import { Box ,InputLabel} from '@mui/material'
import useRegister from './useRegister'
import FormInput from '@components/FormInput/FormInput'
import AuthForm from '@components/AuthForm/AuthForm'
import SubmitBtn from '@components/SubmitBtn/SubmitBtn'


const Register = () => {
    const {handleSubmit,onSubmit,register,loading,errors}=useRegister()
  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} title='Register:'>
      <FormInput type='text' error={errors.name?.message as string}   autoFocus={true} label='user Name' name='name' register={register}/>
     <FormInput type='email' error={errors.email?.message as string} label='Email Address' name='email' register={register}/>
     <FormInput type='password' error={errors.password?.message as string} label='password' name='password' register={register}/>
     <FormInput type='password' error={errors.rePassword?.message as string} label='Confirm Password' name='rePassword' register={register}/>
    
     
      <InputLabel sx={{marginBottom:"0px"}} style={{marginBottom:0}} >DOB</InputLabel>
      <FormInput type='date' error={errors.dateOfBirth?.message as string} label='DOB' name='dateOfBirth' register={register}/>

     <Box>
     <FormInput type='select' error={errors.gender?.message as string} label='Gender' name='gender' register={register}/>
   
     </Box>
    <SubmitBtn text='SignUp' loading={loading}/>
    </AuthForm>
  )
}

export default Register