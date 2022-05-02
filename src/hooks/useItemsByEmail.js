import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import myAxios from '../myAxios/myAxios';

const useItemsByEmail = (email) => {
    const [itemsByEmail, setItemsByEmail] = useState([]);
    const navigate = useNavigate();

    const url = `https://furnitory-app.herokuapp.com/users-items?email=${email}`;
    useEffect( () => {
        ( async () => {
            try{
                const { data } = await myAxios.get(url);
                setItemsByEmail(data);
            }
            catch(error){
                const status = error.response.status;
                if(status === 401 || 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        })();
    } , [url]);

    return [itemsByEmail, setItemsByEmail];
};

export default useItemsByEmail;