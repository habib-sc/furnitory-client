import axios from 'axios';
import { useEffect, useState } from 'react';

const useItemsByEmail = (email) => {
    const [itemsByEmail, setItemsByEmail] = useState([]);
    const url = `https://furnitory-app.herokuapp.com/items?email=${email}`;
    useEffect( () => {
        ( async () => {
            const { data } = await axios.get(url);
            setItemsByEmail(data);
        })();
    } , [url]);

    return [itemsByEmail, setItemsByEmail];
};

export default useItemsByEmail;