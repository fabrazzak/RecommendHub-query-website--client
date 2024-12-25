
// import Swiper styles
import 'swiper/css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperSliderCustom.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {Link} from "react-router-dom";


const SwiperSliderCustom = () => {
    return (
      
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className='swiper-slide1 swiper-slider-common'>
                        <div
                            className="relative flex flex-col items-center justify-center text-white text-center">
                            <div className="z-10">
                                <h1 className="text-3xl font-bold mb-2">Welcome to Our Platform</h1>
                                <p className="text-lg mb-4">Discover products that fit your needs perfectly.</p>
                                <Link to="/my-queries">
                                    <button className="btn bg-[#be161e] hover:bg-[#181718] text-white border-0">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='swiper-slide2 swiper-slider-common'>
                        <div className="relative flex flex-col items-center justify-center  text-white text-center">
                            <div className="z-10">
                                <h1 className="text-3xl font-bold mb-2">Add Your Queries</h1>
                                <p className="text-lg mb-4">Share your concerns and get recommendations easily.</p>
                                <Link to="/add-queries">
                                    <button className="btn bg-[#be161e] hover:bg-[#181718] text-white border-0">Ask Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='swiper-slide3 swiper-slider-common'>
                        <div
                            className="relative flex flex-col items-center justify-center  text-white text-center">
                            <div className="z-10">
                                <h1 className="text-3xl font-bold mb-2">View Recommendations</h1>
                                <p className="text-lg mb-4">Explore alternative products from other users.</p>
                                <Link to="/queries">
                                    <button className="btn bg-[#be161e] hover:bg-[#181718] text-white border-0">Explore</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='swiper-slide4 swiper-slider-common'>
                        <div
                            className="relative flex flex-col items-center justify-center  text-white text-center">
                            <div className="z-10">
                                <h1 className="text-3xl font-bold mb-2">Add Your Thoughts</h1>
                                <p className="text-lg mb-4">Help others by sharing your recommendations.</p>
                                <Link to="/add-queries">
                                    <button className="btn bg-[#be161e] hover:bg-[#181718] text-white border-0">Contribute</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='swiper-slide5 swiper-slider-common'>
                        <div
                            className="relative flex flex-col items-center justify-center content-center text-white text-center">
                            <div className="z-10">
                                <h1 className="text-3xl font-bold mb-2">Stay Connected</h1>
                                <p className="text-lg mb-4">Join a community of thoughtful product reviewers.</p>
                                <Link to="/my-queries">
                                    <button className="btn bg-[#be161e] hover:bg-[#181718] text-white border-0 ">Join Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

    );
};

export default SwiperSliderCustom;