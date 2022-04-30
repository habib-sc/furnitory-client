import axios from 'axios';
import { useEffect, useState } from 'react';

const useItemDetail = (id, item) => {
    const [itemDetail, setItemDetail] = useState({});
    const url = `http://localhost:5000/item/${id}`;

    useEffect( () => {
        (async () => {
            const { data } = await axios.get(url);
            setItemDetail(data);
        })();
    } , [id, item]);

    return [itemDetail, setItemDetail];
};

export default useItemDetail;