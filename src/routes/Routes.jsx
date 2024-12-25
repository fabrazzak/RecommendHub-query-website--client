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
import QueryDetails from "../pages/QueryDetails/QueryDetails.jsx";
import MyRecommendations from "../pages/MyRecommendations/MyRecommendations.jsx";
import RecommendationForMe from "../pages/RecommendationForMe/RecommendationForMe.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader: ({ params }) => fetch('http://localhost:5000/all-queries?limit=6')
            }
            ,{
                path: "/queries",
                element: <Queries />,
                loader: () => fetch('http://localhost:5000/all-queries')
               
            }
            ,{
                path: "/queries/:id",
                element : <PrivateRoute> <QueryDetails></QueryDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/all-queries/${params.id}`)
            } ,{
                path: "/my-queries",
                element:  <PrivateRoute>  <MyQueries /> </PrivateRoute>,
               
            },{
                path: "/recommendations-for-me",
                element: <PrivateRoute>  <RecommendationForMe></RecommendationForMe></PrivateRoute>
               
            },{
                path: "/my-recommendations",
                element: <PrivateRoute> <MyRecommendations /> </PrivateRoute>,
               
            } ,{
                path: "/add-queries",
                element: <PrivateRoute> <AddQueries></AddQueries> </PrivateRoute>,
            }  ,{
                path: "/view-details-my-queries/:id",
                element: <PrivateRoute> <ViewDetailsMyQuery></ViewDetailsMyQuery></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/queries/${params.id}`)
            } ,{
                path: "update-my-query/:id",
                element: <PrivateRoute> <UpdateMyQuery></UpdateMyQuery></PrivateRoute>,
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