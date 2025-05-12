import { isErrorHandler } from "@redux/shared";
import { storeType } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChangePasswordType } from "@validation/ChangePasswordValidation";
import axios from "axios";

export const actChangePassword=createAsyncThunk('auth/changePassword',async (passwordData:ChangePasswordType,{rejectWithValue,getState})=>{
   const {authReducer:{token}}=getState() as storeType
    try {
         const {data}=await axios.patch(`/users/change-password`,passwordData,{
            headers:{token}
         })
         return data
    } catch (error) {
         return rejectWithValue(isErrorHandler(error))
    }
})