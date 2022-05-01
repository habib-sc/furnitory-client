import React from 'react';
import { Trash } from 'react-bootstrap-icons';

const InventoryItem = (props) => {
    const { name, img, text, price, qty, supplierName, sold } = props.item;
    return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-[80px] py-4">
                    <img src={img} className='w-full border rounded-lg' alt="" />
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {name}
                </th>
                <td className="px-6 py-4 font-medium">
                    ${price}
                </td>
                <td className="px-6 py-4 font-medium">
                    {qty} Pcs
                </td>
                <td className="px-6 py-4 font-medium">
                    {sold? sold : '0'} Pcs
                </td>
                <td className="px-6 py-4 font-medium">
                    {supplierName}
                </td>
                <td className="px-6 py-4 text-right">
                    <button className='border p-2 rounded-full hover:bg-orange-50'>
                        <Trash className='text-3xl text-red-500'></Trash>
                    </button>
                </td>
            </tr>
    );
};

export default InventoryItem;