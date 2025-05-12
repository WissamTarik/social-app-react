import LottieHandler from '@components/LottieHandler/LottieHandler';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container sx={{textAlign:'center',mt:5,display:"flow-root",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
    <LottieHandler type="notFoundAnimation"/>
   <Link to={''} style={{textDecoration:"none",backgroundColor:"blue" ,color:"white",padding:"15px 10px",marginTop:"20px",display:"block",width:"fit-content",marginInline:"auto",borderRadius:"6px",cursor:'pointer'}} replace={true}>Go back to home
   </Link>
</Container>
  );
};

export default NotFoundPage;
