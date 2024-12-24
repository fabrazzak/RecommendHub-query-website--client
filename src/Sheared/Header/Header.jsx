import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';



import { FaAffiliatetheme } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';
import {AuthContext} from "../../components/authProvider/AuthProvider.jsx";
const Header = () => {
    const { singOut, user,  } = useContext(AuthContext)


    const navigate = useNavigate()

    const logOutHandle = () => {
        singOut()
            .then(() => {
                // Sign-out successful.\
                navigate("/login")
            }).catch((error) => {
            // An error happened.
        });

    }

    const itemList =
        <>

            <li> <NavLink to="/">Home</NavLink>    </li>
            <li> <NavLink to="/queries">Queries</NavLink>  </li>
            {user?
                <>
                    <li><NavLink to="/recommendations-for-me">Recommendations For Me</NavLink></li>
                    <li><NavLink to="/my-queries">My Queries</NavLink></li>
                    <li><NavLink to="/my-recommendations">My recommendations</NavLink></li>
                </>
                :
                ""
            }


        </>


    return (
        <div className=''>
            <div className={`navbar  bg-[#be161e] text-white px-6 `}>
                <div className="navbar-start flex flex-col md:flex-row ">
                <div className="dropdown">
                        <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden `}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box w-72 mt-3 text-[#181718]  p-2 shadow z-10">
                            {itemList}

                        </ul>
                    </div>
                    <a className={`btn btn-ghost text-xl  `}>RecommendHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu menu-horizontal px-1 font-bold gap-2  `}>

                        {itemList}

                    </ul>
                </div>
                <div className="navbar-end  flex gap-6 flex-col md:flex-row">
                    {user ? <li className={`flex `} onClick={logOutHandle}>
                                 <a href="#" data-tooltip-id="my-tooltip"
                                    data-tooltip-content={user.displayName} className='flex gap-4 content-center item-center justify-center ' > 
                                     <img className='w-10 h-10 rounded-full ' src={user?.photoURL} alt="" referrerPolicy="no-referrer" />
                                     <span className={`mt-2 font-bold`}>Logout</span>
                                 </a>
                            </li>

                        :
                        <ul className='flex gap-6 font-bold menu'>
                            <li >
                                <NavLink to='/login'>Log-in</NavLink>
                            </li>
                            
                        </ul>}
                    
                </div>
            </div>
           

        </div>
    );
};

export default Header;