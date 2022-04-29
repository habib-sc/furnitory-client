import axios from 'axios';
import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        ( async () => {
            const { data } = await axios.get('http://localhost:5000/items');
            setItems(data);
        })();
    } , []);

    return [items, setItems];
};

export default useItems;