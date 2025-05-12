import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@axiosGlobal/axios";
import { ILoginData } from "src/interfaces/AuthInterfaces";
import { isErrorHandler } from "@redux/shared";

export const actLogin=createAsyncThunk('auth/login',async(userData:ILoginData,thunkApi)=>{
    const {rejectWithValue}=thunkApi
    
    try {
      
         const {data}=await axios.post('/users/signin',userData)
         console.log(data);
         return data
    } catch (error) {
        return rejectWithValue(isErrorHandler(error))
    }
})