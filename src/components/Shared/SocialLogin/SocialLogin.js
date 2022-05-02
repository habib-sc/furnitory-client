import axios from 'axios';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../../assets/icons/google.png';
import auth from '../../../firebase.init';
import Spinner from '../Spinner/Spinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }

    if (loading) {
        return (
            <Spinner></Spinner>
        );
    }

    if (user) {
        const url = 'https://furnitory-app.herokuapp.com/login';

        ( async () => {
            // sending email and get token 
            const { data } = await axios.post(url, {email: user.user.email});
            // saving token in localStorage 
            localStorage.setItem("accessToken", data.token);
        })();

        navigate(from, { replace: true });
    }

    return (
        <div className='mt-5'>
            <div className='my-5 flex justify-center items-center'>
                <div className='h-[1px] w-[100px] bg-orange-300'></div> <span className='mx-4'>OR</span> <div className='h-[1px] w-[100px] bg-orange-300'></div>
            </div>
            <button onClick={handleGoogleLogin} className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none w-full hover:bg-orange-600 rounded text-lg flex items-center justify-center">
                <img src={googleIcon} className='mr-3' alt="" />
                Continue With Google</button>
        </div>
    );
};

export default SocialLogin;