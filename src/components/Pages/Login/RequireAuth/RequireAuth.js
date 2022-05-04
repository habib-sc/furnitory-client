import React from 'react';
import { EnvelopeCheck } from 'react-bootstrap-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Spinner from '../../../Shared/Spinner/Spinner';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return (
            <Spinner></Spinner>
        );
    }

    if (user) {
        if (!user.emailVerified) {
            return (
                <div className='container mx-auto'>
                    <div className='h-[500px] w-full flex items-center justify-center'>
                        <div className='h-64 w-96 flex items-center border rounded-lg shadow-lg p-5'>
                            <div className='flex flex-col items-center'>
                                <EnvelopeCheck className='text-4xl text-orange-800 mb-3'></EnvelopeCheck>
                                <h3 className='text-center text-3xl text-orange-500'>Please check your email and verify.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children; 
};

export default RequireAuth;