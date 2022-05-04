import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    // Destructuring data 
    const { _id, name, img, text, price, qty, supplierName } = props.item;

    // Navigate hook
    const navigate = useNavigate();


    return (  
        <div className="p-4 border rounded-lg shadow-lg mx-4 md:mx-0">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img src={img} alt="" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"/>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-semibold text-lg text-gray-900 border-b py-1">{name}</h2>
                    <div className='grid grid-cols-2 border-b py-1'>
                        <h3 className="text-slate-700 font-semibold">Price: ${price}</h3>
                        <h3 className="text-slate-700 font-semibold">Quantity: {qty} Pcs</h3>
                    </div>
                    <h3 className="text-slate-700 border-b py-1">Supplier Name: {supplierName}</h3>
                    {text &&
                        <p className="border-b py-1">{text}</p>
                    }
                    <button onClick={ () => navigate(`/inventory/${_id}`)} className='bg-orange-500 hover:bg-orange-400 px-2 pt-[2px] pb-[4px] mt-4 rounded text-white'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;