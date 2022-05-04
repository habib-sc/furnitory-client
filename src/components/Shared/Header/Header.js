import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { List } from 'react-bootstrap-icons';
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
          <div className={`${match? 'text-orange-500 border-2 border-orange-500 rounded' : ''} font-semibold pt-[2px] pb-[3px]`}>
            <Link
              to={to}
              {...props}
            >
              {children}
            </Link>
          </div>
        );
      }

    return (
        <header className="text-gray-600 body-font bg-gray-100 sticky top-0 w-full z-10 shadow-lg">
            <div className="container mx-auto flex flex-wrap py-5 px-4 md:px-0 flex-col md:flex-row">
                <div className='flex justify-between items-center'>
                    <button onClick={ () => {setToggleMenu(!toggleMenu)}} className='md:hidden'>
                        <List className='text-3xl text-orange-100 bg-orange-500 rounded'></List>
                    </button>
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="mr-3 text-3xl font-bold text-orange-500">Furnitory</span>
                    </Link>
                </div>
                
                <nav className={`md:ml-auto md:flex text-base justify-center items-center md:static ${toggleMenu? 'top-16 bg-gray-100 w-full mt-2' : 'hidden'}`}>
                    <MyLink to='/' className="mx-3 hover:text-gray-900 hover:text-orange-500">Home</MyLink>
                    <MyLink to='/blogs' className="mx-3 hover:text-gray-900 hover:text-orange-500">Blogs</MyLink>
                    <MyLink to='/brands' className="mx-3 hover:text-gray-900 hover:text-orange-500">Our Brands</MyLink>
                    {user &&
                      <>
                        <MyLink to='/add-blog' className="mx-3 hover:text-gray-900 hover:text-orange-500">Add Blog</MyLink>
                        <MyLink to='/inventory' className="mx-3 hover:text-gray-900 hover:text-orange-500">Manage Items</MyLink>
                        <MyLink to='/inventory/add' className="mx-3 hover:text-gray-900 hover:text-orange-500">Add Items</MyLink>
                        <MyLink to='/my-items' className="mx-3 hover:text-gray-900 hover:text-orange-500">My Items</MyLink>
                      </>
                    }

                    {user ?
                    <>
                      <h3 className='mx-3 hover:text-gray-900 hover:text-orange-500 bg-orange-100 text-orange-600 px-2 pb-[3px] border border-orange-200 rounded-lg'>{user.displayName ? user.displayName : user.email}</h3>
                      <button onClick={ () => signOut(auth) } className="inline-flex items-center bg-orange-500 border-0 pt-[2px] pb-[5px] px-3 focus:outline-none hover:bg-orange-400 rounded text-white mt-4 md:mt-0 mx-3">Logout
                      </button>
                    </>
                    : 
                    <>
                      <button onClick={ () => navigate('/login') } className="inline-flex items-center bg-indigo-500 border-0 pt-[2px] pb-[5px] px-3 focus:outline-none hover:bg-indigo-400 rounded text-white mt-4 md:mt-0 mx-3">Login
                      </button>
                      <button onClick={ () => navigate('/register') } className="inline-flex items-center bg-orange-500 border-0 pt-[2px] pb-[5px] px-3 focus:outline-none hover:bg-orange-400 rounded text-white mt-4 md:mt-0">Register
                      </button>
                    </>

                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;