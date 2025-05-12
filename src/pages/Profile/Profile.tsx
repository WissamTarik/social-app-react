
import { Box,Paper,Grid,Avatar, Button, CircularProgress, Container, Typography ,TableContainer,Table,TableBody,styled} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Post from '@components/Post/Post';
import Loading from '@feedback/Loading/Loading';
import ProfileInfoTable from '@components/ProfileInfoTable/ProfileInfoTable';
import useProfile from './useProfile';
import { Helmet } from 'react-helmet-async';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  textTransform:'capitalize',
  width: 1,
});

const Profile = () => {
 const {navigate,loading,error,allPosts,uploadProfilePhotoStatus,userData,handleUpdatePhoto}=useProfile()
  return (
    <Box component={'section'}>
       <Helmet>
        <title>{userData?.name}</title>
       
    </Helmet>
  <Loading error={error} loadingStatus={loading}>

         <Container maxWidth={'lg'} sx={{mt:8}}> 
         <Grid container spacing={2}>
  <Grid size={{ xs:12, md: 4 }}>
   <Paper sx={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center',p:4}}>
     <Avatar
  alt={userData?.name}
  src={userData?.photo}
  sx={{ width: 120, height: 120 ,mb:3}}
  
/>
<Typography variant="h4"  component={'h2'}>{userData?.name}</Typography>
<Box sx={{mt:2}} >
<Button
  sx={{textTransform:"capitalize",display:'flex',justifyContent:'center',alignItems:'center'}}
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<EditIcon />}
  fullWidth
  disabled={uploadProfilePhotoStatus=='pending'}
aria-label="Upload a new profile photo"
>
  {uploadProfilePhotoStatus=='pending'?<CircularProgress/>:'change profile image'}
  <VisuallyHiddenInput
    type="file"
    onChange={(event) =>handleUpdatePhoto(event.target.files?event.target.files[0]:null)}
     accept='image/*'
  />
</Button>
<Button variant='contained' color='error' endIcon={  <Fingerprint />}
  aria-label="Change user password"
fullWidth sx={{mt:1,textTransform:"capitalize"}}
onClick={()=>navigate('/changePassword')} >
       change password
</Button>
</Box>
   </Paper>
  </Grid>
  <Grid  size={{  xs:12,md: 8 }}>
   <TableContainer component={Paper} >
      <Table aria-label="simple table" >
          <caption style={{ display: 'none' }}>User profile information including name, email, gender, and date of birth</caption>

        <TableBody>
          <ProfileInfoTable name='Name' value={userData?.name??''}/>
          <ProfileInfoTable name='Email' value={userData?.email??''}/>
          <ProfileInfoTable name='Gender' value={userData?.gender??''}/>
          <ProfileInfoTable name='DOB' value={userData?.dateOfBirth??''}/>    
        </TableBody>

      </Table>
    </TableContainer>
    <Typography variant="h6" sx={{my:3}} fontWeight={'bold'}  >Your Posts</Typography>
    {allPosts.map((post)=><Post key={post._id} {...post} showAllComments={false}/>)}
  </Grid>
 
  
</Grid>
</Container>
  </Loading>

    </Box>
  )
}

export default Profile