import React, { useContext, useEffect, useState } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner.jsx";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "../../components/Loading/Loading.jsx";
import { AuthContext } from "../../components/authProvider/AuthProvider.jsx";
import QueryCard from "./QueryCard.jsx";
import axios from "axios";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/not-found.json";
import { IoMdGrid } from "react-icons/io";
import { BsFillGrid3X3GapFill, BsGridFill } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";

const Queries = () => {
    const { loading } = useContext(AuthContext)
    const [queriesData, setQueriesData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [grid, setGrid] = useState(true);


    useEffect(() => {
        axios
            .get('https://queries-server.vercel.app/all-queries')
            .then((res) => setQueriesData(res.data))
            .catch((err) => console.error('Error fetching queries:', err));
    }, []);

    const queries = [...queriesData].sort((a, b) => b.createdAt - a.createdAt);


    // Handle Search
    const handleSearch = async () => {
        try {
            const res = await axios.get(`https://queries-server.vercel.app/search`, {
                params: { search: searchTerm },
            });
            if (loading) {
                return <Loading />;
            }
            setQueriesData(res.data);


        } catch (err) {
            console.log(err)
        }
    };


    const changeLayout = (value) => {
        setGrid(value)
    }

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

                <div className="container mx-auto max-w-6xl  ">
                    <div className="flex ">
                        <div className="flex justify-center w-full my-8 join">
                            <input
                                type="text"
                                className="border px-4 py-2 w-1/2 rounded-l join-item"
                                placeholder="Search by Product Name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-[#181718] hover:bg-[#be161e] text-white px-4 py-2 rounded-r join-item rounded-r-full "
                            >
                                Search
                            </button>
                        </div>
                        <div className='flex justify-end my-8  gap-4 join'>

                            <BsFillGrid3X3GapFill onClick={() => changeLayout(true)} className={`text-3xl cursor-pointer ${grid ? "  text-[#be161e]" : " "}  `} />
                            <HiViewGrid onClick={() => changeLayout(false)} className={`text-3xl cursor-pointer  ${grid ? "  " : "text-[#be161e] "}`} />
                        </div>
                    </div>

                    {
                        queries?.length === 0 ? (
                            <div className="flex flex-col items-center shadow">
                                <Lottie className='h-72' animationData={groovyWalkAnimation} loop={true} />;

                            </div>
                        ) :

                            <div className={`grid grid-cols-1 md:grid-cols-2  gap-6 pb-8 ${grid ? " lg:grid-cols-3" : " lg:grid-cols-2"}`}>
                                {[...queries].map((query) => <QueryCard query={query} key={query._id}></QueryCard>)}
                            </div>

                    }
                </div>
            </div>

        </div>
    );
};

export default Queries;