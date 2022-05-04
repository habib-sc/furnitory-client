import axios from 'axios';
import { useEffect, useState } from 'react';

const useItems = (page, limit) => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        ( async () => {
            const url = `http://localhost:5000/items?limit=${limit}&page=${page}`;
            const { data } = await axios.get(url);
            setItems(data.result);
        })();
    } , []);

    return [items, setItems];
};

export default useItems;