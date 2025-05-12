import FormInput from '@components/FormInput/FormInput';
import useLogin from './useLogin';
import AuthForm from '@components/AuthForm/AuthForm';
import SubmitBtn from '@components/SubmitBtn/SubmitBtn';


const Login = () => {
        const {handleSubmit,onSubmit,register,loading,errors}=useLogin()
  return (
     <AuthForm title="Login:" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        register={register}
        name="email"
        label="Email Address"
        type="email"
        error={errors.email?.message}
        autoFocus
      />
      <FormInput
        register={register}
        name="password"
        label="Password"
        type="password"
        error={errors.password?.message}
      />

     <SubmitBtn text={'SignIn'} loading={loading}/>
    </AuthForm>
  )
}

export default Login