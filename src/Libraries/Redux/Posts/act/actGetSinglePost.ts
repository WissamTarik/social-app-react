import { IPostContent } from "@interfaces/PostsInterface";
import { isErrorHandler } from "@redux/shared";
import { storeType } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse={
    message:string,
    post:IPostContent
}
export const actGetSinglePost=createAsyncThunk('post/single',async(id:string,thunkApi)=>{
           const {rejectWithValue,getState,signal}=thunkApi
           const {authReducer}=getState() as storeType
           const token=authReducer.token
           try {
               const {data}=await axios.get<TResponse>(`/posts/${id}`,{
                headers:{token},
                signal
               })
              return data.post
               
           } catch (error) {
            console.log(error);
            
             return rejectWithValue(isErrorHandler(error))
           }

})