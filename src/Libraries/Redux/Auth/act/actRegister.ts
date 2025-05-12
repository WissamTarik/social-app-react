import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@axiosGlobal/axios";
import { IRegisterData } from "src/interfaces/AuthInterfaces";
import { isErrorHandler } from "@redux/shared";

export const actRegister=createAsyncThunk('auth/register',async(userData:IRegisterData,thunkApi)=>{
    const {rejectWithValue}=thunkApi
    
    try {
      
         const {data}=await axios.post('/users/signup',userData)
         console.log(data);
        

           return data.message
       
        
    } catch (error) {
        return rejectWithValue(isErrorHandler(error))
    }
})