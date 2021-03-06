import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBlogs from '../../../hooks/useBlogs';
import Spinner from '../../Shared/Spinner/Spinner';

const Blogs = () => {
    const [blogs, setBlogs] = useBlogs();
    const excerptBlogs = blogs.slice(0, 281);
    const navigate = useNavigate();

    if (blogs.length === 0) {
        return (
            <Spinner></Spinner>
        );
    }

    const handleReadMore = (id) => {
        navigate(`/blog/${id}`);
    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-3xl font-semibold my-10'>All Blogs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
                {
                    blogs.map(blog => <div key={blog._id}>
                        <article className='min-h-[230px] bg-gray-100 rounded-lg shadow-lg p-5 mx-5 md:mx-0 flex flex-col md:flex-row items-center'>
                            <div className='h-40 w-64 md:w-80 border border-2 p-3 border rounded-lg mb-2 md:mb-0'>
                                <img src={blog.img} className='object-cover h-full w-full rounded-lg' alt="" />
                            </div>
                            <div className='px-5'>
                                <h3 className='text-2xl text-slate-600 font-medium'>{blog.title}</h3>
                                <p className='text-slate-600'>{blog.description.slice(0, 120)} ...</p>
                                <button onClick={ () => handleReadMore(blog._id)} className='text-lg text-indigo-400 hover:text-indigo-300'>Read More</button>
                            </div>
                        </article>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;