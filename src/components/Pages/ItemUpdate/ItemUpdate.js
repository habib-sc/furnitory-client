import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItemDetail from '../../../hooks/useItemDetail';

const ItemUpdate = () => {
    const [updatedItem, setUpdatedItem] = useState({});
    const params = useParams()
    const [itemDetail, setItemDetail] = useItemDetail(params.id, updatedItem);
    const { _id, name, text, img, price, qty, supplierName, sold } = itemDetail;

    // Handling add stock ======================================================
    const handleAddStock = (e) => {
        e.preventDefault();
        // Getting input 
        const addStock = e.target.addStock.value;
        // calculating new stock 
        const newStock = qty + parseInt(addStock);
        // wrapping data with object 
        const updateData = {name, text, img, price, qty: newStock, supplierName};
        
        // Data saving process on mongodb with axios 
        ( async () => {
            const url = `https://furnitory-app.herokuapp.com/item/update/${_id}`;
            // sending data to database 
            const { data } = await axios.put(url, updateData);
            // updatting ui with new data 
            setUpdatedItem(updateData);
            // clearing input 
            e.target.addStock.value = '';

            // Showing success toast message 
            toast.success(`${addStock} Items Added Successfuly!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })();
    }


    // Handling deliverd =========================================================
    let newStock = qty;
    let newSold = sold ? sold : 0 ;
    const handleDelivered = () => {
        // calculating data
        newStock = newStock - 1;
        newSold = newSold + 1;

         // wrapping data with object 
         const updateData = {name, text, img, price, qty: newStock, sold: newSold, supplierName};

        // Data Saving process on mongodb with axios 
        ( async () => {
            const url = `https://furnitory-app.herokuapp.com/item/update/${_id}`;
            // sending data to db 
            const { data } = await axios.put(url, updateData);
             // updatting ui with new data 
             setUpdatedItem(updateData);

             // Showing success toast message 
            toast.success(`1 Item Delivered Successfuly!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })();
    };

    return (
        <div className='container mx-auto my-10'>
            <div className='grid md:grid-cols-3 gap-10'>
                <div className='col-span-2 bg-gray-100 rounded-lg'>
                    <div className="p-4 rounded-lg shadow-lg">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img src={img} alt="" className="flex-shrink-0 rounded-lg w-96 h-96 object-cover object-center sm:mb-0 mb-4"/>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-semibold text-2xl text-gray-900 border-b py-1">{name}</h2>
                                <h3 className="text-slate-700 text-xl border-b py-1 font-semibold">Id: {_id}</h3>
                                <h3 className="text-slate-700 text-xl border-b py-1 font-semibold">Price: ${price}</h3>
                                <h3 className="text-slate-700 text-xl border-b py-1 font-semibold">In Stock: {qty} Pcs</h3>
                                <h3 className="text-slate-700 text-xl border-b py-1 font-semibold">Supplier Name: {supplierName}</h3>
                                <p className="border-b text-lg py-1">Description: {text}</p>
                                <h3 className="mb-4 py-1 border-b text-slate-700 text-xl font-semibold">Sold: {sold ? sold : 0} Pcs</h3>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-lg shadow-lg p-4'>
                    <div className='flex justify-between items-center border-b py-1 mt-4'>
                        <h3 className='text-orange-500 text-xl py-1 font-semibold'>Is this item delivered?</h3>
                        <button onClick={handleDelivered} className='bg-blue-400 px-2 py-1 rounded text-white'>Delivered</button>
                    </div>
                    <div className='py-1 mt-5'>
                        <h3 className='text-orange-500 text-xl py-1 font-semibold'>Need to re-stock?</h3>
                        <div className='border-b py-1'>
                            <form onSubmit={handleAddStock} className='flex justify-between items-center'>
                                <input type="number" name='addStock' placeholder='Stock Quantity' className='py-1 px-1 rounded my-4 border focus:outline-none focus:outline-orange-500' /> <br />
                                <input type="submit" className='bg-blue-400 px-2 py-1 rounded text-white cursor-pointer' value='Add Stock' />
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ItemUpdate;