import React from 'react'
// import { useState } from 'react'

function Navbar() {
  return (
    <div className='flex justify-evenly'>
      <div className='h-16 w-[70%] text-white bg-black relative rounded-full flex justify-evenly items-center top-6'>
        <h1 className='text-white text-4xl font-mono '>AnjaNexus</h1>
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
        <span>Connect Us</span>
      </div>
    </div>
  )
}

export default Navbar
