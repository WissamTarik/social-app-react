import {  CircularProgress, Paper, TextField, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import useCreatePost from "./useCreatePost";
import FilePreview from "@components/FilePreview/FilePreview";
const CreatePost = () => {
 const {loading,palette,VisuallyHiddenInput,imgSrc,setPostContent,handleChangeFileValue,handleRemoveImage,handleCreatePost,postContent,fileInputRef,fileValue}=useCreatePost()
 
  return (
    <Paper sx={{py:3,px:2,mt:2}} elevation={10}>
        <Typography variant="h6" component={'h3'} color={palette.primary.main}>Create Post</Typography>
        <TextField variant="outlined" label='post content'
        value={postContent}
        fullWidth rows={4} multiline sx={{my:2}} onChange={(e)=>setPostContent(e.target.value)}/>
        <Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
  fullWidth
  disabled={loading}
>
  Upload files
  <VisuallyHiddenInput
    type="file"
    onChange={(event) => handleChangeFileValue(event.target.files?event.target.files[0]:null)}
    ref={fileInputRef}
    multiple
    accept="image/*"
  />
  
</Button>
{fileValue&&<FilePreview fileName={fileValue.name} handleRemoveImage={handleRemoveImage} imgSrc={imgSrc}/>}
<Button variant="outlined"sx={{my:2,":hover":{bgcolor:palette.primary.main,color:palette.common.white},transition:'background-color 0.5s,color 0.5s',display:"flex",justifyContent:'center',alignItems:"center"}} fullWidth
onClick={()=>handleCreatePost()}
disabled={loading}
>{loading?<CircularProgress/>:"Create"}</Button>

    </Paper>
  )
}

export default CreatePost