import { storeType } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@axiosGlobal/axios";
import { IPostData,IPostContent } from "@interfaces/PostsInterface";
import { isErrorHandler } from "@redux/shared";


export const actGetAllPosts=createAsyncThunk<IPostContent[], void, { state: storeType }>('posts',async(_,thunkApi)=>{
    const {rejectWithValue,getState,signal}=thunkApi
    
    const {authReducer}=getState() as storeType
    const token=authReducer.token  as string
    
   try {
     const {data}  = await axios.get<IPostData>('/posts?limit=50',{
        headers:{
            token
        },
        signal
     })
     
     return data.posts

 } catch (error) {
       return rejectWithValue(isErrorHandler(error))
 }    

})