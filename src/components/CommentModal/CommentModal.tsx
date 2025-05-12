import { ICommentsData } from "@interfaces/CommentsInterface";
import { Box, CircularProgress, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { grey } from "@mui/material/colors";
import Comment from "@components/Comment/Comment";
import { TLoading } from "@customTypes/TLoading";


type TCommentModalProps={
    open:boolean,
    handleClose:()=>void,
    comments:ICommentsData[],
    loading:TLoading

}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 400,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #eee',
    boxShadow: 24,
    py: 1,
    borderRadius: 2,
  
  };

const CommentModal = ({open,handleClose,comments,loading}:TCommentModalProps) => {
  return <>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      {/* Sticky Close Button Container */}
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:"center",px:2}}>
    <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight={"bold"}>
      {comments.length} Comments
    </Typography>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          display: 'flex',
          justifyContent: 'flex-end',
          zIndex: 10,
          p: 1,
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            color: grey[800],
            backgroundColor:grey[200],
            ':hover': { bgcolor: grey[300] },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  {loading=='pending'?<Box sx={{  display:'flex',
    justifyContent:'center',
    alignItems:'center',marginTop:"-30px"}}><CircularProgress /></Box>:<>
  
      {/* Comments List */}
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment key={comment._id} {...comment} />
        ))
      ) : (
        <Typography variant="h6" textAlign="center" mt={2}>
          No Comments Available For This Post
        </Typography>
      )}
  </>}
    </Box>
  </Modal>
  </>
}

export default CommentModal