import axios from 'axios';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate();

    // Input User state 
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    // Input Error state 
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })

    // Getting inputs 
    const getNameInput = e => {
        setUserData({...userData, name: e.target.value});
    }
    const getEmailInput = e => {
        setUserData({...userData, email: e.target.value});
    }
    const getPhoneInput = e => {
        setUserData({...userData, phone: e.target.value});
    }
    const getPasswordInput = e => {
        setUserData({...userData, password: e.target.value});
    }
    const getConfirmPasswordInput = e => {
        if (userData.password !== e.target.value) {
            setErrors({...errors, password: 'Password Not Matched!'});
        }else {
            setUserData({...userData, confirmPassword: e.target.value});
            setErrors({...errors, password: ''});
        }
    }

    // Handling Register 
    const handleRegister = e => {
        e.preventDefault();
        if (errors.name || errors.email || errors.phone || errors.password) {
            toast.error('Input Error!');
            return;
        }else{
            // Registering with firebase 
            createUserWithEmailAndPassword(userData.email, userData.password);

            const url = 'https://furnitory-app.herokuapp.com/user/add'
            const userData2 = {name: userData.name, email: userData.email, phone: userData.phone };
            (async () => {
                const { data } =  await axios.post(url, userData2);
            })();

            navigate('/');
            toast.success('Account Created Successfuly!')
        }
        
        
    }

    return (
        <div className='container mx-auto my-20 px-4'>
            <div className="md:w-[500px] mx-auto bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-2xl text-center font-semibold title-font mb-5">Sign Up</h2>
                <form onSubmit={handleRegister}>
                    <div className="relative mb-4">
                        <label htmlFor="fullName" className="leading-7 text-gray-600">Full Name</label>
                        <input onChange={getNameInput} type="text" id='fullName' name="fullName" required className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-gray-600">Email</label>
                        <input onChange={getEmailInput} type="email" id="email" name="email" required className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="phone" className="leading-7 text-gray-600">Phone</label>
                        <input onChange={getPhoneInput} type="number" id="phone" name="phone" required className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-gray-600">Password</label>
                        <input onChange={getPasswordInput} type="password" id="password" name="password" required className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        {errors.password &&
                            <p className='text-red-500 pt-1'>{errors.password}</p>
                        }
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="confirmPassword" className="leading-7 text-gray-600">Confirm Password</label>
                        <input onChange={getConfirmPasswordInput} type="password" id="confirmPassword" name="confirmPassword" required className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        {errors.password &&
                            <p className='text-red-500 pt-1'>{errors.password}</p>
                        }
                    </div>
                    <button className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none w-full hover:bg-orange-600 rounded text-lg">Sign Up</button>
                </form>
                <p className="text-gray-500 mt-3">Already Have An Account? <Link to='/login' className='text-orange-500 border-b border-orange-500 ml-2'>Login Here...</Link></p>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;