import React from 'react';
import axios from "axios";
import {useLoaderData, useParams} from "react-router-dom";
import FourOFour from "../FourOFour/FourOFour.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import PageBanner from "../../components/PageBanner/PageBanner.jsx";
import {Helmet} from "react-helmet-async";

const ViewDetailsMyQuery = () => {
 
    
    const query=useLoaderData()
    const {
        productName,
        productBrand,
       
        queryTitle,
        boycottReason,
        userEmail,
        userName,

        createdAt,
        recommendationCount,
    } = query;
    console.log(query)



    return (
        <div>
            <Helmet>
                <title>View Details My Queries | RecommendHub</title>
            </Helmet>
            <PageTitle pageTitle="View Details" />
            <PageBanner heading={queryTitle} ></PageBanner>

            <div className="container mx-auto p-4 ">
                <div className="card w-full bg-base-100   shadow-md">
                    <div className="card-body">
                        
                        
                        <div className="flex flex-col md:flex-row gap-10">
                            <img
                                src={query?.productImageUrl}
                                alt={productName}
                                className="w-full md:w-1/3 rounded-lg"
                            />
                            <div className="flex flex-col gap-2 text-left">
                                <p className='text-xl font-semibold'>
                                    <span className="font-bold">Product Name:</span> {productName}
                                </p>
                                <p>
                                    <span className="font-semibold">Product Brand:</span> {productBrand}
                                </p>
                                <p>
                                    <span className="font-semibold">Boycotting Reason:</span> {
                                    boycottReason}
                                </p>
                                <p>
                                    <span className="font-semibold">Submitted By:</span> {userName}
                                </p>
                                <p>
                                    <span className="font-semibold">User Email:</span> {userEmail}
                                </p>
                                <p>
                                    <span className="font-semibold">Submitted On:</span> {createdAt }
                                </p>
                                <p>
                                    <span className="font-semibold">Recommendations:</span> {recommendationCount}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="flex items-center gap-4">
                            <img
                                src={query?.userImage}
                                alt={userName}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <p className="font-semibold">{userName}</p>
                                <p className="text-sm text-gray-600">User Profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetailsMyQuery;