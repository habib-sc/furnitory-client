import axios from 'axios';
import React, { useState } from 'react';
import { PlusLg, Search } from 'react-bootstrap-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import useItemsByEmail from '../../../../hooks/useItemsByEmail';
import Spinner from '../../../Shared/Spinner/Spinner';
import InventoryItem from '../InventoryItem/InventoryItem';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(5);

    const [itemsByEmail, totalPage, setItemsByEmail] = useItemsByEmail(user.email, page, limit);
    
    // if (itemsByEmail.length > 0) {
    //     setTotalPage(Math.ceil(itemsByEmail.length/limit));
    // }
    

    const handleMyItemDelete = id => {
        const url = `https://furnitory-app.herokuapp.com/item/delete/${id}`
        const { data } = axios.delete(url);

        // updating Ui
        toast.success('Item Deleted Successfuly!');
        const newItems = itemsByEmail.filter(item => item._id !== id);
        setItemsByEmail(newItems);
    };

    if (itemsByEmail.length === 0) {
        return (
            <Spinner></Spinner>
        );
    }

    return (
        <div className='container mx-auto py-10'> 
            <div className="relative overflow-x-auto sm:rounded-lg px-4 md:px-0">
                <div className="py-4 flex flex-col justify-center md:flex-row md:justify-between">
                    <div>
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Search></Search>
                            </div>
                            <input type="text" id="table-search" className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none block w-full md:w-96 pl-10 p-2.5" placeholder="Search for items"/>
                        </div>
                    </div>
                    <button onClick={ () => navigate('/inventory/add')}  className="flex justify-center items-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-400 rounded text-lg mt-10 sm:mt-0">
                        <PlusLg className='text-2xl mr-2 text-white'></PlusLg> 
                        Add New Item
                    </button>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-1 font-bold text-orange-500">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-1 font-bold text-orange-500">
                                Item name
                            </th>
                            <th scope="col" className="px-6 py-1 font-bold text-orange-500">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-1 font-bold text-orange-500">
                                In Stock
                            </th>
                            <th scope="col" className="px-6 py-1 font-bold text-orange-500">
                                Sold
                            </th>
                            <th scope="col" className="px-6 py-1 font-bold text-orange-500">
                                Supplier Name
                            </th>
                            <th scope="col" className="px-6 py-1 font-bold text-orange-500">
                                Added By
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-orange-500">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemsByEmail.map(item => <InventoryItem key={item._id} item={item} handleMyItemDelete={handleMyItemDelete}></InventoryItem>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex my-5 justify-center'>
                <select onChange={ (e) => setLimit(e.target.value)} defaultValue={limit} className='mx-4 border border-orange-500 px-3 py-1'>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>

                {
                    [...Array(totalPage? totalPage : 0).keys()].map(pageNumber => <div onClick={ () => setPage(pageNumber)} key={pageNumber} className='mx-2 border border-orange-500 px-3 py-1 cursor-pointer'>{pageNumber+1}</div>)
                }
            </div>
        </div>
    );
};

export default MyItems;