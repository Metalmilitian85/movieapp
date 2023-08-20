import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await logOut();
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    };



    return (
        <nav className="flex justify-between items-center p-4 z-[100] sticky w-full bg-black bg-opacity-80">
            <Link to="/" ><h1 className="text-sky-500 text-4xl font-bold cursor-pointer">FLIXPIX</h1></Link>
            <div>
              {user?.email ? (
                <div>  
                  <Link to="/account" ><button className="text-white pr-4">Account</button></Link>
                  <button onClick={handleLogout} className="bg-sky-500 px-6 py-2 rounded cursor-pointer text-white">Log Out</button>
                </div>
              ) : (
                <div>  
                  <Link to="/login" ><button className="text-white pr-4">Log In</button></Link>
                  <Link to="/signup" ><button className="bg-sky-500 px-6 py-2 rounded cursor-pointer text-white">Sign Up</button></Link>
                </div>
              )}
            </div>
        </nav>
    );
};

export default Navbar;