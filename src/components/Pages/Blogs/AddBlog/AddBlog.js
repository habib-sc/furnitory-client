import axios from 'axios';
import React, { useState } from 'react';
import { CheckLg } from 'react-bootstrap-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Spinner from '../../../Shared/Spinner/Spinner';

const AddBlog = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, loadingAuth, error] = useAuthState(auth);

    const handleBlogAdd = e => {
        e.preventDefault();
        const blog = {
            title: e.target.title.value,
            description: e.target.description.value,
            img: e.target.imageUrl.value,
            author: user.email
        };
        setLoading(!loading);

        ( async () => {
            const url = 'https://furnitory-app.herokuapp.com/blog/add';
            const { data } = await axios.post(url, blog);
            navigate('/blogs');
            toast.success('Blog Added Successfuly!');
            setLoading(!loading);
        })();

    };

    if (loading || loadingAuth) {
        return (
            <Spinner></Spinner>
        );
    }

    return (
    <div className='container mx-auto'>
        <div className="py-10">
            <h3 className="text-3xl font-medium text-center leading-6 text-gray-900">Add Blog</h3>
        </div>

        <form onSubmit={handleBlogAdd} className='w-full px-4 md:px-0'>
            <div className="px-4 py-5 bg-white border md:w-[500px] mx-auto rounded-lg sm:p-6">
                <div className="grid grid-cols-1">
                    <div className="">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" name="title" id="title" required className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors mb-2 duration-200 ease-in-out"/>

                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea type="text" name="description" id="description" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors mb-2 duration-200 ease-in-out"/>

                        <label htmlFor="imageUrl" required className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="url" name="imageUrl" id="imageUrl" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors mb-2 duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className="mt-8 px-6">
                    <button  className="flex justify-center items-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-400 rounded text-lg mx-auto mb-3">
                        Save Now
                        <CheckLg className='text-2xl ml-2 text-white'></CheckLg> 
                    </button>
                </div>
            </div>
        </form>
</div>
    );
};

export default AddBlog;