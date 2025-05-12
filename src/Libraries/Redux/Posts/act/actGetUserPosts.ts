import { IPostData } from "@interfaces/PostsInterface";
import { isErrorHandler } from "@redux/shared";
import { storeType } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

type TResponse=IPostData
export const actGetUserPosts=createAsyncThunk('post/getUserPosts',async(_,{rejectWithValue,fulfillWithValue,getState,signal})=>{
    const {authReducer:{token}}=getState() as storeType
    const {user} = jwtDecode<{user:string,iat:number}>(token as string);
    console.log(user);

    try {
        const {data}=await axios.get<TResponse>(`https://linked-posts.routemisr.com/users/${user}/posts?limit=15`,{
            headers:{token},
            signal
        })
        if(data.posts.length==0){
            return fulfillWithValue([])
        }        
        return data.posts
    } catch (error) {
        return rejectWithValue(isErrorHandler(error))
    }
    

})