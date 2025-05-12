import Post from "@components/Post/Post"
import Loading from "@feedback/Loading/Loading"
import { Box, Grid, Typography } from "@mui/material"
import {  useAppSelector, useAppDispatch } from "@redux/index"
import { actGetUserPosts } from "@redux/Posts/act/actGetUserPosts"
import { cleanUserPostsPage } from "@redux/Posts/PostSlice"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

const UserPosts = () => {
  const {allPosts,loading,error}=useAppSelector((store)=>store.postsReducer)
    const dispatch=useAppDispatch()
    useEffect(() => {

    const promise= dispatch(actGetUserPosts())
     return  ()=>{
        promise.abort()
        dispatch(cleanUserPostsPage())
     }
    }, [dispatch])
    
  return (
<Box component={'section'} sx={{mt:{md:3}}}>
  {allPosts.length? <Helmet>
    <title>Your Posts</title>
  </Helmet>: <Helmet>
    <title>No posts Available</title>
  </Helmet>}
 
<Loading loadingStatus={loading} error={error}>
    <Grid container spacing={2}>
<Grid size={{ sm:2 }}>
</Grid>
<Grid size={{ sm:8}}>
{allPosts.length>0?allPosts.map((post)=><Post key={post._id} {...post} showAllComments={false}/>):<Typography variant="h3" color="initial">There is no posts available</Typography>}
</Grid>
<Grid size={{sm:2}}>
</Grid>

</Grid>        
</Loading>
</Box>
  )
}

export default UserPosts