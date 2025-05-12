import Navbar from "@components/Navbar/Navbar"
import { Box, useColorScheme } from "@mui/material"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
   const { mode, setMode } = useColorScheme();
   if (!mode) {
    return null;
  }
  return (
    <>
    <Navbar mode={mode} setMode={setMode}/>
    <Box component={'main'}>
      <Outlet/>
    </Box>
    </>
  )
}

export default MainLayout