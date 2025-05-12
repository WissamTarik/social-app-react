import { IUserData } from "@interfaces/AuthInterfaces";
import { storeType } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse={
    message:string,
    user:IUserData
}
export const actGetUserData=createAsyncThunk('auth/getUserData',async(_,{rejectWithValue,getState})=>{
   const {authReducer:{token}}=getState() as storeType
        try {
            const {data}=await axios.get<TResponse>('/users/profile-data',{
                headers:{token}
            })
            return data.user
        } catch (error) {
            return rejectWithValue(error)
        }
})