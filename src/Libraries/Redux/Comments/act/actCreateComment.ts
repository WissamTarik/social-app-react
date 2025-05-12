import { isErrorHandler } from "@redux/shared";
import { storeType } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actCreateComment=createAsyncThunk('comments/create',async({id,content}:{id:string,content:string},{rejectWithValue,getState})=>{
    const {authReducer:{token}}=getState() as storeType
     try {
        console.log(id,"Content=",content);
        
         const {data}=await axios.post(`/comments`,{content,post:id},{
            headers:{token}
         })
         
         return data
     } catch (error) {
        
        return rejectWithValue(isErrorHandler(error))
     }
})