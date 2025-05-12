import { lazy } from "react";
const Home = lazy(() => import("@pages/Home/Home"));
const PostDetails = lazy(() => import("@pages/PostDetails/PostDetails"));
const ChangePassword = lazy(() => import("@pages/ChangePassword/ChangePassword"));
const UserPosts = lazy(() => import("@pages/UserPosts/UserPosts"));

import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";
import Profile from "@pages/Profile/Profile";

import SuspenseHandler from "@feedback/Loading/SuspenseHandler/SuspenseHandler";
import MainLayout from "@layout/MainLayout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";

const AppRouter = () => {
  const router=createBrowserRouter([
    {path:'' ,element:<MainLayout/> ,children:[
      {index:true,element:<ProtectedRoute><SuspenseHandler><Home/></SuspenseHandler></ProtectedRoute>},
      {path:'/login',element:<Login/>},
      {path:'/register',element:<Register/>},
      {path:'/userPost',element: <ProtectedRoute>
            <SuspenseHandler><UserPosts /></SuspenseHandler>
          </ProtectedRoute>},
      {path:'/changePassword',element:  <ProtectedRoute>
            <SuspenseHandler><ChangePassword /></SuspenseHandler>
          </ProtectedRoute>},
      {path:'/profile',element: <ProtectedRoute>
            <SuspenseHandler><Profile /></SuspenseHandler>
          </ProtectedRoute>},
      {path:'/postDetails/:id',element: <ProtectedRoute>
            <SuspenseHandler><PostDetails /></SuspenseHandler>
          </ProtectedRoute>},
    ] ,errorElement:<NotFoundPage/>},
   


  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter