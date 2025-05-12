import { ICommentsData } from "@interfaces/CommentsInterface";
import { isErrorHandler } from "@redux/shared";
import { storeType } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse={
    comments:ICommentsData[]
    message:string,
    total:number
}
export const actGetCommentOfPost=createAsyncThunk('comment/get',async(id:string,{rejectWithValue,getState})=>{
     const {authReducer:{token},commentReducer}=getState() as storeType
     if (commentReducer.postCommentsById[id]) {
        // Already cached — skip fetching
        return rejectWithValue({ skip: true });
      }
     try {
        const {data}=await axios.get<TResponse>(`/posts/${id}/comments`,{
            headers:{
                token
            }
        })
       
      

            return  { id, comments: data.comments };
        
        
     } catch (error) {
        return rejectWithValue(isErrorHandler(error))
     }
})