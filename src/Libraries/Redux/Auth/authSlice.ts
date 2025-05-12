import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "src/interfaces/AuthInterfaces";
import { actRegister } from "./act/actRegister";
import { actLogin } from "./act/actLogin";
import { isString } from "@redux/shared";
import { actChangePassword } from "./act/actChangePassword";
import { actUploadProfilePhoto } from "./act/actUploadProfilePhoto";
import { actGetUserData } from "./act/actGetUserData";

const initialState:AuthState={
    error:null,
    loading:"idle",
    userData:null,
    token:null,
    uploadProfilePhotoStatus: "idle"
    
}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logoutHandler:(state)=>{
            state.token=null
        }

    },
    extraReducers(builder) {
        builder.addCase(actRegister.pending,(state)=>{
            state.loading='pending'
            state.error=null
        })
        builder.addCase(actRegister.fulfilled,(state)=>{
            state.loading='succeeded'
        
  
        })
        builder.addCase(actRegister.rejected,(state,action)=>{
            state.loading='rejected'
            console.log('Action',action.payload);
             
            if(action.payload&& typeof action.payload=='string'){
                state.error=action.payload
            }

        })
        builder.addCase(actLogin.pending,(state)=>{
            state.loading='pending'
            state.error=null
        })
        builder.addCase(actLogin.fulfilled,(state,action)=>{
            state.loading='succeeded'
           state.token=action.payload.token 
           
        })
        builder.addCase(actLogin.rejected,(state,action)=>{
            state.loading='rejected'
             
            if(isString(action.payload)){
                state.error=action.payload
            }

        })
        builder.addCase(actChangePassword.pending,(state)=>{
            state.loading='pending'
            state.error=null
        })
        builder.addCase(actChangePassword.fulfilled,(state,action)=>{
            state.loading='succeeded'
           state.token=action.payload.token 
           
        })
        builder.addCase(actChangePassword.rejected,(state,action)=>{
            state.loading='rejected'
             
            if(isString(action.payload)){
                state.error=action.payload
            }

        })
        builder.addCase(actUploadProfilePhoto.pending,(state)=>{
            state.uploadProfilePhotoStatus="pending"
            state.error=null
        })
        builder.addCase(actUploadProfilePhoto.fulfilled,(state)=>{
            state.uploadProfilePhotoStatus="succeeded"
           
        })
        builder.addCase(actUploadProfilePhoto.rejected,(state,action)=>{
            state.uploadProfilePhotoStatus='rejected'
             
            if(isString(action.payload)){
                state.error=action.payload
            }

        })
        builder.addCase(actGetUserData.pending,(state)=>{
            state.loading='pending'
            state.error=null
        })
        builder.addCase(actGetUserData.fulfilled,(state,action)=>{
            state.loading='succeeded'
            state.userData=action.payload
           
        })
        builder.addCase(actGetUserData.rejected,(state,action)=>{
            state.loading='rejected'
             
            if(isString(action.payload)){
                state.error=action.payload
            }

        })
    },
})
export const {logoutHandler}=authSlice.actions
export const authReducer=authSlice.reducer