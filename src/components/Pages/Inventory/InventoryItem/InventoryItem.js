import React, { useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import ConfirmDeleteModal from '../../../Shared/ConfirmDeleteModal/ConfirmDeleteModal';

const InventoryItem = (props) => {
    const {_id, name, img, text, price, qty, supplierName, sold, addedBy } = props.item;
    const { handleItemDelete, handleMyItemDelete } = props;
    const [modalIsOpen, setIsOpen] = useState(false);

     //   Modal opening function
     function openModal() {
        setIsOpen(true);
    }

    return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-[80px] py-4">
                    <img src={img} className='w-full border rounded-lg' alt="" />
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <Link to={`/inventory/${_id}`}> {name} </Link>
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
                <td className="px-6 py-4 font-medium">
                    {addedBy}
                </td>
                <td className="px-6 py-4 text-right flex items-center justify-end gap-4">
                    <Link to={`/inventory/${_id}`}>
                        <button className='border p-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200'>
                            Update Status
                        </button>
                    </Link>
                    <button onClick={openModal} className='border p-2 rounded-full bg-red-100 hover:bg-red-200'>
                        <Trash className='text-3xl text-red-500'></Trash>
                    </button>
                </td>

                <ConfirmDeleteModal 
                    handleItemDelete={handleItemDelete}
                    handleMyItemDelete={handleMyItemDelete}
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                    itemId={_id}
                ></ConfirmDeleteModal>
            </tr>
    );
};

export default InventoryItem;