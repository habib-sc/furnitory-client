import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    function MyLink({ children, to, ...props }: LinkProps) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
      
        return (
          <div>
            <Link
              style={{ textDecoration: match ? "underline" : "none" }}
              to={to}
              {...props}
            >
              {children}
            </Link>
          </div>
        );
      }

    return (
        <header className="text-gray-600 body-font bg-gray-100">
            <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row">
                <div className='flex justify-between items-center'>
                    <button onClick={ () => {setToggleMenu(!toggleMenu)}} className='md:hidden'>
                        |||
                    </button>
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Furnitory</span>
                    </Link>
                </div>
                
                <nav className={`md:ml-auto md:flex text-base justify-center md:static ${toggleMenu? 'top-16 bg-gray-100 w-full mt-2' : 'hidden'}`}>
                    <MyLink to='/' className="mr-5 hover:text-gray-900">Home</MyLink>
                    <MyLink to='/blogs' className="mr-5 hover:text-gray-900">Blogs</MyLink>
                    {user &&
                      <>
                        <MyLink to='/inventory' className="mr-5 hover:text-gray-900">Manage Items</MyLink>
                        <MyLink to='/inventory/add' className="mr-5 hover:text-gray-900">Add Items</MyLink>
                        <MyLink to='/inventory' className="mr-5 hover:text-gray-900">My Items</MyLink>
                      </>
                    }

                    {user ?
                    <button onClick={ () => signOut(auth) } className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-400 rounded text-white mt-4 md:mt-0 mr-3">Logout
                    </button>
                    : 
                    <>
                      <button onClick={ () => navigate('/login') } className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded text-white mt-4 md:mt-0 mr-3">Login
                      </button>
                      <button onClick={ () => navigate('/register') } className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-400 rounded text-white mt-4 md:mt-0">Register
                      </button>
                    </>

                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;