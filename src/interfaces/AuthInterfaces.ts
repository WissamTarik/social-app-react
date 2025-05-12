import { TLoading } from "src/sharedData/TLoading"

export interface IRegisterData  {
    name: string,
    email: string,
    password: string,
    rePassword: string,
    dateOfBirth: string,
    gender:string

  }
export interface ILoginData  {
    email: string,
    password: string,
  

  }
export interface ILoginOutput  {
    message: string,
    token: string,
  

  }
  export interface IUserData{
          _id:string,
           name:string,
           email:string,
           gender:string,
           dateOfBirth:string,
           photo:string,
           passwordChangedAt:string,
           createdAt:string


  }
  export interface AuthState{
    error:string|null
    loading:TLoading,
    token:null|string,
    userData:IUserData|null,
    uploadProfilePhotoStatus: TLoading
    
  }