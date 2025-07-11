'use client'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import PersonIcon from '@mui/icons-material/Person'

export default function Navbar() {
  const [userBox, setUserBox] = useState(false)
  const [setting, setSetting] = useState(false)
  const navigate = useNavigate()

  const toggleUserBox = () => setUserBox(!userBox)
  const toggleSettings = () => setSetting(!setting)

  const handleLogout = async () => {
    await fetch('http://localhost:3000/api/logout', {
      method: 'POST',
      credentials: 'include',
    })
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 12 }}
      className="fixed top-4 z-50 w-full flex justify-center items-center"
    >
      <div className="w-[90%] max-w-7xl flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-lg shadow-xl rounded-full border border-white/40">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}  
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight flex items-center space-x-1"
          >
            <span className="text-purple-600">Student</span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Nest
            </span>
          </Link>
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/room" className="hover:text-purple-600 transition">Get Room</Link>
          <Link to="/hotel" className="hover:text-purple-600 transition">Get Hotels</Link>
          <Link to="/about" className="hover:text-purple-600 transition">About</Link>
          <Link to="/connectus" className="hover:text-purple-600 transition">Connect Us</Link>
        </div>

        {/* Profile Icon */}
        <button
          onClick={toggleUserBox}
          className="hover:scale-105 transition duration-200"
        >
          <PersonIcon style={{ fontSize: 28 }} />
        </button>

        {/* Dropdown (Animated with AnimatePresence) */}
        <AnimatePresence>
          {userBox && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-8 top-16 bg-white border border-gray-200 rounded-xl shadow-lg p-4 w-44 flex flex-col space-y-3 z-50"
            >
              <button
                onClick={toggleSettings}
                className="text-left hover:text-purple-600 transition"
              >
                Settings
              </button>
              <button
                onClick={handleLogout}
                className="text-left hover:text-red-500 transition"
              >
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slide-in Settings Panel */}
      <AnimatePresence>
        {setting && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 80 }}
            className="fixed top-0 right-0 h-full w-[80vw] max-w-xl bg-amber-200 p-6 shadow-2xl z-40"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Settings Panel</h2>
              <button
                onClick={toggleSettings}
                className="text-gray-600 hover:text-black"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-700">Welcome, Yash 👋</p>
            {/* Add your form or content here */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
