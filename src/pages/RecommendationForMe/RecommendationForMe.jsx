import React, {useContext, useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import PageBanner from "../../components/PageBanner/PageBanner.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import {AuthContext} from "../../components/authProvider/AuthProvider.jsx";
import axios from "axios";

const RecommendationForMe = () => {
    const {user,setLoading, loading} = useContext(AuthContext)
    const [recommendations, setRecommendations] = useState([]);
    const userEmail = "user@example.com"; // Replace with authenticated user's email

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/recommendations-for-me?userEmail=${user?.email}`);
                setRecommendations(response.data);
            } catch (err) {
                
            } 
        };

        fetchRecommendations();
    }, [recommendations]);

    if (loading) {
        return <Loading />;
    }
    return (
        <div>

            <Helmet>
                <title> Recommendation For Me | RecommendHub</title>
            </Helmet>

            <PageTitle pageTitle={`My Recommendations. `}/>
            <PageBanner heading='My Impactful Suggestions'
                        subTitle='Review and Manage All My Product Suggestions'></PageBanner>

            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Recommendations For Me</h1>
                {recommendations.length === 0 ? (
                    <div className="text-center">No recommendations found for your queries.</div>
                ) : (
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                        <tr>
                            <th className="border px-4 py-2">Query Title</th>
                            <th className="border px-4 py-2">Recommended Product</th>
                            <th className="border px-4 py-2">Recommendation Reason</th>
                            <th className="border px-4 py-2">Recommender</th>
                            <th className="border px-4 py-2">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recommendations.map((recommendation) => (
                            <tr key={recommendation._id}>
                                <td className="border px-4 py-2">{recommendation.queryTitle}</td>
                                <td className="border px-4 py-2">{recommendation.recommendedProductName}</td>
                                <td className="border px-4 py-2">{recommendation.recommendationReason}</td>
                                <td className="border px-4 py-2">
                                    {recommendation.recommenderName} ({recommendation.recommenderEmail})
                                </td>
                                <td className="border px-4 py-2">
                                    {new Date(recommendation.timestamp).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>

        </div>
    );
};

export default RecommendationForMe;