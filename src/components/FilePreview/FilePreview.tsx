import { Box, IconButton, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

type TFilePreviewProps={
    fileName:string,
    imgSrc:string,
    handleRemoveImage:()=>void
}
const FilePreview = ({fileName,imgSrc,handleRemoveImage}:TFilePreviewProps) => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:2,mt:2}}>
        {fileName && (
  <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between', gap: 2, mt: 2,position:'relative' }}>
    {imgSrc ?

      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:2}}>
        <img src={imgSrc} alt={fileName} width={50} height={50} style={{ borderRadius: 4 }} />
        <Typography variant="caption" display="block">
        Selected file: {fileName}
      </Typography>
      </Box>:  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <Typography variant="caption" display="block">
        Selected file: {fileName}
      </Typography>
     
    </Box>
    }
   <IconButton  onClick={handleRemoveImage}  >
        <CloseIcon/>
      </IconButton>
  </Box>
)}
    </Box>
  )
}

export default FilePreview