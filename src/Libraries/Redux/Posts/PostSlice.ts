import { IPostsState } from "@interfaces/PostsInterface"
import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { actGetAllPosts } from "./act/actGetAllPosts"
import { isString } from "@redux/shared"
import { actGetSinglePost } from "./act/actGetSinglePost"
import { actCreatePost } from "./act/actCreatePost"
import { actGetUserPosts } from './act/actGetUserPosts';


const initialState:IPostsState={
  error:null,
  loading:"idle",
  allPosts:[],
  singlePost:null
}

const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
      cleanSingleCommentPage:(state)=>{
        state.singlePost=null
      },
      cleanUserPostsPage:(state)=>{
        state.singlePost=null
          state.loading = "idle";
       state.allPosts = [];
      }
    },
    extraReducers(builder) {
        builder.addCase(actGetAllPosts.fulfilled,(state,action)=>{
          state.loading='succeeded'
          state.allPosts=action.payload

        })
        builder.addCase(actGetSinglePost.fulfilled,(state,action)=>{
          state.loading='succeeded'
          state.singlePost=action.payload

        })
       
        builder.addCase(actCreatePost.fulfilled,(state)=>{
          state.loading='succeeded'

        })
        builder.addCase(actGetUserPosts.fulfilled,(state,action)=>{
          state.loading='succeeded'
          state.allPosts=action.payload

        })
      builder.addMatcher(
        isAnyOf(
         actGetAllPosts.pending,
         actGetSinglePost.pending,
         actGetUserPosts.pending
        ),(state)=>{
          state.loading='pending'
          state.error=null
        }
      )
      builder.addMatcher(
        isAnyOf(
          actCreatePost.rejected,
          actGetAllPosts.rejected,
          actGetUserPosts.rejected,
          actGetSinglePost.rejected,
        ),(state,action)=>{
           state.loading='rejected'
          if(isString(action.payload)){
            state.error=action.payload
          }
        }
      )
    },
})
export const {cleanSingleCommentPage,cleanUserPostsPage}=postsSlice.actions
export const postsReducer=postsSlice.reducer