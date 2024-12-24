import React from 'react';
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import  profileBg from  "../../assets/profile-bg.jpg"
import './MyQueries.css'
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";

const MyQueries = () => {
    return (
        <div>
            <Helmet>
                <title> My Queries| RecommendHub </title>
            </Helmet>
            <PageTitle pageTitle="My Queries" ></PageTitle>
            <div className='my-query-banner flex-col gap-3'>

                <div className='my-query-banner-overlay '></div>
                <h1 className='text-3xl text-white z-10 font-bold'>"Have a Product Query? Let’s Find the Best Alternatives!"</h1>
                <p className=' text-[#d7d7d7] z-10 font-bold'>"Share your concerns, get tailored recommendations, and explore smarter choices."</p>

                <Link className='z-10' to='/add-queries'>
                    <button
                        className='z-10 btn border-none px-10 font-bold text-white bg-[#181718] hover:bg-[#be161e]'>"Add
                        Your Query Now"
                    </button>
                </Link>


            </div>

        </div>
    );
};

export default MyQueries;