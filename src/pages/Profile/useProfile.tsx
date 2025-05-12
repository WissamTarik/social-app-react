import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@redux/index';
import { useCallback, useEffect } from 'react';
import { actUploadProfilePhoto } from '@redux/Auth/act/actUploadProfilePhoto';
import { toast } from 'react-toastify';
import { actGetUserData } from '@redux/Auth/act/actGetUserData';
import { actGetUserPosts } from '@redux/Posts/act/actGetUserPosts';
import { cleanUserPostsPage } from '@redux/Posts/PostSlice';
export default function useProfile() {
      const navigate=useNavigate()
      const dispatch=useAppDispatch()
      const {loading,userData,error,uploadProfilePhotoStatus}=useAppSelector((store)=>store.authReducer)
        const {allPosts}=useAppSelector((store)=>store.postsReducer)
      const handleUpdatePhoto=useCallback((file:File|null)=>{
        if(file){
      
          const formData=new FormData()
          formData.append('photo',file)
          dispatch(actUploadProfilePhoto(formData)).unwrap().then(()=>{
    
            toast.success('Profile image is updated successfully',{
              theme:"colored",
              position:"top-center"
            })
              dispatch(actGetUserData())
          }).catch(()=>{
            toast.error('Failed to change profile image',{
              theme:"colored",
              position:'top-center'
            })
          })
          
        }
    
      },[dispatch])
   useEffect(() => {
  if (!userData) {
    dispatch(actGetUserData());
  }
}, [dispatch, userData]);
      
      useEffect(() => {
        const promise= dispatch(actGetUserPosts())
            return  ()=>{
               promise.abort()
               dispatch(cleanUserPostsPage())
            }
      }, [dispatch])
      
  return{navigate,loading,error,allPosts,uploadProfilePhotoStatus,userData,handleUpdatePhoto}
}
