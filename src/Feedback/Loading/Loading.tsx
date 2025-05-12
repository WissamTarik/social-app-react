import LottieHandler from "@components/LottieHandler/LottieHandler"
import { TLoading } from "@customTypes/TLoading"

type TLoadingProps={
    children:React.ReactNode,
    loadingStatus:TLoading,
    error:null|string
}
const Loading = ({children,loadingStatus,error}:TLoadingProps) => {
 if(loadingStatus=='pending'){
    return <LottieHandler type="loadingAnimation" message="Loading...."/>
 }
 if(loadingStatus=='rejected' &&error){
    return <LottieHandler type="errorAnimation" message={error as string}/>
 }
  return (
    <>{children}</>
  )
}

export default Loading