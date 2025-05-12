
import { actCreateComment } from '@redux/Comments/act/actCreateComment';
import { actGetCommentOfPost } from '@redux/Comments/act/actGetCommentOfPost';
import { useAppDispatch, useAppSelector } from '@redux/index';
import { isString } from '@redux/shared';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
export default function usePost() {
    const [expanded, setExpanded] = useState(false);
          const [open, setOpen] = useState(false);
          const [createCommentLoading, setCreateCommentLoading] = useState(false);
          const commentRef=useRef<HTMLInputElement>(null)
          const dispatch=useAppDispatch()
          const {loadingById,postCommentsById}=useAppSelector((store)=>store.commentReducer)
          const handleOpen = () => setOpen(true);
          const handleClose = () => setOpen(false);
              function handleGetAllComments(id:string){
                  handleOpen()
                  dispatch(actGetCommentOfPost(id))
                }
                
                
                  const handleExpandClick = (id:string) => {
                    const checkExpanded=!expanded
                    if(checkExpanded==true&& !postCommentsById[id]){
                      dispatch(actGetCommentOfPost(id))
                    }
                    setExpanded(!expanded);
                  };
                  function handleCreateComment(id:string){
                    const content=commentRef.current?.value
                    console.log(commentRef.current?.value);
                    if(isString(content) && content!=''){
                      setCreateCommentLoading(true)
                      dispatch(actCreateComment({id,content})).unwrap().then(()=>{
                        toast.success('Comment is created successfully',{
                          theme:'colored',
                          position:'top-center'
                        })
                        if(commentRef.current){
                          commentRef.current.value=''
                        }
                      }).catch((error)=>{
                        toast.error(error,{
                          theme:'colored',
                          position:'top-center'
                        })
                      }).finally(()=>{
                        setCreateCommentLoading(false)
                      })
                    }else{
                      toast.error('No comment added',{
                        theme:'colored',
                        position:'top-center'
                      })
                    }
                  }
     
  return {open,expanded,loadingById,postCommentsById,handleClose,handleOpen,createCommentLoading,commentRef,handleCreateComment,handleExpandClick,handleGetAllComments}
}
