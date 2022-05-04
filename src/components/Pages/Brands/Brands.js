import React from 'react';
import brandsImg from '../../../assets/images/furniture-brands.png';

const Brands = () => {
    return (
        <div className='container mx-auto'>
            <div className="py-10">
                <h2 className='text-center text-3xl font-semibold mt-10'>Our Brands</h2>
            </div>
            <div className='flex justify-center px-5 md:px-0'>
                <div className='border md:w-[1000px] p-10 '>
                    <img src={brandsImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brands;