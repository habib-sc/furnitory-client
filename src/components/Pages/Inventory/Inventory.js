import React from 'react';
import { PlusLg, Search } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import InventoryItem from './InventoryItem/InventoryItem';

const Inventory = () => {
    const navigate = useNavigate();

    const [items, setItems] = useItems();

    return (
        <div className='container mx-auto py-10'> 
            <div className="relative overflow-x-auto sm:rounded-lg">
                <div className="py-4 flex justify-between">
                    <div>
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Search></Search>
                            </div>
                            <input type="text" id="table-search" className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-96 pl-10 p-2.5" placeholder="Search for items"/>
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
                            <th scope="col" className="pr-6 py-1 font-bold text-orange-500">
                                Short Description
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
                            <th scope="col" className="px-6 py-3 text-right text-orange-500">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <InventoryItem key={item._id} item={item}></InventoryItem>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Inventory;