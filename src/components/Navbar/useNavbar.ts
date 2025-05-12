import { PaletteMode } from "@mui/material";
import { logoutHandler } from "@redux/Auth/authSlice";
import { useAppDispatch, useAppSelector } from '@redux/index';
import React from "react";
import { useNavigate } from "react-router-dom";
export default function useNavbar({mode,setMode}:{mode:PaletteMode|'system',setMode:(mode:PaletteMode|'system')=>void}) {
      const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
      const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
      
      const {token,userData}=useAppSelector((store)=>store.authReducer)
         
      const navigate=useNavigate()
      const dispatch=useAppDispatch()
    
      const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = (path:string) => {
        setAnchorElNav(null);
        navigate(path)
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      
      };
    const toggleAppMode=()=>{
      console.log(mode);
      if(mode=='light'||mode=='system'){
        setMode('dark')
      }
      else if(mode=='dark'){
        setMode('light')
      }
      
    }
    const handleLogout=()=>{
      dispatch(logoutHandler())
      handleCloseUserMenu()
      navigate('/login')
    }
  return{mode,token,handleCloseNavMenu,handleLogout,handleOpenNavMenu,handleOpenUserMenu,toggleAppMode,handleCloseUserMenu,anchorElNav,anchorElUser,navigate,userData}
}
