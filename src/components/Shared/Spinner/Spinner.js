import React from 'react';
import spinnerSVG from '../../../assets/icons/spinner.gif';

const Spinner = () => {
    return (
        <div className='w-full h-[350px] flex justify-center items-center'>
            <img className='h-[150px]' src={spinnerSVG} alt="" />
        </div>
    );
};

export default Spinner;