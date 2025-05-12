import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import AppRouter from '@router/AppRouter/AppRouter'




const AppTheme = () => {

const theme=createTheme({
  colorSchemes:{
    dark:true
  }
})
  return (
   <>
 
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppRouter/>
    </ThemeProvider>
   </>  )
}

export default AppTheme