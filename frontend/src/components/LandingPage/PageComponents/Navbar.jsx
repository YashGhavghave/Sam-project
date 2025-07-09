import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import DarkMode from '@mui/icons-material/DarkMode'

function Navbar() {
  const [UserBox, setUserBox] = useState(false)
  const [Setting, setSetting] = useState(false)
  const visible = () => {
    setUserBox(!UserBox)
  }

  const SettingVisible = () => {
    setSetting(!Setting)
  }

  return (
    <div className='flex  '>
      <div className='absolute h-16 w-[80%] text-black bg-slate-200 rounded-r-full  flex font-sans justify-evenly items-center top-6'>
        <Link to="/" className='flex text-purple-600 text-4xl font-sans'> Student <h1 className=' flex bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>Nest</h1></Link>
        {/* <span>Home</span> */}
        <Link to='/room' className='text-lg hover:scale-105 transition-all ease-out duration-200'>Get Room</Link>
        <Link to='/hotel' className='text-lg hover:scale-105 transition-all ease-out duration-200'>Get Hotels</Link>
        <Link to='/about' className='text-lg hover:scale-105 transition-all ease-out duration-200'>About</Link>
        <Link to='/connectus' className='text-lg hover:scale-105 transition-all ease-out duration-200'>Connect Us</Link>
      </div>
      <button onClick={visible} className='absolute h-auto flex font-sans  top-9 right-10'>
        <PersonIcon style={{ fontSize: 30, color: 'black' }} />
      </button>
      {/* <button className='absolute h-auto flex font-sans  top-9 right-27'>
        <DarkMode style={{ fontSize: 35 }}
        /> */}
      {/* </button> */}
      {UserBox && (
        <div className='z-[100] absolute grid justify-center p-2 rounded-2xl items-center h-35 w-[8vw] top-20 right-12 bg-slate-300 gap-3
    animate-fadeInScale'>
          {/* <div className='hover:text-red-500'>Profile</div>  */}
          <button className='hover:text-red-500' onClick={SettingVisible}>Setting
            {
              Setting && (
                <div className='h-[70h] absolute right-0 top-[15vh] w-[80vw] bg-amber-300 flex'>
                  <div>Yash</div>
                  <form action="">

                  </form>
                </div>
              )
            }</button>
          <div className='hover:text-red-500'>Logout</div>
        </div>
      )}
    </div>
  )
}

export default Navbar
