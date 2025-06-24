import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'
// import DarkMode from '@mui/icons-material/DarkMode'

function Navbar() {
  const [UserBox, setUserBox] = useState(false)
const visible = ()=>{
  setUserBox(!UserBox)
}
  return (
    <div className='flex  '>
      <div className='absolute h-16 w-[80%] text-black bg-slate-300 rounded-r-full  flex font-sans justify-evenly items-center top-6'>
        <h1 className='text-black text-4xl '> <b>Student</b> Nest</h1>
        {/* <span>Home</span> */}
        <span>Get Room</span>
        <span>Get Hotels</span>
        <span>About</span>
        <span>Connect Us</span>
      </div>
      <button onClick={visible} className='absolute h-auto flex font-sans  top-9 right-10'>
        <PersonIcon style={{ fontSize: 35, color: 'black' }}
        />
      </button>
      {/* <button className='absolute h-auto flex font-sans  top-9 right-27'>
        <DarkMode style={{ fontSize: 35 }}
        /> */}
      {/* </button> */}
      {UserBox && (
        <div className='grid justify-center p-2 rounded-2xl items-center h-35 w-[8vw] absolute top-20 right-12 bg-slate-300 gap-3'>
          <div className='hover:text-red-500'>Profile</div> 
          <div className='hover:text-red-500'>Setting</div>
          <div className='hover:text-red-500'>Logout</div>
        </div>
      )}
    </div>
  )
}

export default Navbar
