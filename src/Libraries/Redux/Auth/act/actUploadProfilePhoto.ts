import { storeType } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actUploadProfilePhoto=createAsyncThunk('auth/uploadPhoto',async(image:FormData,{rejectWithValue,getState})=>{
   
    const {authReducer:{token}}=getState() as storeType
     try {
         const {data}=await axios.put('/users/upload-photo',image,{
            headers:{token}
         })
         return data
         
     } catch (error) {
        
        return rejectWithValue(error)
     }
})