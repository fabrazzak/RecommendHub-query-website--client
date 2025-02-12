import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="  flex flex-col   bg-[#181718] text-white rounded p-10  gap-8">
                <div className="flex flex-col md:flex-row  gap-8 justify-between mb-10">
                    <nav className="grid grid-flow-col gap-4">
                        <h2 className='text-2xl font-bold'>RecommendHub</h2>

                    </nav>
                    <nav className=" flex flex-col gap-6">
                        <h2 className='text-md font-bold '>Menu</h2>

                        <div className='grid grid-flow-col gap-4'>
                            <Link to='/' className="link link-hover">Home</Link>
                            <Link to='queries' className="link link-hover">Queries</Link>
                        </div>
                       
 
 
                    </nav>
                    <nav className=" flex flex-col gap-6">
                        <h2 className='text-md font-bold '>Social Media</h2>
                        <div className="grid grid-flow-col gap-4">
                            <Link to='https://www.facebook.com/Abdurrazzak309' >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </Link>
                            <Link to='https://www.linkedin.com/feed/' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     className="fill-current">
                                    <path
                                        d="M19 0h-14c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-20c0-1.104-.896-2-2-2zm-9.5 20h-2v-10h2v10zm-1-11.8c-.742 0-1.2-.523-1.2-1.2s.458-1.2 1.2-1.2c.741 0 1.2.523 1.2 1.2s-.459 1.2-1.2 1.2zm7.5 11.8h-2v-5.5c0-1.351-.747-2.5-2.222-2.5-1.293 0-1.778.87-1.778 1.869v6.631h-2v-10h2v1.405c1.183-1.821 4.222-2.681 5.556-.395v8.167h-2z"></path>
                                </svg>

                            </Link>
                            <Link to='https://www.youtube.com/'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </Link>
                        </div>
                    </nav>
                </div>
                <aside>
                    <p className='text-center'>Copyright © {new Date().getFullYear()} - All right reserved by Queries Ltd</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;