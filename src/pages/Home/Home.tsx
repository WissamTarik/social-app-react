import {  Box, Grid } from "@mui/material";

import useHome from "./useHome";
import CreatePost from "@components/CreatePost/CreatePost";
import Loading from "@feedback/Loading/Loading";
import Post from "@components/Post/Post";
import { Helmet } from "react-helmet-async";




const Home = () => {
 const {loading,error,allPosts}=useHome()


  return (
    <Box component={'section'} sx={{mt:{md:3}}}>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="See the latest posts and create your own." />
      </Helmet>
        <Grid container spacing={2}>
  <Grid size={{ sm:2 }}>
  </Grid>
  <Grid size={{ sm:8}}>
    <Loading error={error} loadingStatus={loading}><>
    <CreatePost/>
    <Box aria-label="List of posts">
          {allPosts.map((post)=><Post key={post._id} {...post} showAllComments={false}/>)}

    </Box>
    </></Loading>
  </Grid>
  <Grid size={{sm:2}}>
  </Grid>
  
</Grid>        
    </Box>
  );
};
export default Home