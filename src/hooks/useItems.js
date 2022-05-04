import axios from 'axios';
import { useEffect, useState } from 'react';

const useItems = (page, limit) => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        ( async () => {
            const url = `https://furnitory-app.herokuapp.com/items?limit=${limit}&page=${page}`;
            const { data } = await axios.get(url);
            setItems(data.result);
        })();
    } , []);

    return [items, setItems];
};

export default useItems;