import React from 'react'
import Navbar from '../LandingPage/PageComponents/Navbar'
function ConnectPage() {
  return (
    <div>
        <Navbar/>
        <div className='h-screen flex justify-center items-center text-3xl'>
        <h1 className='h-30 w-[90%] flex text-white items-center bg-gradient-to-r from-orange-400 to-white p-10 rounded-l-full'>
          Contact Us
        </h1>
      </div>
    </div>
  )
}

export default ConnectPage
