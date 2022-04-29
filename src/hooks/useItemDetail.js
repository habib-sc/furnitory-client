import axios from 'axios';
import { useEffect, useState } from 'react';

const useItemDetail = (id) => {
    const [itemDetail, setItemDetail] = useState({});
    const url = `http://localhost:5000/item/${id}`;

    useEffect( () => {
        (async () => {
            const { data } = await axios.get(url);
            setItemDetail(data);
        })();
    } , [id]);

    return [itemDetail];
};

export default useItemDetail;