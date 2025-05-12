
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/index";
import { actGetSinglePost } from "@redux/Posts/act/actGetSinglePost";
import { useEffect } from "react";
import { cleanSingleCommentPage } from "@redux/Posts/PostSlice";
import { cleanUpComments } from "@redux/Comments/commentSlice";
export default function usePostDetails() {
      const {id}=useParams()
      const dispatch=useAppDispatch()
      const {singlePost,loading,error}=useAppSelector((store)=>store.postsReducer)
     useEffect(() => {
  const promise = dispatch(actGetSinglePost(id as string));
  return () => {
    dispatch(cleanSingleCommentPage());
    dispatch(cleanUpComments());
    promise?.abort?.();
  };
}, [dispatch, id]);
      
  return{singlePost,loading,error}
}
