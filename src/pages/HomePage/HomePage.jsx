import React, { useEffect, useState } from 'react';
import SwiperSliderCustom from "./SwiperSliderCustom.jsx";
import RecommendationCard from "../QueryDetails/RecommendationCard.jsx";
import Recommendation from "../QueryDetails/Recommendation.jsx";
import { useLoaderData } from "react-router-dom";
import QueryCard from "../Queries/QueryCard.jsx";
import PageBanner from "../../components/PageBanner/PageBanner.jsx";
import TopRatedProduct from "./TopRatedProduct.jsx";
import axios from "axios";



const HomePage = () => {

    const [queries, setQueries] = useState([]);
    const [bestRecommendations, setBestRecommendations] = useState([]);

    useEffect(() => {
        axios.get('https://queries-server.vercel.app/all-queries?limit=6')
            .then((res) => setQueries(res.data))

        axios.get("https://queries-server.vercel.app/all-queries/")
            .then(response => {
                const sortedData = [...response.data].sort((a, b) => b.recommendationCount - a.recommendationCount).slice(0, 3);
                setBestRecommendations(sortedData);
            })


    }, []);
    return (
        <div>


            <SwiperSliderCustom></SwiperSliderCustom>
            <hr />
            <PageBanner
                heading='Recent Queries: Stay Updated'
                subTitle='Explore the latest discussions and insights shared by our community. Discover trending topics and join the conversation!'
            >

            </PageBanner>


            <div className=" mx-auto max-w-6xl shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {queries?.map((query) => <QueryCard query={query} key={query._id} />)}
                </div>
            </div>

            <TopRatedProduct bestRecommendations={bestRecommendations}  ></TopRatedProduct>


        </div>
    );
};

export default HomePage;