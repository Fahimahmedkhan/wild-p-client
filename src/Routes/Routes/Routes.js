import { createBrowserRouter } from "react-router-dom";
import ClientAuthLayout from "../../layout/ClientAuthLayout";
import ClientMainLayout from "../../layout/ClientMainLayout";
import Blogs from "../../page/Home/Blogs/Blogs";
import Home from "../../page/Home/Home/Home";
import Login from "../../page/Login/Login";
import SignUp from "../../page/SignUp/SignUp";

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