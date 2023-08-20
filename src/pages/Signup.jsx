import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


function Signup() {

  const { user, signUp } = UserAuth();

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-36 w-[50%] md:w-[20%] m-auto">
      <img src="/moviebg.jpg" className="flex absolute -z-10 w-full h-full left-0 top-0 opacity-20" />
        <div className="border-2 border-sky-500 rounded-md text-center text-white">
          <h1 className="text-3xl font-bold text-sky-500 my-8">Create New User</h1>
          <form onSubmit={handleSubmit} className="flex flex-col mx-10 text-black">
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              className="mb-7" 
              type="email"
              placeholder="E-mail" 
              autoComplete="email"
            />
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              className="mb-7" 
              type="password" 
              placeholder="Password" 
              autoComplete="current-password" 
            />
          <button className="bg-sky-500 rounded-md w-[80px] h-[35px] mb-7 hover:bg-sky-600 hover:border-gray-600 border-2">Sign Up</button>
          </form>
        <div className="flex items-center">
          <p>Already have an account?</p>
          <Link to="/login" ><p>Log In</p></Link>
        </div>
        </div>
    </div>
  )
}

export default Signup