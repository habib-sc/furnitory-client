import axios from 'axios';
import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        ( async () => {
            const { data } = await axios.get('https://furnitory-app.herokuapp.com/items');
            setItems(data);
        })();
    } , []);

    return [items, setItems];
};

export default useItems;