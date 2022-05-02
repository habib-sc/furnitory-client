import axios from 'axios';
import { useEffect, useState } from 'react';

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        ( async () => {
            const { data } = await axios.get('https://furnitory-app.herokuapp.com/blogs');
            setBlogs(data);
        })();
    } , []);

    return [blogs, setBlogs];
};

export default useBlogs;