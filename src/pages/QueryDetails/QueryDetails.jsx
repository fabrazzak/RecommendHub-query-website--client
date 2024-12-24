import React, {useState} from 'react';
import {Helmet} from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import PageBanner from "../../components/PageBanner/PageBanner.jsx";
import {useLoaderData} from "react-router-dom";

const QueryDetails = () => {
    const queryDetails = useLoaderData()
    const [recommendations, setRecommendations] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        productName: '',
        productImage: '',
        reason: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/recommendations', {
                ...formData,
                queryId: queryDetails._id,
                queryTitle: queryDetails.queryTitle,
                productName: queryDetails.productName,
                userEmail: queryDetails.userEmail,
                userName: queryDetails.userName,
                recommenderEmail: "current_user_email@example.com", // Replace with actual user email
                recommenderName: "Current User Name", // Replace with actual user name
                timestamp: new Date()
            });

            setRecommendations([...recommendations, data]);
            setFormData({ title: '', productName: '', productImage: '', reason: '' });
            await axios.patch(`http://localhost:5000/queries/${queryId}/incrementRecommendationCount`);
        } catch (error) {
            console.error('Error adding recommendation:', error);
        }
    };
    return (
        <div>

            <Helmet>
                <title>Query Details | RecommendHub</title>
            </Helmet>

            <PageTitle pageTitle='Query Details'></PageTitle>
            <PageBanner heading='Query Details and Recommendations'
                        subTitle='Explore the query insights, share your recommendations, and help improve the product experience.'></PageBanner>


            <div className="p-6 bg-gray-100 min-h-screen">
                {queryDetails ? (
                    <div className="container mx-auto space-y-8">
                        {/* Query Card */}
                        <div className="card bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={queryDetails.userImage}
                                    alt="User"
                                    className="w-16 h-16 rounded-full border-2 border-primary"
                                />
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-700">{queryDetails.userName}</h2>
                                    <p className="text-gray-500">{queryDetails.userEmail}</p>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{queryDetails.queryTitle}</h3>
                            <p className="text-gray-600"><strong>Product Name:</strong> {queryDetails.productName}</p>
                            <p className="text-gray-600"><strong>Product Brand:</strong> {queryDetails.productBrand}</p>
                            <p className="text-gray-600"><strong>Boycotting Reason:</strong> {queryDetails.reason}</p>
                            <p className="text-gray-400 text-sm mt-4">
                                <strong>Created on:</strong> {new Date(queryDetails.timestamp).toLocaleString()}
                            </p>
                            <p className="text-gray-400 text-sm">
                                <strong>Recommendations:</strong> {queryDetails.recommendationCount}
                            </p>
                        </div>

                        {/* Add Recommendation */}
                        <div className="card bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add a Recommendation</h2>
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Recommendation Title"
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    className="input input-bordered w-full"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Recommended Product Name"
                                    value={formData.productName}
                                    onChange={(e) => setFormData({...formData, productName: e.target.value})}
                                    className="input input-bordered w-full"
                                    required
                                />
                                <input
                                    type="url"
                                    placeholder="Recommended Product Image URL"
                                    value={formData.productImage}
                                    onChange={(e) => setFormData({...formData, productImage: e.target.value})}
                                    className="input input-bordered w-full"
                                    required
                                />
                                <textarea
                                    placeholder="Reason for Recommendation"
                                    value={formData.reason}
                                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                                    className="textarea textarea-bordered w-full md:col-span-2"
                                    required
                                />
                                <button type="submit" className="btn btn-primary md:col-span-2">
                                    Add Recommendation
                                </button>
                            </form>
                        </div>

                        {/* Recommendations */}
                        <div className="card bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommendations</h2>
                            {recommendations.length > 0 ? (
                                <div className="space-y-4">
                                    {recommendations.map((rec) => (
                                        <div key={rec._id}
                                             className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                            <img
                                                src={rec.productImage}
                                                alt={rec.productName}
                                                className="w-12 h-12 rounded-full border"
                                            />
                                            <div>
                                                <h3 className="font-medium text-gray-800">{rec.title}</h3>
                                                <p className="text-sm text-gray-600">
                                                    <strong>Recommended Product:</strong> {rec.productName}
                                                </p>
                                                <p className="text-sm text-gray-600">{rec.reason}</p>
                                                <p className="text-xs text-gray-400 mt-2">
                                                    By {rec.recommenderName} on {new Date(rec.timestamp).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">No recommendations available yet.</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="text-center">
                            <div className="loader loader-lg text-primary mb-4"></div>
                            <p className="text-gray-500">Loading Query Details...</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default QueryDetails;