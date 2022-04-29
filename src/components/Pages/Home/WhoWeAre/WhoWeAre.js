import React from 'react';
import { PatchCheckFill, PeopleFill, ShieldFillCheck } from 'react-bootstrap-icons';
import whoImg from '../../../../assets/images/wm-who.jpg';

const WhoWeAre = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                
                <div className="flex flex-wrap -m-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 -m-4">
                        {/* Left side  */}
                        <div class="p-4 md:w-full h-[500px] relative order-2 md:order-1 mt-5 md:mt-0">
                            <div className='h-48 w-48 border-8 border-orange-500 absolute z-0'>
                            </div>
                            <div className='h-[500px] ml-5 mr-20 border absolute top-9'>
                                <img src={whoImg} alt="" className='object-cover h-full w-full' />
                            </div>
                            <div className='bg-white text-center p-3 shadow-lg absolute bottom-0 right-6 z-2'>
                                <h1 className='text-6xl font-semibold text-orange-500'>32+</h1>
                                <p className='text-2xl font-semibold'>Year Experience</p>
                            </div>
                        </div>

                        {/* Right side  */}
                        <div class="p-4 md:w-full order-1 md:order-2">
                            <div className="flex flex-col w-full mb-8">
                                <h1 className="sm:text-3xl md:text-5xl font-bold title-font mb-4 text-gray-900 mt-3">Who We Are</h1>
                                <p className="lg:w-3/4 leading-relaxed text-base">We are working for your loveable furnitures. Which are suits your personality. You find best and qualityful furniture from us.</p>
                            </div>
                            <div>
                                <div>
                                    <div className='flex items-center'>
                                        <PatchCheckFill className='mr-2 text-4xl text-orange-500'></PatchCheckFill>
                                        <h3 className='text-3xl font-semibold title-font text-slate-800 my-3'>Trusted Furniture Items</h3>
                                    </div>
                                    
                                    <p className='md:w-[500px] leading-relaxed text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aspernatur sequi asperiores!</p>
                                </div>
                                <div>
                                    <div className='flex items-center'>
                                        <PeopleFill className='mr-2 text-4xl text-orange-500'></PeopleFill>
                                        <h3 className='text-3xl font-semibold title-font text-slate-800 my-3'>Professional Service </h3>
                                    </div>
                                    <p className='md:w-[500px] leading-relaxed text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, incidunt quisquam.</p>
                                </div>
                                <div>
                                    <div className='flex items-center'>
                                        <ShieldFillCheck className='mr-2 text-4xl text-orange-500'></ShieldFillCheck>
                                        <h3 className='text-3xl font-semibold title-font text-slate-800 my-3'>100% Safe Transaction</h3>
                                    </div>
                                    <p className='md:w-[500px] leading-relaxed text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic non dolores minima optio.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;