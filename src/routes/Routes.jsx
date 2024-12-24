import React, {useContext} from 'react';
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
import ViewDetailsMyQuery from "../pages/ViewDetailsMyQuery/ViewDetailsMyQuery.jsx";
import UpdateMyQuery from "../pages/UpdateMyQuery/UpdateMyQuery.jsx";
import Queries from "../pages/Queries/Queries.jsx";



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
                path: "/queries",
                element: <Queries />,
                loader: () => fetch('http://localhost:5000/all-queries')
               
            }  ,{
                path: "/my-queries",
                element: <MyQueries />,
               
            } ,{
                path: "/add-queries",
                element: <AddQueries></AddQueries>,
            }  ,{
                path: "/view-details-my-queries/:id",
                element: <ViewDetailsMyQuery></ViewDetailsMyQuery>,
                loader: ({ params }) => fetch(`http://localhost:5000/queries/${params.id}`)
            } ,{
                path: "update-my-query/:id",
                element: <UpdateMyQuery></UpdateMyQuery>,
                loader: ({ params }) => fetch(`http://localhost:5000/queries/${params.id}`)
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