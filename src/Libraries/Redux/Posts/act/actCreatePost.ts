import { isErrorHandler } from "@redux/shared";
import { storeType } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actCreatePost=createAsyncThunk('post/create',async(formData:FormData,{rejectWithValue,getState})=>{
        const {authReducer:{token}}=getState() as storeType
        try {
             const {data}=await axios.post(`https://linked-posts.routemisr.com/posts`,formData,{
                headers:{token}
             })
             console.log(data);
             
        } catch (error) {
            console.log(error);
            
            return rejectWithValue(isErrorHandler(error))
        }
})