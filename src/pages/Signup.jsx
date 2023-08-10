import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="pt-36 w-[50%] md:w-[20%] m-auto">
      <img src="/moviebg.jpg" className="flex absolute -z-10 w-full h-full left-0 top-0 opacity-20" />
        <div className="border-2 border-sky-500 rounded-md text-center text-white">
          <h1 className="text-3xl font-bold text-sky-500 my-8">Create New User</h1>
          <div className="flex flex-col mx-10 text-black">
            <input className="mb-7" type="text" placeholder="E-mail" />
            <input className="mb-7" type="text" placeholder="Password" />
            <input className="mb-7" type="text" placeholder="Retype Password" />
          </div>
          <button className="bg-sky-500 rounded-md w-[80px] h-[35px] mb-7 hover:bg-sky-600 hover:border-gray-600 border-2">Sign Up</button>
        </div>
    </div>
  )
}

export default Signup