import React, { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthContext} from "../../components/authProvider/AuthProvider.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";


const Login = () => {
    const { loginUser, loginWithGoogle } = useContext(AuthContext)
    const location = useLocation();

    const [eyes, setEyes] = useState(true);
    const navigate = useNavigate();
    const handleOnSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                location?.state ? navigate(location?.state) : navigate("/");

            })
            .catch((error) => {
                toast(<p className='alert alert-error'>Email or Password invalid</p>)
            });




    }
    const myFunction = () => {
        const x = document.getElementById("pass");
        if (x.type === "password") {

            setEyes(true)

            return x.type = "text";

        } else {
            x.type = "password";
            setEyes(false)
        }
    }
    const loginWithGoogleHandle = () => {

        loginWithGoogle()
            .then((userCredential) => {
                const user = userCredential.user;
                location?.state ? navigate(location?.state) : navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;


            });

    }
    return (
        <div>

            <Helmet>
                <title> Login | RecommendHub</title>
            </Helmet>
            <PageTitle pageTitle="Login Page"></PageTitle>
            <div className="hero ">
                <div className="hero-content flex-col ">

                   
                    <div className="card bg-base-100 md:w-96  shrink-0 shadow-2xl">
                        <form onSubmit={handleOnSubmit} className="card-body">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex'><input id='pass' type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Min 1 number & 1
                                 upper & lowercase letter, and min 6 character" name='password' placeholder="password" className="input w-full input-bordered" required />
                                    <span className='ms-[-30px] mt-4 cursor-pointer' onClick={myFunction}> {eyes ? <IoEyeSharp /> : <FaEyeSlash />} </span></div>
                                <label className="label">
                                    <Link to='/register' href="#" className="label-text-alt link link-hover text-[#181718] font-bold ">Don't have account,Register Here</Link>
                                   
                                </label>
                            </div>
                            <div className="form-control mt-6 ">
                                <button className="btn btn-primary bg-[#181718] text-white font-bold hover:bg-[#be161e]  border-none">Login</button>
                            </div>
                        </form>
                        <div className="form-control pt-0 p-6 gap-6 ">
                            <p className='text-center font-bold '>Login with </p>
                            <button onClick={loginWithGoogleHandle} className="btn btn-outline  font-bold hover:bg-[#be161e]  text-4xl"><FcGoogle /><span className='text-2xl'>oogle</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Login;