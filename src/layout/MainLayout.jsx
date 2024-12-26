import React from 'react';
import Header from "../sheared/Header/Header.jsx";
import Footer from "../sheared/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className='w-full  '>
           <Header></Header>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;