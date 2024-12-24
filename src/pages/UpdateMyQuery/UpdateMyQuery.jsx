import React, {useContext, useState} from 'react';
import {useLoaderData} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import PageBanner from "../../components/PageBanner/PageBanner.jsx";
import axios from "axios";
import {Helmet} from "react-helmet-async";
import {AuthContext} from "../../components/authProvider/AuthProvider.jsx";
import Loading from "../../components/Loading/Loading.jsx";

const UpdateMyQuery = () => {

    const { loading } = useContext(AuthContext)
    const query=useLoaderData()
    const {
        productName,
        productBrand,

        queryTitle,
        boycottingReasonDetails,
        userEmail,
        userName,
        productImageUrl,
        boycottReason,

        createdAt,
        recommendationCount,
        _id
    } = query;
    console.log(query)

    const [queryData, setQueryData] = useState({
        productName,
        productBrand,
        productImageUrl,
        queryTitle,
        boycottReason,
    });

    const updateQueryData = {...queryData};
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5000/queries/${_id}`,updateQueryData);
            toast("Query updated successfully!");
           
        } catch (error) {
            console.error("Error updating query:", error);
            alert("Failed to update the query. Please try again.");
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setQueryData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    if (loading) {
        return <Loading />;
    }
    return (
        <div>

            <Helmet>
                <title>Queries | RecommendHub</title>
            </Helmet>

           <PageTitle pageTitle="My Query Update" />
            <PageBanner heading='Update Your Query' 
                        subTitle='Edit and refine the details of your query to keep your information up-to-date.'></PageBanner>

            <div className="container mx-auto">
                <div className="card w-full rounded-none  shadow-md ">
                  
                    <form onSubmit={handleUpdate} className="flex flex-col gap-4 md:w-2/4 mx-auto shadow rounded p-8 ">
                        <div>
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                name="productName"
                                defaultValue={query?.productName}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <input
                                type="text"
                                name="productBrand"
                                defaultValue={query?.productBrand}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Product Image URL</span>
                            </label>
                            <input
                                type="url"
                                name="productImageURL"
                                defaultValue={query?.productImageUrl}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Query Title</span>
                            </label>
                            <input
                                type="text"
                                name="queryTitle"
                                defaultValue={query?.queryTitle}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Boycotting Reason Details</span>
                            </label>
                            <textarea
                                name="boycottReason"
                                defaultValue={query?.boycottReason}                                
                                onChange={handleChange}
                                className="textarea textarea-bordered w-full"
                                rows="4"
                                required
                            />
                        </div>

                        <button type="submit" className="btn  bg-[#181718] hover:bg-[#be161e] text-white w-full">
                            Update Query
                        </button>
                    </form>
                </div>
            </div>

            <ToastContainer />

        </div>
    );
};

export default UpdateMyQuery;