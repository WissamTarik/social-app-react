import Lottie from "lottie-react";
import loadingAnimation from '@assets/LoadingAnimation.json'
import notFoundAnimation from '@assets/NotFoundAnimation.json'
import errorAnimation from '@assets/ErrorAnimation.json'
import { Box, Typography } from '@mui/material';

const filesMap={
    loadingAnimation,
    notFoundAnimation,
    errorAnimation
}
type TLottieHandlerProps={
    type:keyof typeof filesMap,
    message?:string
}
const LottieHandler = ({type,message}:TLottieHandlerProps) => {
  return (
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
        <Lottie animationData={filesMap[type]} style={{width:"300px" ,marginTop:"50px" }} />
        {message&&<Typography variant="h5" color="initial">{message}</Typography>}
    </Box>
  )
}

export default LottieHandler