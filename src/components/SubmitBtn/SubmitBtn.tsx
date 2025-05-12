import { Button, CircularProgress, useTheme } from '@mui/material'
import { TLoading } from '@customTypes/TLoading';

type TSubmitBtnProps={
    loading:TLoading,
    text:string
}

const SubmitBtn = ({loading,text}:TSubmitBtnProps) => {
    const {palette}=useTheme()
  return (
  <Button variant="outlined" type="submit" sx={{":hover":{backgroundColor:palette.primary.main,color:"white"},transition:"0.6s background-color,0.6s color",display:"flex",justifyContent:"center",alignItems:"center"}}
     disabled={loading=='pending'}
     >
      {loading == 'pending' ? <CircularProgress size={24} color="inherit" /> : text}

     </Button>
  )
}

export default SubmitBtn