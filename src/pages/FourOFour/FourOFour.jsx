import React from 'react';

import { Helmet } from 'react-helmet-async';

import groovyWalkAnimation from "../../assets/fourOfour.json";

import Lottie from 'lottie-react';




const FourOFour = () => {
    return (
        <div className='md:h-[70vh] flex flex-col justify-center items-center'>
            <Helmet>
                <title> Page Not Found | Canada Career Counselling</title>
            </Helmet>
            <div className="card bg-base-100     mx-auto">
                <Lottie className='h-72' animationData={groovyWalkAnimation} loop={true} />;

                <h2 className='text-5xl font-bold text-center'>Page not found</h2>




            </div>


        </div>
    );
};

export default FourOFour;