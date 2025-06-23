import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login'
import Player from './components/Player'
import RegistrationForm from './components/Register/RegistrationForm'
import Main from './components/LandingPage/main'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/player' element={<Player/>} />
      <Route path='/main' element={<Main/>} />
      <Route path='/register' element={<RegistrationForm/>} />
    </Routes>
    </>
  )
}

export default App
