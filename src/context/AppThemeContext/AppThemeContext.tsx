import { createContext, useState } from "react"
interface contextProps{
    isDark:boolean,
    setIsDark?:React.Dispatch<React.SetStateAction<boolean>>;
}
export const themeContext=createContext<contextProps|null>(null)
const AppThemeContext = ({children}:{children:React.ReactNode}) => {
     const [isDark, ] = useState(localStorage.getItem('mui-mode')=='dark'?true:false)
  
  return (
    <themeContext.Provider value={{isDark}}>{children}</themeContext.Provider>
  )
  
}

export default AppThemeContext