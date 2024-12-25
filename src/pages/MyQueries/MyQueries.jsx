import React, {useContext} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import  profileBg from  "../../assets/profile-bg.jpg"
import './MyQueries.css'
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {AuthContext} from "../../components/authProvider/AuthProvider.jsx";
import axios from "axios";
import Loading from "../../components/Loading/Loading.jsx";
import Swal from 'sweetalert2'
import PageBanner from "../../components/PageBanner/PageBanner.jsx";






// or via CommonJS


const MyQueries = () => {
    const [queries, setQueries] = useState([]);  
    const { user,loading } = useContext(AuthContext)
    useEffect(() => {
       
            try {
                axios.get( `http://localhost:5000/queries?userEmail=${user?.email}`, {withCredentials: true}   )
                    .then(response => {
                        setQueries(response?.data?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
                        
                    })

              
           
            } catch (error) {
                console.error("Error fetching queries:", error);
              
            }
        

      
    }, [queries]);
      
               
          

    const handleDelete = async (id) => {


        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ms-2",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                await axios.delete(`http://localhost:5000/queries/${id}`);
                  const exist = await [...queries].filter(e => e.id !== id);
                  setQueries([...exist]);
                   
                } catch (error) {
                    console.error("Error deleting query:", error);
                    alert("Failed to delete query. Please try again.");
                }
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
               
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
        
        
    }

    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <Helmet>
                <title> My Queries| RecommendHub </title>
            </Helmet>
            <PageTitle pageTitle="My Queries"></PageTitle>
          <PageBanner heading='"Have a Product Query? Let’s Find the Best
                    Alternatives!"' subTitle='"Share your concerns, get tailored recommendations, and
                    explore smarter choices."' btn='"Add
                        Your Query Now"'></PageBanner>

            <div className="p-6">
                
                {queries?.length === 0 ? (
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500 mb-4">No queries found.</p>
                        <Link to="/add-queries" className="btn bg-[#181718] hover:bg-[#be161e] text-white">
                            Add Query
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {queries?.map((query) => (
                            <div key={query.id} className="card shadow-md border">
                                <figure >
                                    <img
                                        src={query.productImageUrl}
                                        alt={query.productName}
                                        className="w-full  object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{query.productName}</h2>
                                    <p className="text-sm text-gray-500">Brand: {query.productBrand}</p>
                                    <p className="text-sm">{query.queryTitle}</p>
                                    <div className="flex flex-wrap gap-6 justify-between mt-4 ">
                                        <Link to={`/view-details-my-queries/${query?._id}`} className="btn w-full  bg-[#181718] hover:bg-[#be161e] text-white ">
                                            View Details
                                        </Link>
                                        <Link to={`/update-my-query/${query?._id}`} className="btn px-8  bg-[#181718] hover:bg-[#be161e] text-white ">
                                            Update
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(query?._id)}
                                            className="btn  px-8  bg-[#be161e] hover:bg-[#be161e] text-white ">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default MyQueries;