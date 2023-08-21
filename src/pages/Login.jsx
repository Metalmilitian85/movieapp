import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate("/")
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

    return (
      <div className="pt-36 w-[50%] md:w-[20%] m-auto">
        <img src="/moviebg.jpg" className="flex absolute -z-10 w-full h-full left-0 top-0 opacity-20" />
        <div className="border-2 border-sky-500 rounded-md text-center text-white">
            <h1 className="text-3xl font-bold text-sky-500 my-8">Log In</h1>
            {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
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
              <button className="bg-sky-500 rounded-md w-[80px] h-[35px] mb-2 mx-auto hover:bg-sky-600 hover:border-gray-600 border-2">Log In</button>
              <div className="flex mx-auto">
                <Link to="/password" ><button className="mb-8 text-white text-xs">Forget password?</button></Link>
              </div>
              <div className="flex justify-center mb-7 text-white">
                <p className="mr-2">Don't have an account?</p>
                <Link to="/signup" className="underline hover:font-semibold"><p>Sign Up</p></Link>
              </div>
            </form>
        </div>
      </div>
    )
}