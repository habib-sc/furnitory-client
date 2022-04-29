import axios from 'axios';
import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        ( async () => {
            const { data } = await axios.get('items.json');
            setItems(data);
        })();
    } , []);

    return [items, setItems];
};

export default useItems;