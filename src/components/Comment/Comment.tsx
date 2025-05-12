import { ICommentsData } from "@interfaces/CommentsInterface"
import { Avatar, Box, Typography } from "@mui/material"
import { grey, red } from "@mui/material/colors"
import { useTheme } from '@mui/material/styles';

type TCommentProps=ICommentsData
const Comment = ({commentCreator,createdAt,content}:TCommentProps) => {
    const style = {
        bgcolor: 'background.paper',
        border: '2px solid #eee',
        p: 4,
        mb:2
    
    }
    const {palette} = useTheme();

  return <>
   <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {commentCreator.name}
      </Typography>
      <Box >
          <Box sx={{display:"flex",alignItems:"center" ,gap:2}}>
          <Avatar alt={commentCreator.name} src={commentCreator.photo} sx={{ bgcolor: red[500] }} />
          <Box>
              <Typography variant="body1" component={'h3'} sx={{color:palette.mode === 'dark' ?grey[100]:grey[800]}}>{commentCreator.name}</Typography>
              <Typography variant="body2" component={'h4'}sx={{color:grey[600]}}>{createdAt}</Typography>
          </Box>
          </Box>
      </Box>
    
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {content}
      </Typography>
      
    </Box>
  </>
}

export default Comment