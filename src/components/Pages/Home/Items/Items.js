import React from 'react';
import { ArrowRightShort } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../../hooks/useItems';
import Item from './Item/Item';

const Items = () => {
    const [items, setItems] = useItems();
    const limitedItems = items.splice(0, 6);
    const navigate = useNavigate();

    return (
        <section>
            <h1 className="sm:text-3xl md:text-5xl font-bold title-font mb-4 text-gray-900 text-center py-10">Latest Inventory Items</h1>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    {
                        limitedItems.map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
                <div className='my-10'>
                    <button onClick={ () => navigate('/inventory')}  className="flex justify-center items-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-400 rounded text-lg mt-10 sm:mt-0 mx-auto">
                        Manage Inventories
                        <ArrowRightShort className='text-2xl ml-2 text-white'></ArrowRightShort> 
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Items;