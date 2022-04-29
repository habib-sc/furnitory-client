import React from 'react';
import { Facebook, Linkedin, Twitter, Youtube } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                    {/* Column 1 */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h1 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-3">Furnitory</h1>
                        <p>Inventory management can makes your inventory calculation easier.</p>    
                    </div>

                    {/* Column 2  */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-center">
                        
                        <nav className="list-none mb-10">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PAGES</h2>
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">Home</Link>
                            </li>
                            <li>
                                <Link to='/blogs' className="text-gray-600 hover:text-gray-800">Blogs</Link>
                            </li>
                            <li>
                                <Link to='/inventory' className="text-gray-600 hover:text-gray-800">Inventory</Link>
                            </li>
                            <li>
                                <Link to='/login' className="text-gray-600 hover:text-gray-800">Login</Link>
                            </li>
                            <li>
                                <Link to='/register' className="text-gray-600 hover:text-gray-800">Register</Link>
                            </li>
                        </nav>
                    </div>

                    {/* Column 3  */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ADDRESS</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <p className="text-gray-600 hover:text-gray-800">Location: #House 454, #Rd 8, #Block C, Uttara, Dhaka</p>
                            </li>
                            <li>
                                <p className="text-gray-600 hover:text-gray-800">Email: habib97.cs@gmail.com</p>
                            </li>
                            <li>
                                <p className="text-gray-600 hover:text-gray-800">Phone: +8801961584280</p>
                            </li>
                        </nav>
                    </div>

                    {/* Column 4  */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FOLLOW US</h2>
                        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                            <a href='#' className="text-gray-500">
                                <Facebook className='text-3xl p-1 bg-gray-300 rounded-full'></Facebook>
                            </a>
                            <a href='#' className="ml-3 text-gray-500">
                                <Twitter className='text-3xl p-1 bg-gray-300 rounded-full'></Twitter>
                            </a>
                            <a href='#' className="ml-3 text-gray-500">
                                <Linkedin className='text-3xl p-1 bg-gray-300 rounded-full'></Linkedin>
                            </a>
                            <a href='#' className="ml-3 text-gray-500">
                                <Youtube className='text-3xl p-1 bg-gray-300 rounded-full'></Youtube>
                            </a>
                        </span>
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm my-3">SUBSCRIBE</h2>
                        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                                <input type="text" placeholder='Your Email' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">SUBMIT</button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Furnitory —
                    <a href="#" className="text-gray-600 ml-1" target="_blank">@Habib</a>
                </p>
                    <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Make Inventory Easier</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;