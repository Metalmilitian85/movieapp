import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Password from './pages/Password'
import Signup from './pages/Signup'

export default function App() {

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password" element={<Password />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  )
}