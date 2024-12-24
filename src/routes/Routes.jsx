import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import FourOFour from "../pages/FourOFour/FourOFour.jsx";
import MyQueries from "../pages/MyQueries/MyQueries.jsx";
import AddQueries from "../pages/AddQueries/AddQueries.jsx";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            }
            ,{
                path: "/my-queries",
                element: <MyQueries></MyQueries>,
            } ,{
                path: "/add-queries",
                element: <AddQueries></AddQueries>,
            } ,{
                path: "/login",
                element: <Login></Login>,
            }
            ,{
                path: "/register",
                element:<Register></Register>,
            }
            ,{
            path:"*",
                element:<FourOFour></FourOFour>
            }
        ],
    },
]);

export default router;