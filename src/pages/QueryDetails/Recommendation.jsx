import React, {useContext} from 'react';
import {AuthContext} from "../../components/authProvider/AuthProvider.jsx";

const Recommendation = ({ recommendations}) => {
    const { user ,loading } = useContext(AuthContext)
    return (
        <div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Recommendations
                </h2>

                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-blue-500"></div>
                    </div>
                ) : recommendations.length === 0 ? (
                    <p className="text-gray-600 italic text-center">
                        No recommendations found. Be the first to recommend!
                    </p>
                ) : (
                    <ul className="space-y-6">
                        {recommendations.map((rec) => (
                            <li
                                key={rec._id}
                                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                            >
                                <div className="flex flex-col  gap-8">
                                    <div className="flex items-center justify-between ">
                                        <div className='flex items-center justify-between'>
                                            <img
                                                src={rec.recommenderImage || "/default-avatar.png"}
                                                alt={rec.recommenderName}
                                                className="h-10 w-10 rounded-full mr-3 border border-gray-300"
                                            />
                                            <h3 className="text-sm font-semibold text-gray-800">
                                                {rec.recommenderName}
                                            </h3>
                                        </div>
                                        <span className="text-xs text-gray-500">
                                                               {new Date(rec.timestamp).toLocaleString()}
                                                        </span>
                                    </div>

                                    <div className="grid grid-cols-4   ">

                                        <div className="col-span-3 gap-4 text-start ">
                                            <p className="text-gray-700 mt-1">
                                                <strong>Title:</strong> {rec.recommendationTitle}
                                            </p>
                                            <p className="text-gray-600 mt-1">
                                                <strong>Recommended Product:</strong>{" "}
                                                {rec?.recommendationProductName}
                                            </p>
                                            <p className="text-gray-600 mt-1">
                                                <strong>Reason:</strong> {rec?.recommenderText}
                                            </p>
                                        </div>
                                        <div className="mt-3 col-span-1 flex justify-end ">

                                            <img
                                                src={rec?.recommendationProductImage}
                                                alt={rec?.recommendedProductName}
                                                className="  rounded-lg w-1/2   border-gray-200"
                                            />

                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
};

export default Recommendation;