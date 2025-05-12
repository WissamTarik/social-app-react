import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, CircularProgress, Collapse, IconButton, IconButtonProps, styled, TextField, Typography } from "@mui/material";
import {  red } from "@mui/material/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IPostContent } from "@interfaces/PostsInterface";

import CommentModal from "@components/CommentModal/CommentModal";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import Comment from "@components/Comment/Comment";
import SendIcon from '@mui/icons-material/Send';

import usePost from "./usePost";
import React from "react";
 type TPostProps=IPostContent&{
  showAllComments?:boolean
 }
 
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
 const Post = ({body,image,createdAt,user,id,showAllComments}:TPostProps) => {
  const {expanded,open,handleClose,commentRef,createCommentLoading,loadingById,postCommentsById,handleCreateComment,handleGetAllComments,handleExpandClick}=usePost()
  const ExpandMore = styled((props: ExpandMoreProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));
      
  
  return (
    <>
<CommentModal open={open} handleClose={handleClose} comments={postCommentsById[id] || []} loading={loadingById[id]}/>
    <Card sx={{mt:3}}>
          <CardHeader
            avatar={
              <Avatar alt={user.name} src={user.photo} sx={{ bgcolor: red[500] }} />
            }
            action={
             !showAllComments&& <Link to={`/postDetails/${id}`} aria-label="settings" title="See Post details">
             <MoreVertIcon />
           </Link>
            }
            title={user.name}
            subheader={createdAt}
          />
         {image&& <CardMedia
            component="img"
            height="250"
          image={image}
            alt="Paella dish"
            sx={{objectFit:"cover"}}
          />}
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             {body}
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
           {showAllComments? <>
           
            <ExpandMore
          expand={expanded}
          onClick={()=>handleExpandClick(id)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {loadingById[id]=='pending'?<CircularProgress/>:<ExpandMoreIcon />}
        </ExpandMore>
           </>:<IconButton aria-label="comment"  onClick={()=>handleGetAllComments(id)}>
            {loadingById[id]=='pending'?<CircularProgress size={20} color="primary" />:<CommentIcon/>}
            </IconButton>}
         
          </CardActions>
             <Box sx={{display:'flex',justifyContent:"center" ,gap:2,alignItems:'center',px:2 }}>
      <TextField variant="outlined" fullWidth sx={{my:2}} label="Add a comment" inputRef={commentRef}  />
    {createCommentLoading?<CircularProgress/>:  <Button variant="contained" endIcon={<SendIcon />}  sx={{textTransform:'capitalize'}}  onClick={()=>handleCreateComment(id)}>
       Add
</Button>}
      </Box>
        {showAllComments&&  <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
      {loadingById[id] === "pending" ? (
        <CircularProgress />
      ) : postCommentsById[id]?.length > 0 ? (
        postCommentsById[id].map((comment) => (
          <Comment key={comment._id} {...comment} />
        ))
      ) : (
        <Typography variant="body2" color="text.secondary">
          No comments yet.
        </Typography>
      )}
    </CardContent>
      </Collapse>}
   
        </Card>
    </>
  )
}
export default  React.memo(Post);