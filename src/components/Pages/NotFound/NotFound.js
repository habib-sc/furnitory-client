import React from 'react';
import errorCode from '../../../assets/icons/error-404.png';
import oopsIcon from '../../../assets/icons/oops.png';

const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center items-center h-[80vh]'>
                <div className='border w-64 md:w-[500px] p-5 rounded-lg shadow-lg flex flex-col justify-center items-center'>
                    <img src={oopsIcon} className='w-24' alt="" />
                    <img src={errorCode} className='w-48 mt-5' alt="" />
                    <h2 className='text-3xl font-bold mt-3'>Sorry! Page Not Found!</h2>
                </div>
            </div>
        </div>
    );
};

export default NotFound;