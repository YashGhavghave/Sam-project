import React from 'react'
import Contri from './PageComponents/Contri'
import Navbar from '../LandingPage/PageComponents/Navbar'

function AboutPage() {
  return (
    <div>
      <Navbar/>
      <div className='h-screen flex justify-center items-center text-3xl'>
        <h1 className='h-30 w-[90%] flex text-white items-center bg-gradient-to-r from-orange-400 to-white p-10 rounded-l-full'>
          About Us
        </h1>
      </div>
      <Contri/>
    </div>
  )
}

export default AboutPage
