import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "@redux/index";
import { actCreatePost } from "@redux/Posts/act/actCreatePost";
import {  styled, useTheme } from "@mui/material"

export default function useCreatePost() {
     const dispatch=useAppDispatch()
      const [loading, setLoading] = useState(false)
      const [postContent, setPostContent] = useState('')
      const [imgSrc, setImgSrc] = useState('')
      const [fileValue, setFileValue] = useState<File|null>(null)
      const fileInputRef = useRef<HTMLInputElement>(null)
       const {palette}=useTheme()
        const VisuallyHiddenInput = useMemo(()=>styled('input')({
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            height: 1,
            overflow: 'hidden',
            position: 'absolute',
            bottom: 0,
            left: 0,
            whiteSpace: 'nowrap',
            width: 1,
          }),[]);
          
          function handleChangeFileValue(file:File|null){
            setFileValue(null)
            setImgSrc('')
            if( file){
              setFileValue(file)
              if(file.type.startsWith("image/")){
              const src= URL.createObjectURL(file)
              console.log(src);
              setImgSrc(src)    
            }
          }
               
    
          }
          const handleRemoveImage = () => {
            setFileValue(null);
            setImgSrc('');
            if (fileInputRef.current) fileInputRef.current.value = '';
          };
          const handleCreatePost = useCallback(() => {
            if(!postContent.trim()|| !fileValue){
              toast.error('Please add a content and image')
              return;
            }
            else{
              const formData=new FormData()
              formData.append('body',postContent)
              formData.append('image',fileValue)
              setLoading(true)
               dispatch(actCreatePost(formData)).unwrap().then(()=>{
                toast.success('Post is created successfully',{
                  theme:"colored",
                  position:'top-center'
                })
                resetForm()
    
               }).catch((error)=>{
                  toast.error(error,{
                    theme:"colored",
                    position:'top-center'
                  })
               }).finally(()=>{
                setLoading(false)
               })      
            }
             
                
          },[postContent,fileValue,dispatch])
          function resetForm(){
     setPostContent('')
                setImgSrc('')
                setFileValue(null)
                if (fileInputRef.current) fileInputRef.current.value = '';
          }
          useEffect(() => {
          
            return () => {
               if(imgSrc){
                URL.revokeObjectURL(imgSrc)
               }
            }
          }, [imgSrc])
          
  return {
    VisuallyHiddenInput,
    loading,
    imgSrc,
    palette,
    postContent,
    setPostContent,
    handleChangeFileValue,
    handleCreatePost,
    handleRemoveImage,
    fileInputRef,
    fileValue

  }
}
