import React, {useContext, useEffect, useState} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import {Helmet} from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner.jsx";
import {Link, useLoaderData} from "react-router-dom";
import Loading from "../../components/Loading/Loading.jsx";
import {AuthContext} from "../../components/authProvider/AuthProvider.jsx";
import QueryCard from "./QueryCard.jsx";
import axios from "axios";

const Queries = () => {
    const { loading } = useContext(AuthContext)
    const [queriesData,setQueriesData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/all-queries')
            .then((res) => setQueriesData(res.data))
            .catch((err) => console.error('Error fetching queries:', err));
    }, []);

    const queries = [...queriesData].sort((a, b) => b.createdAt - a.createdAt);
    if (loading) {
        return <Loading />;
    }
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
                        {[...queries].map((query) =><QueryCard query={query} key={query._id}></QueryCard>)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Queries;