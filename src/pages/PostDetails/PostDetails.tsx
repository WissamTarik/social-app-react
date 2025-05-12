import { Box, Container } from "@mui/material"
import Loading from "@feedback/Loading/Loading";
import Post from "@components/Post/Post";
import usePostDetails from "./usePostDetails";
const PostDetails = () => {
  const {singlePost,loading,error}=usePostDetails()
  return (
    <Loading loadingStatus={loading} error={error}><Box  component={'section'}  sx={{mt:3}}>
    <Container maxWidth={'md'}>
 
{singlePost&& <Post {...singlePost } showAllComments={true}   />}

    </Container>
</Box></Loading>
  )
}

export default PostDetails