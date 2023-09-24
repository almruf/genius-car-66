import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext)
    const menuItem = <>
      <li className='font-semibold'><Link to="/">Home</Link></li>
      <li className='font-semibold'><Link to="services">services</Link></li>
      <li className='font-semibold'><Link to="products">products</Link></li>
      <li className='font-semibold'><Link to="about">about</Link></li>
      <div className="">
     {
       user?.email?
         <li className='font-semibold'> <Link to="/orders">orders</Link></li>
       : 
       <></>
     }
      </div>
      <div className="s">
       {
        user?.email?
        <></>
        :
        <Link className='btn btn-outline outline-primary-focus ml-4' to="/login">Login</Link>
       } 
      </div> 
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
             {
              user?.email?
             <div>
               <a href=' ' className=" btn btn-outline btn-warning">Appointment</a> 
               <Link className='btn btn-outline outline-primary-focus ml-4' to="/signout">exit</Link>
             </div>
              :
              <div>
                <Link className='btn btn-outline outline-primary-focus ml-4' to="/signin">Sign In</Link>
                <Link className='btn btn-outline outline-primary-focus ml-4' to="/signup">Sign Up</Link>
              </div>
             }
            </div>
          </div>
       </div>
    );
};

export default Header;