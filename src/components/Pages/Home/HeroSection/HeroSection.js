import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id='hero-section' className="text-gray-600 body-font h-[500px]">
            <div className="container mx-auto flex items-center h-full">
                <div className="md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:w-[800px]">
                    <h1 className="title-font sm:text-4xl text-3xl md:text-6xl uppercase mb-4 font-medium text-white">The furniture that 
                        <br className="hidden lg:inline-block"/>you looking for.
                    </h1>
                    <p className="leading-relaxed md:text-xl text-slate-100">You can find here any kind of modern, comfortable and aesthetic designed furniture. We hope our every product you will like.</p>
                </div>  
            </div>
        </section>
    );
};

export default HeroSection;