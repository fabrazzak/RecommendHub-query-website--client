import React from 'react';
import {Link} from "react-router-dom";

const QueryCard = ({query}) => {
    return (
        <div 
             className="card bg-white border rounded-lg shadow-lg hover:shadow-xl overflow-hidden transition-transform hover:scale-105"
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
                <Link to={`/queries/${query?._id}`}>
                    <button
                        className=" font-bold text-white px-4 py-2 rounded hover:bg-[#be161e] bg-[#181718] w-full">
                        Recommend
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default QueryCard;