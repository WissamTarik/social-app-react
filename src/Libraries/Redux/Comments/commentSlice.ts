import { ICommentsState } from "@interfaces/CommentsInterface";
import { createSlice } from "@reduxjs/toolkit";
import { actGetCommentOfPost } from "./act/actGetCommentOfPost";
import { isString } from "@redux/shared";
import { actCreateComment } from "./act/actCreateComment";

const initialState:ICommentsState={
       loadingById:{},
       error:null,
       postCommentsById: {},
       createCommentLoading:'idle'
}
export const commentSlice=createSlice({
    name:'comments',
    initialState,
    reducers:{
        cleanUpComments:(state)=>{
            state.postCommentsById={}
            state.loadingById={}
        }
    },
    extraReducers(builder) {
        builder.addCase(actGetCommentOfPost.pending,(state,action)=>{
            state.loadingById[action.meta.arg] = 'pending';
            state.error=null
        })
        builder.addCase(actGetCommentOfPost.fulfilled,(state,action)=>{
            state.loadingById[action.meta.arg]='succeeded'
            state.postCommentsById[action.payload.id] = action.payload.comments;
        })
        builder.addCase(actGetCommentOfPost.rejected,(state,action)=>{
            state.loadingById[action.meta.arg]='rejected'
            if(isString(action.payload)){
                state.error=action.payload
            }
        })
        builder.addCase(actCreateComment.pending,(state)=>{
            state.createCommentLoading='pending'
            state.error=null
        })
        builder.addCase(actCreateComment.fulfilled,(state)=>{
            state.createCommentLoading='succeeded'
        })
        builder.addCase(actCreateComment.rejected,(state,action)=>{
            state.createCommentLoading='rejected'
            if(isString(action.payload)){

                state.error=null
            }
        })
    },

})
export const {cleanUpComments}=commentSlice.actions
export const commentReducer=commentSlice.reducer