import axios from 'axios';
import { useEffect, useState } from 'react';

const useBlogDetail = (id) => {
    const [blog, setBlog] = useState({});

    const url = `https://furnitory-app.herokuapp.com/blog/${id}`;
    useEffect( () => {
        (async () => {
            const { data } = await axios.get(url);
            setBlog(data);
        })();
    } , [url]);

    return [blog, setBlog];
};

export default useBlogDetail;