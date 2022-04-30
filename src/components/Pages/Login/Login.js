import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import Spinner from '../../Shared/Spinner/Spinner';

const Login = () => {

    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        navigate('/');
        toast.success('Login Successful!');
    };

    if (loading) {
        return (
            <Spinner></Spinner>
        );
    }

    return (
        <div className='container mx-auto my-20 px-4'>
            <div className="md:w-[500px] mx-auto bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-2xl text-center font-semibold title-font mb-5">Login</h2>
                <form onSubmit={handleLogin}>  
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    
                    <button className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none w-full hover:bg-orange-600 rounded text-lg">Login</button>
                </form>
                <p className="text-gray-500 mt-3">Didn't Have Any Account? <Link to='/register' className='text-orange-500 border-b border-orange-500 ml-2'>Create Account...</Link></p>

                <SocialLogin></SocialLogin> 
                
            </div>
        </div>
    );
};

export default Login;