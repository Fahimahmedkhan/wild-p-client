import { createBrowserRouter } from "react-router-dom";
import ClientAuthLayout from "../../layout/ClientAuthLayout";
import ClientMainLayout from "../../layout/ClientMainLayout";
import AllReviews from "../../page/AllReviews/AllReviews";
import Blogs from "../../page/Home/Blogs/Blogs";
import Home from "../../page/Home/Home/Home";
import Profile from "../../page/Home/Profile/Profile";
import Login from "../../page/Login/Login";
import MyCollections from "../../page/MyCollections/MyCollections";
import MyReviews from "../../page/MyReviews/MyReviews";
import SignUp from "../../page/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientMainLayout></ClientMainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path: '/allReviews',
                element: <PrivateRoutes><AllReviews></AllReviews></PrivateRoutes>
            },
            {
                path: '/myCollections',
                element: <PrivateRoutes><MyCollections></MyCollections></PrivateRoutes>
            },
            {
                path: '/myReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            }
        ]
    },
    {
        path: '/auth',
        element: <ClientAuthLayout></ClientAuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <SignUp></SignUp>
            }
        ]
    }
]);

export default router;