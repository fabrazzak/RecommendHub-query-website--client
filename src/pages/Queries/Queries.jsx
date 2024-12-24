import React from 'react';
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import {Helmet} from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner.jsx";
import {Link, useLoaderData} from "react-router-dom";

const Queries = () => {
    const queriesData=useLoaderData()
    const queries = [...queriesData].sort((a, b) => b.createdAt - a.createdAt);    
    return (
        <div>
            <Helmet>
                <title>Queries | RecommendHub</title>
            </Helmet>

            <PageTitle pageTitle={`Queries.${queries?.length}`}></PageTitle>
            <PageBanner heading='Explore All Queries' subTitle='Discover insights, share recommendations, and dive into detailed discussions about various topics.' ></PageBanner>

            <div>
                <div className="container mx-auto p-4">
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...queries].map((query) => (
                            <div
                                key={query.id}
                                className="card bg-white border rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
                            >
                                
                                <img
                                    src={query?.productImageUrl}
                                    alt={query.title}
                                    className="w-full  object-cover"
                                />
                                {/* Card Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h2 className="text-xl font-semibold mb-3">{query.title}</h2>



                                    {/* Metadata */}
                                    <div className="text-sm text-gray-500 mb-4">
                                        <p>Created At: {new Date(query?.createdAt).toLocaleDateString()}</p>
                                        <p>Author: {query.userName || "Anonymous"}</p>
                                    </div>

                                    {/* Recommendation Count */}
                                    <div className="text-lg font-medium mb-4">
                                        Recommendations:{" "}
                                        <span className="text-blue-600">{query.recommendationCount}</span>
                                    </div>

                                    {/* Tags */}
                                    {query.tags?.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {query.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                                                >
                                            {tag}
                                        </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Recommend Button */}
                                    <Link to={query?._id}>
                                        <button
                                            className=" font-bold text-white px-4 py-2 rounded hover:bg-[#be161e] bg-[#181718] w-full">
                                            Recommend
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Queries;