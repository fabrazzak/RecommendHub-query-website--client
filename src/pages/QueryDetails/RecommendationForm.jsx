import React from 'react';

const RecommendationForm = ({handleSubmit}) => {
    return (
        <div>
            <div className="card bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Add a Recommendation</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Recommendation Title"
                        className="input input-bordered w-full"
                        name="recommendationTitle"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Recommended Product Name"
                        name="recommendationProductName"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="url"
                        placeholder="Recommended Product Image URL"
                        name="recommendationProductImage"
                        className="input input-bordered w-full"
                        required
                    />
                    <textarea
                        placeholder="Reason for Recommendation"
                        name="recommenderText"
                        className="textarea textarea-bordered w-full md:col-span-2"
                        required
                    />
                    <button type="submit"
                            className="btn bg-[#181718] text-white font-bold hover:bg-[#be161e]  md:col-span-2">
                        Add Recommendation
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RecommendationForm;