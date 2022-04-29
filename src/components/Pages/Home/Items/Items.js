import React from 'react';
import useItems from '../../../../hooks/useItems';
import Item from './Item/Item';

const Items = () => {
    const [items, setItems] = useItems();
    return (
        <section>
            <h1 className="sm:text-3xl md:text-5xl font-bold title-font mb-4 text-gray-900 text-center py-10">Latest Inventory Items</h1>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    {
                        items.map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Items;