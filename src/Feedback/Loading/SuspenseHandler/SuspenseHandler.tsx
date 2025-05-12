import LottieHandler from "@components/LottieHandler/LottieHandler"
import { Suspense } from "react"

const SuspenseHandler = ({children}:{children:React.ReactNode}) => {
  return (
    <Suspense fallback={<LottieHandler type="loadingAnimation" message="Loading please wait"/>}>{children}</Suspense>
  )
}

export default SuspenseHandler