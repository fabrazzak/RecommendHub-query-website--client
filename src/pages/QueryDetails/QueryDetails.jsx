import React, {useContext, useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import PageBanner from "../../components/PageBanner/PageBanner.jsx";
import {useLoaderData} from "react-router-dom";
import {AuthContext} from "../../components/authProvider/AuthProvider.jsx";
import axios from "axios";
import Recommendation from "./Recommendation.jsx";
import RecommendationCard from "./RecommendationCard.jsx";
import RecommendationForm from "./RecommendationForm.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import Swal from "sweetalert2";

const QueryDetails = () => {
    const { user ,loading } = useContext(AuthContext)
    const queryDetails = useLoaderData()
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        if (queryDetails?._id) {
            axios.get(`http://localhost:5000/add-recommend/${queryDetails._id}`)
                .then(response => {
                    setRecommendations(response.data);
                    console.log('Response Data:', response.data); // Logs the data directly
                })
                .catch(error => {
                    console.error('Error fetching recommendations:', error);
                });
        }
    }, [recommendations]);
    
    console.log(recommendations);
 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form=e.target;
        const recommendationTitle=form.recommendationTitle.value;
        const recommendationProductName=form.recommendationProductName.value;
        const recommendationProductImage=form.recommendationProductImage.value;
        const recommenderText=form.recommenderText.value;
        
        const addRecommendationInfo={
            recommendationTitle,
            recommenderText,
            recommenderImage:user?.photoURL,
            recommendationProductImage,
            recommendationProductName,
            queryId: queryDetails?._id,
            queryTitle: queryDetails?.queryTitle,
            productName: queryDetails?.productName,
            userEmail: queryDetails?.userEmail,
            userName: queryDetails?.userName,

            recommenderEmail: user?.email, // Replace with actual user email
            recommenderName: user?.displayName, // Replace with actual user name
            timestamp: new Date()
        }            

           await axios.post('http://localhost:5000/add-recommend', {addRecommendationInfo})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
       
        Swal.fire({
                title: "Successfully Added",
                icon: "success",
                draggable: true
            });
           form.reset();
          
       
    };


    if (loading) {
        return <Loading />;
    }

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
                   
                       <RecommendationCard queryDetails={queryDetails}></RecommendationCard>
                     
                       <RecommendationForm handleSubmit={handleSubmit}></RecommendationForm>
                      
                        <Recommendation recommendations={recommendations} ></Recommendation>
                    </div>
                ) : 
                    <Loading />
                
                }
            </div>

        </div>
    );
};

export default QueryDetails;