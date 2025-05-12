import { TLoading } from "@customTypes/TLoading";
import { IUser } from "./PostsInterface";

export interface ICommentsData{
 _id:string,
 content:string,
 commentCreator:IUser,
 post:string,
 createdAt:string
}

export interface ICommentsState{
    loadingById: {
        [postId: string]: TLoading;
      },
    postCommentsById: {
        [id: string]: ICommentsData[]
      } ,
      createCommentLoading:TLoading
      error:string|null
}
            