import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../../assets/icons/google.png';

const Login = () => {
    return (
        <div className='container mx-auto my-20 px-4'>
            <div class="md:w-[500px] mx-auto bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                <h2 class="text-gray-900 text-2xl text-center font-semibold title-font mb-5">Login</h2>
                <form>
                    
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    
                    <div class="relative mb-4">
                        <label for="password" class="leading-7 text-gray-600">Password</label>
                        <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    
                    <button class="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none w-full hover:bg-indigo-600 rounded text-lg">Login</button>
                </form>
                <p class="text-gray-500 mt-3">Didn't Have Any Account? <Link to='/register' className='text-orange-500 border-b border-orange-500 ml-2'>Create Account...</Link></p>

                <div className='mt-5'>
                    <div className='my-5 flex justify-center items-center'>
                        <div className='h-[1px] w-[100px] bg-orange-300'></div> <span className='mx-4'>OR</span> <div className='h-[1px] w-[100px] bg-orange-300'></div>
                    </div>
                    <button class="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none w-full hover:bg-indigo-600 rounded text-lg flex items-center justify-center">
                        <img src={googleIcon} className='mr-3' alt="" />
                        Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;