import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'



function RegistrationForm() {



  
  const RegistrationFromHandler = (user, pass) => {
    try {
      const Response = axios.post('http://localhost:3000/register', {
        user, pass
      })
      return Response
    }
    catch (err) {
      console.log(err)
    }
  }


  const [user, setUsername] = useState('')
  const [pass, setPassword] = useState('')
  const navigate = useNavigate()


  const RegistrationHandler = async (e) => {
    e.preventDefault()
    try {
      const controller = await RegistrationFromHandler(user, pass)
      if (controller) {
        navigate('/')
      }
      else (
        alert('Error Occur')
      )
    } catch (err) {
      let msg = err.response?.data?.message||"Check the Credentials"
      alert(msg)
      console.log(err)
    }
  }



  return (
    <div style={{ backgroundImage: `url("https://bpac.in/wp-content/uploads/2021/08/BlogsArtboard-1-copy-9.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='h-screen flex justify-center items-center absolute inset-0 bg-cover bg-center z-0 '>

      <form onSubmit={RegistrationHandler} className=' w-[30vw] h-[60vh] flex flex-col justify-center items-center backdrop-blur-2xl rounded-3xl shadow-2xs gap-10 overflow-hidden'>
        <h1 className='text-3xl text-white font-bold'>Register</h1>
        <input value={user} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='Username' className='p-2 bg-amber-50 rounded-lg flex-col w-[80%]' />
        <input value={pass} onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder='Password' className='p-2 bg-amber-50 rounded-lg flex-col w-[80%]' />
        {/* <input value={Conformpassword} onChange={(e) => { setConformPassword(e.target.value) }} type="text" placeholder='Conform Password' className='p-2 bg-amber-50 rounded-lg flex-col w-[80%]' /> */}
        <button type='submit' className='bg-blue-600 text-white pr-8 pl-8 pt-2 pb-2 rounded-3xl hover:bg-red-500'>Submit</button>
      </form>
    </div>
  )
}

export default RegistrationForm
