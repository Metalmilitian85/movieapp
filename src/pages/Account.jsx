import React from 'react'
import Savedshows from '../components/Savedshows'

export default function Account() {
  return (
    <div className="w-full text-white">
        <img src="/moviebg.jpg" className="flex absolute -z-10 w-full h-full left-0 top-0 opacity-20" />
        <h1 className="text-center">Account</h1>
        <Savedshows />
    </div>
  )
}
