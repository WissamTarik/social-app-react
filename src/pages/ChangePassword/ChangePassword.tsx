import AuthForm from "@components/AuthForm/AuthForm"
import FormInput from "@components/FormInput/FormInput"
import useChangePassword from "./useChangePassword"
import SubmitBtn from "@components/SubmitBtn/SubmitBtn"


const ChangePassword = () => {
  const {loading,onSubmit,handleSubmit,register,errors}=useChangePassword()
   
  return (
    <AuthForm title="Change Password:" onSubmit={handleSubmit(onSubmit)}>
      
     <FormInput register={register} name='password' autoComplete="Current Password" label="Current Password" type='password' error={errors.password?.message} />
     <FormInput register={register} name='newPassword'   autoComplete="New Password" label="New Password" type='password' error={errors.newPassword?.message} />

    
     
 <SubmitBtn loading={loading} text={'Change'}/>
    </AuthForm>
  )
}

export default ChangePassword