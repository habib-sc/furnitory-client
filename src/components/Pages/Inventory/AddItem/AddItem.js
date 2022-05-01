import axios from 'axios';
import React, { useState } from 'react';
import { CheckLg } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../../Shared/Spinner/Spinner';

const AddItem = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleItemAdd = e => {
        e.preventDefault();
        const item = {
            name: e.target.itemName.value,
            text: e.target.description.value,
            price: parseInt(e.target.price.value),
            stock: parseInt(e.target.stock.value),
            supplierName: e.target.supplierName.value,
            img: e.target.imageUrl.value
        };
        setLoading(!loading);

        ( async () => {
            const url = 'https://furnitory-app.herokuapp.com/item/add';
            const { data } = await axios.post(url, item);
            navigate('/inventory');
            toast.success('Item Added Successfuly!');
            console.log(data);
        })();

        
    }

    if (loading) {
        return (
            <Spinner></Spinner>
        );
    }

    return (
        <div className='container mx-auto'>
                <div className="py-10">
                    <h3 className="text-3xl font-medium text-center leading-6 text-gray-900">Item Information Form</h3>
                </div>

                <form onSubmit={handleItemAdd} className='w-full'>
                    <div className="px-4 py-5 bg-white border rounded-lg sm:p-6">
                        <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
                            <div className="md:col-span-4">
                                <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">Item Name</label>
                                <input type="text" name="itemName" id="itemName" required className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>

                            <div className="md:col-span-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                <input type="text" name="description" id="description" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="md:col-span-4">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                                <input type="number" name="price" id="price" required className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="md:col-span-4">
                                <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
                                <input type="number" name="stock" id="stock" required className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="md:col-span-4">
                                <label htmlFor="supplierName" className="block text-sm font-medium text-gray-700">Supplier Name</label>
                                <input type="text" name="supplierName" id="supplierName" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="md:col-span-4">
                                <label htmlFor="imageUrl" required className="block text-sm font-medium text-gray-700">Image URL</label>
                                <input type="url" name="imageUrl" id="imageUrl" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="mt-8 px-6">
                            <button  className="flex justify-center items-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-400 rounded text-lg mx-auto mb-3">
                                <CheckLg className='text-2xl mr-2 text-white'></CheckLg> 
                                Save Now
                            </button>
                        </div>
                    </div>
                </form>

        </div>
    );
};

export default AddItem;