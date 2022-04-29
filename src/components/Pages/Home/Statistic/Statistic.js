import React from 'react';
import { ArrowBarUp, BoxSeam, CheckCircle, People } from 'react-bootstrap-icons';

const Statistic = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl md:text-5xl font-bold title-font mb-4 text-gray-900">Our Achievements</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Furnitory is considered to be the Game Changer in furniture industry. Carefully-chosen raw material, environment-friendly business practice and customer-centric approach is what made Furnitory. Now Furnitory a beloved brand at home and abroad.</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <People className="text-orange-500 w-12 h-12 mb-3 inline-block"></People>
                        <h2 className="title-font font-medium text-3xl text-gray-900">10.3K</h2>
                        <p className="leading-relaxed">Happy Customers</p>
                    </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <CheckCircle className="text-orange-500 w-12 h-12 mb-3 inline-block"></CheckCircle>
                    <h2 className="title-font font-medium text-3xl text-gray-900">10.8K</h2>
                    <p className="leading-relaxed">Sold Out</p>
                    </div>
                </div>
                
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <BoxSeam className="text-orange-500 w-12 h-12 mb-3 inline-block"></BoxSeam>
                    <h2 className="title-font font-medium text-3xl text-gray-900">30.5K</h2>
                    <p className="leading-relaxed">In Stock</p>
                    </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <ArrowBarUp className="text-orange-500 w-12 h-12 mb-3 inline-block"></ArrowBarUp>
                    <h2 className="title-font font-medium text-3xl text-gray-900">1990</h2>
                    <p className="leading-relaxed">Since</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Statistic;