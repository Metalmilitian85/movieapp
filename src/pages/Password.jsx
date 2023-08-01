import React from 'react'

export default function Password() {
    return (
        <div className="pt-36 w-[50%] md:w-[20%] m-auto">
          <div className="border-2 border-sky-500 rounded-md text-center flex flex-col text-white">
            <h2 className="m-7">To reset your password please enter your e-mail address.</h2>
            <div className="flex flex-col mx-10 text-black">
              <input className="mb-7" type="text" placeholder="E-mail" />
            </div>
            <div>
              <button className="bg-sky-500 rounded-md w-[80px] h-[35px] mb-7 hover:bg-sky-600 hover:border-gray-600 border-2">Submit</button>
            </div>
          </div>
        </div>
    )
}