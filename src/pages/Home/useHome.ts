import { useAppDispatch, useAppSelector } from "@redux/index"
import { actGetAllPosts } from "@redux/Posts/act/actGetAllPosts"
import { useEffect } from "react"

export default function useHome() {
    const dispatch=useAppDispatch()
    const {loading,error,allPosts}=useAppSelector((store)=>store.postsReducer)
  useEffect(() => {
    if(!allPosts.length){

      dispatch(actGetAllPosts())
    }
  }, [dispatch,allPosts])
  
  return {
  loading,error,allPosts
  }
}
