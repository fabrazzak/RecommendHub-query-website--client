import React from 'react';

const RecommendationCard = ({queryDetails}) => {
    return (
        <div>
            <div className=" flex md:flex-row  flex-col-reverse  bg-white shadow-lg rounded-lg p-6 gap-16">
                <div className="flex items-center    space-x-4 ">


                    <div className="flex items-center flex-col">
                        <img
                            src={queryDetails?.userImage}
                            alt="User"
                            className="w-16 h-16 rounded-full border-2 border-primary"
                        />
                        <h2 className="text-2xl font-bold text-gray-700">{queryDetails?.userName}</h2>
                        <p className="text-gray-500">{queryDetails?.userEmail}</p>
                    </div>

                </div>
                <div className="flex justify-start items-start gap-4 flex-col text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{queryDetails?.queryTitle}</h3>
                    <p className="text-gray-600"><strong>Product Name:</strong> {queryDetails?.productName}
                    </p>
                    <p className="text-gray-600"><strong>Product
                        Brand:</strong> {queryDetails?.productBrand}
                    </p>
                    <p className="text-gray-600"><strong>Boycotting
                        Reason:</strong> {queryDetails?.boycottReason}
                    </p>
                    <p className="text-gray-600 text-sm mt-4">
                        <strong>Created
                            on:</strong> {new Date(queryDetails?.createdAt).toLocaleString().slice(0, 10)}
                    </p>
                    <p className="text-gray-600 text-sm">
                        <strong>Recommendations:</strong> {queryDetails?.recommendationCount}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default RecommendationCard;