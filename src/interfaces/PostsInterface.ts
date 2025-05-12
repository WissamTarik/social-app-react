import { TLoading } from "@customTypes/TLoading"
import { ICommentsData } from "./CommentsInterface"

export interface  IPostData{
    message:string,
    paginationInfo:IPaginationInfo,
      posts:IPostContent[]
}
export interface IPostContent{
    _id:string,
    body:string,
    image:string,
    user:IUser,
    createdAt:string,
    comments:ICommentsData[],
    id:string,
}
export interface IUser{
    _id:string,
    name:string,
    photo:string
}
 export interface IPostsState{
    error:string|null
    loading:TLoading,
    allPosts:IPostContent[],
    singlePost:IPostContent|null

    
  }
interface IPaginationInfo{
    currentPage:number
    numberOfPages:number,
    limit:number,
    nextPage:number,
    total:number
}
             