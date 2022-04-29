import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    console.log(toggleMenu);

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
                    <MyLink to='/inventory' className="mr-5 hover:text-gray-900">Manage Inventory</MyLink>
                    <button className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-white mt-4 md:mt-0">Login
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;