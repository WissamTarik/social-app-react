import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Avatar,Button,Tooltip,MenuItem,PaletteMode} from '@mui/material';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import image from "@assets/dollwithdog.jpg"
import useNavbar from './useNavbar';
import { useMemo } from 'react';

function Navbar({mode,setMode}:{mode:PaletteMode|'system',setMode:(mode:PaletteMode|'system')=>void}) {
 const {token,handleCloseNavMenu,anchorElNav,anchorElUser,handleLogout,handleOpenUserMenu,userData,navigate,handleOpenNavMenu,handleCloseUserMenu,toggleAppMode}=useNavbar({mode,setMode})
 const pages = useMemo(() => {
  return token ? [
    { path: '/userPost', text: "Your Posts" },
    
  ] : [
    { path: '/login', text: "Login" },
    { path: '/register', text: "Register" }
  ];
}, [token]);
 
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <IconButton onClick={toggleAppMode} sx={{ display: { xs: 'none', md: 'flex',color:'white' }, mr: 1 }} >
             {mode=='light'?<Brightness5Icon/>:<Brightness2Icon/>}
        
        </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Social App
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            
              size="large"
              aria-label="account of current user"
              aria-controls="menu-Navbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-Navbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
            
              {pages.map((page,index) => (
                <MenuItem key={index} onClick={()=>handleCloseNavMenu(page.path)}>
                  <Typography sx={{ textAlign: 'center' ,textDecoration:"none"}} color="initial" component={Link} to={page.path}>{page.text}</Typography>
                </MenuItem>
              ))}
          
            </Menu>
          </Box>
          <IconButton onClick={toggleAppMode}sx={{ display: { xs: 'flex', md: 'none' }, mr: 1,color:'white' }} >
             {mode=='light'?<Brightness5Icon/>:<Brightness2Icon/>}
        
        </IconButton>          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            social App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           {pages.map((page,index) => (
              <Button
                key={index}
                onClick={()=>handleCloseNavMenu(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          {token && (
  <Box sx={{ flexGrow: 0 }}>
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt={userData?.name} src={userData?.photo?userData.photo:image} />
      </IconButton>
    </Tooltip>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-Navbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      <MenuItem onClick={()=>{handleCloseUserMenu()
        navigate('/profile')
      }}>
        <Typography sx={{ textAlign: 'center' }} >Profile</Typography>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
      </MenuItem>
    </Menu>
  </Box>
)}

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
