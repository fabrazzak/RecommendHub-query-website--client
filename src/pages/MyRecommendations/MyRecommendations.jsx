import React, {useContext, useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import PageBanner from "../../components/PageBanner/PageBanner.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import {AuthContext} from "../../components/authProvider/AuthProvider.jsx";
import axios from "axios";
import Swal from "sweetalert2";

const MyRecommendations = () => {
    const {user,setLoading, loading} = useContext(AuthContext)

 // Current user details from auth
    const [recommendations, setRecommendations] = useState([]);
  

    // Fetch recommendations made by the current user
    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/recommendations?recommenderEmail=${user?.email}`
                );
                setRecommendations(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching recommendations:", error);
                setLoading(false);
            }
        };
        fetchRecommendations();
    }, [recommendations]);

    // Delete recommendation
    const handleDelete = async (id, queryId) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ms-2",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "This recommendation will be permanently deleted!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        // Delete recommendation
                        await axios.delete(`http://localhost:5000/recommendations?id=${id}&productId=${queryId}`);

                        // Update UI
                        setRecommendations((prev) =>
                            prev.filter((recommendation) => recommendation._id !== id)
                        );

                        swalWithBootstrapButtons.fire(
                            "Deleted!",
                            "Your recommendation has been deleted.",
                            "success"
                        );
                    } catch (error) {
                        console.error("Error deleting recommendation:", error);
                        Swal.fire(
                            "Error!",
                            "Failed to delete recommendation. Please try again.",
                            "error"
                        );
                    }
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Your recommendation is safe :)",
                        "info"
                    );
                }
            });
    };

    if (loading) {
        return <Loading />;
    }
    return (
        <div>

            <Helmet>
                <title>My Recommendation | RecommendHub</title>
            </Helmet>

            <PageTitle pageTitle={`My Recommendations. ${recommendations.length}`}/>
            <PageBanner heading='My Impactful Suggestions'
                        subTitle='Review and Manage All My Product Suggestions'></PageBanner>


            <div className="container mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
               
                {recommendations.length === 0 ? (
                    <div className="text-center">
                        <p className="text-gray-600">No recommendations found.</p>
                    </div>
                ) : (
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Query Title</th>
                            <th className="border px-4 py-2">Recommended Product</th>
                            <th className="border px-4 py-2">Reason</th>
                            <th className="border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recommendations.map((rec) => (
                            <tr key={rec._id} className="hover:bg-gray-50">
                                <td className="border px-4 py-2">{rec.queryTitle}</td>
                                <td className="border px-4 py-2">{rec. recommendationProductName}</td>
                                <td className="border px-4 py-2">{rec.recommenderText}</td>
                                <td className="border px-4 py-2">
                                    {new Date(rec.                                        timestamp).toLocaleString()}
                                </td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                                        onClick={() => handleDelete(rec._id, rec.queryId)}
                                    >
                                        Delete
                                    </button>
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

export default MyRecommendations;