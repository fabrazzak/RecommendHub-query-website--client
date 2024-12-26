import React, { useContext, useState } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../components/authProvider/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import PageBanner from "../../components/PageBanner/PageBanner.jsx";

const AddQueries = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productImageUrl = form.productImageUrl.value;
        const queryTitle = form.queryTitle.value;
        const boycottReason = form.boycottReason.value;




        const queryInfo = {

            userEmail: user?.email,
            userName: user?.displayName,
            userImage: user?.photoURL,
            createdAt: new Date().toISOString(),
            recommendationCount: 0,
            productName,
            productBrand,
            productImageUrl,
            queryTitle,
            boycottReason,

        };

        console.log(queryInfo);

        try {
            const response = await axios.post("https://queries-server.vercel.app/add-queries", queryInfo)
                .then(response => console.log(response))
            toast("Successfully add Query!");
            form.reset()

        } catch (error) {
            console.error("Error submitting query:", error);
            alert("An error occurred. Please try again later.");
        }
    };
    return (
        <div>
            <Helmet>
                <title> Add Queries| RecommendHub </title>
            </Helmet>

            <PageTitle pageTitle="Add Query" ></PageTitle>
            <PageBanner heading='Submit Your Product Query'
                subTitle='Let us help you find the best alternatives and recommendations for your needs.'>
            </PageBanner>


            <div>
                <div className="flex flex-col items-center p-6 shadow-2xl">
                    <h1 className="text-2xl font-bold mb-4"></h1>
                    <p className="text-gray-500 mb-6">

                    </p>
                    <form onSubmit={handleSubmit} className="w-full md:w-2/4 space-y-4 shadow-2xl p-5 rounded">
                        <div className="form-control">
                            <label className="label" htmlFor="productName">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                id="productName"
                                name="productName"


                                placeholder="Enter the product name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="productBrand">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <input
                                type="text"
                                id="productBrand"
                                name="productBrand"

                                placeholder="Enter the brand name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="productImageUrl">
                                <span className="label-text">Product Image URL</span>
                            </label>
                            <input
                                type="url"
                                id="productImageUrl"
                                name="productImageUrl"
                                placeholder="Paste the image URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="queryTitle">
                                <span className="label-text">Query Title</span>
                            </label>
                            <input
                                type="text"
                                id="queryTitle"
                                name="queryTitle"
                                placeholder="E.g., Is there a better product with the same quality?"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="boycottReason">
                                <span className="label-text">Reason for Boycotting</span>
                            </label>
                            <textarea
                                id="boycottReason"
                                name="boycottReason"

                                placeholder="Explain why you want an alternative"
                                className="textarea textarea-bordered w-full"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn bg-[#181718] hover:bg-[#be161e]  text-white  w-full">
                            Submit Query
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default AddQueries;