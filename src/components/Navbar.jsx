import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 z-[100] fixed w-full bg-black bg-opacity-80">
            <Link to="/" ><h1 className="text-sky-500 text-4xl font-bold cursor-pointer">FLIXPIX</h1></Link>
            <div>
              <Link to="/login" ><button className="text-white pr-4">Log In</button></Link>
                <button className="bg-sky-500 px-6 py-2 rounded cursor-pointer text-white">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar;