import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

const Header = () => {
    const menuItem = <>
      <li className='font-semibold'><Link to="/">Home</Link></li>
      <li className='font-semibold'><Link to="/">about</Link></li>
      <li className='font-semibold'><Link to="/">services</Link></li>
    </>
    return (
        <div>
          <div className="navbar h-20  bg-base-100  pt-6">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {menuItem}
                </ul>
              </div>
              <Link to= "/" className=" normal-case text-xl">
                  <img className='h-24 py-4 pl-4 ' src={logo} alt="" />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
              {menuItem}
              </ul>
            </div>
            <div className="navbar-end">
              <a href=' ' className=" btn btn-outline btn-warning">Appointment</a>
            </div>
          </div>
       </div>
    );
};

export default Header;