import React, {useContext} from 'react';
import {AuthContext} from "../../components/authProvider/AuthProvider.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import {Link} from "react-router-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/home.json";



const TopRatedProduct = ({bestRecommendations}) => {
    const { user ,loading } = useContext(AuthContext)

    if(loading){
        return <Loading/>
    }
    return (
        <div className="mt-16 space-y-16">
            {/* Section 1: Featured Products */}
            <section
                className="relative bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 text-white py-16 px-8 rounded-lg shadow-lg">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Top Recommendation Products</h2>
                    <p className="text-lg mb-10">
                        Hand-picked recommendations just for you. Enhance your experience with the best in class.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[...bestRecommendations].map((item) => (
                            <div
                                key={item}
                                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
                            >
                                <img
                                    src={item?.productImageUrl}
                                    alt={`Product ${item.productName}`}
                                    className="w-full rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2"> {item?.productName}</h3>
                                <p className="text-sm text-gray-600">
                                    {bestRecommendations.productBrand}
                                </p>
                                <div className="text-lg font-medium mb-4">
                                    Recommendations:{" "}
                                    <span className="text-blue-600">{item?.recommendationCount}</span>
                                </div>
                                <Link to={`/queries/${item?._id}`}>
                                    <button
                                        className=" font-bold text-white px-4 py-2 rounded hover:bg-[#be161e] bg-[#181718] w-full">
                                        Recommend
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Join the Movement */}
            <section className="relative bg-gray-900 text-white py-16 px-8 rounded-lg shadow-lg">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Join the Movement</h2>
                        <p className="text-lg mb-6">
                            Become a part of a vibrant community that values your voice. Connect, share, and grow with
                            us.
                        </p>
                      
                        <Link to='/add-queries'>
                            <button className = " inline-block px-6 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition " >
                             Add Queries
                            </button>
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-lg">
                            <Lottie className='h-72' animationData={groovyWalkAnimation} loop={true} />;
                        </div>
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-transparent opacity-50 rounded-md"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopRatedProduct;