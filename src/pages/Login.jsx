import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="pt-36 w-[50%] md:w-[20%] m-auto">
          <div className="border-2 border-sky-500 rounded-md text-center text-white">
            <h1 className="text-3xl font-bold text-sky-500 my-8">Log In</h1>
            <div className="flex flex-col mx-10 text-black">
              <input className="mb-7" type="text" placeholder="E-mail" />
              <input className="mb-1" type="text" placeholder="Password" />
            </div>
            <div className="flex justify-start ml-10">
              <Link to="/password" ><button className="mb-8 text-white text-xs">Forget password?</button></Link>
            </div>
            <button className="bg-sky-500 rounded-md w-[80px] h-[35px] mb-7 hover:bg-sky-600 hover:border-gray-600 border-2">Log In</button>
          </div>
        </div>
    )
}