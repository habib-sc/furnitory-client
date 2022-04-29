import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../../hooks/useItemDetail';

const ItemUpdate = () => {
    const params = useParams()
    const [itemDetail] = useItemDetail(params.id);
    const { _id, name, text, img, price, qty, supplierName } = itemDetail;
    return (
        <div className='container mx-auto my-10'>
            <div className='grid md:grid-cols-3 gap-10'>
                <div className='col-span-2 bg-gray-100 rounded-lg'>
                    <div className="p-4 rounded-lg shadow-lg">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img src={img} alt="" className="flex-shrink-0 rounded-lg w-96 h-96 object-cover object-center sm:mb-0 mb-4"/>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-semibold text-2xl text-gray-900 border-b py-1">{name}</h2>
                                <h3 className="text-slate-700 text-xl border-b py-1 font-semibold">Price: {price}</h3>
                                <h3 className="text-slate-700 text-xl border-b py-1 font-semibold">Quantity: {qty} Pcs</h3>
                                <h3 className="text-slate-700 text-xl border-b py-1 font-semibold">Supplier Name: {supplierName}</h3>
                                <p className="border-b text-lg py-1">Description: {text}</p>
                                <h3 className="mb-4 py-1 border-b text-slate-700 text-xl font-semibold">Sold: 0 Pcs</h3>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-lg shadow-lg p-4'>
                    <div className='flex justify-between items-center border-b py-1 mt-4'>
                        <h3 className='text-orange-500 text-xl py-1 font-semibold'>Is this item delivered?</h3>
                        <button className='bg-blue-400 px-2 py-1 rounded text-white'>Delivered</button>
                    </div>
                    <div className='py-1 mt-5'>
                        <h3 className='text-orange-500 text-xl py-1 font-semibold'>Need to re-stock?</h3>
                        <div className='flex justify-between items-center border-b py-1'>
                            <input type="text" placeholder='Stock Quantity' className='py-1 px-1 rounded my-4 border focus:outline-none focus:outline-orange-500' /> <br />
                            <button className='bg-blue-400 px-2 py-1 rounded text-white'>Add Stock</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ItemUpdate;