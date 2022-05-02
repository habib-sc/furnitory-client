import React from 'react';
import { useParams } from 'react-router-dom';
import useBlogDetail from '../../../../hooks/useBlogDetail';
import Spinner from '../../../Shared/Spinner/Spinner';

const BlogDetail = () => {
    const params = useParams();
    const [blog, setBlog] = useBlogDetail(params.id);

    if (!blog.title) {
        return <Spinner></Spinner>
    }
    
    return (
        <div className='container mx-auto'>
            <div className='my-10 md:w-[800px] border p-10 rounded-lg shadow-lg mx-auto'>
                <h1 className='text-4xl font-medium '>{blog.title}</h1>
                <img src={blog.img} className='my-8' alt="" />
                <p className='text-lg'>{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogDetail;