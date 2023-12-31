import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Password from './pages/Password'
import Signup from './pages/Signup'
import { AuthContextProvider } from './context/AuthContext'
import Account from './pages/Account'

export default function App() {

  return (
    <div>
      <AuthContextProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password" element={<Password />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
          </Routes>
      </AuthContextProvider>
    </div>
  )
}