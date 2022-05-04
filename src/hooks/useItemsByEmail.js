import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import myAxios from '../myAxios/myAxios';

const useItemsByEmail = (email, page, limit) => {
    const [itemsByEmail, setItemsByEmail] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const navigate = useNavigate();

    const url = `https://furnitory-app.herokuapp.com/users-items?email=${email}&limit=${limit}&page=${page}`;
    useEffect( () => {
        ( async () => {
            try{
                const { data } = await myAxios.get(url);
                setItemsByEmail(data.result);
                setTotalPage(Math.ceil(data.itemCount/parseInt(limit)));
            }
            catch(error){
                const status = error.response.status;
                if(status === 401 || 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        })();
    } , [url, page, limit]);

    return [itemsByEmail, totalPage, setItemsByEmail];
};

export default useItemsByEmail;