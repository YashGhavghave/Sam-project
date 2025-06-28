import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import image from '../assets/full-shot-ninja-wearing-equipment.jpg'

function Login() {

  //Axios Block//
  // let res


  const LoginHandler = (user, pass) => {
    try {
      const res = axios.post('http://localhost:3000/', {
        user, pass
      }
      )
      if (!user || !pass) {
        return alert("User and Password are required")
      }
      return res
    }
    catch (err) {
      const msg = err.response?.data?.message;
      alert(msg)
    }
  }


  // const LoginHandler = async (user, pass) => {
  //   try {
  //     const res = await axios.post('http://localhost:3000/', { user, pass });
  //     // console.log(res.data.message); // 🔍 See if it's printed
  //     return res; // res.data.message will have "Login Successful"
  //   } catch (err) {
  //     const msg = err.response?.data?.message;
  //     alert(msg || 'Unexpected error');
  //     return null;
  //   }
  // };


  // LoginHandler()

  const [user, setuser] = useState('')
  const navigate = useNavigate()
  const NewUserNavigate = useNavigate()
  const [pass, setpass] = useState('')



  // const Hander = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const data = await LoginHandler(user, pass);
  //     if (data.status === 200) {
  //       console.log('Login Success', data.data);
  //       navigate('/Player');
  //     } else {
  //       alert('Login failed');
  //     }
  //   } catch (err) {
  //     if (err.response?.status === 400) {
  //       alert('User not found');
  //     } else if (err.response?.status === 401) {
  //       alert('Invalid password');
  //     } else {
  //       alert('Server error');
  //     }
  //   }
  // };




  const Hander = async (e) => {
    e.preventDefault();
    try {
      const data = await LoginHandler(user, pass);

      if (data && data.status === 200) {
        // alert(data.data.message);
        console.log('Login Success:', data.data); // Optional
        navigate('/main');
      } else {
        console.log('Login Attempt')
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong';
      alert(msg);
      console.log('Login error:', err);
    }
  };

  const NewUser = () => {
    NewUserNavigate('/register')
  }
  return (<div className="relative h-[100vh] w-full overflow-hidden bg-gradient-to-tr from-orange-600 via-white to-white">
    {/* Blurred Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0 flex-col"
    />

    {/* Foreground Form */}
    <div className="absolute z-10 flex items-center  h-full ">
      <form
        onSubmit={Hander}
        className=" w-[30vw] h-[60vh] flex flex-col justify-center items-center relative left-30 backdrop-blur-2xl rounded-2xl shadow-2xl gap-10 overflow-hidden"
      >
        <h1 className="text-4xl text-black text-bold">Log in</h1>
        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={(e) => setuser(e.target.value)}
          className="p-2 border-blue-400 rounded-lg w-[80%] bg-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          className="p-2 border-blue-400 rounded-lg w-[80%] bg-white"
        />
        <button onClick={NewUser} className='hover:text-blue-400 relative left-35 text-black'>New User --</button>
        <button
          type="submit"
          className="backdrop-blur-lg bg-white shadow-2xl hover:bg-orange-400 text-black hover:text-white px-[5vw] py-2 rounded-full"
        >Submit
        </button>
      </form>
    </div>

    <div className='flex flex-col gap-3 absolute right-10 h-full justify-center items-center w-[50vw]'>

      <div className=' flex  text-purple-600 text-8xl font-sans'> Student <h1 className=' flex bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>Nest,</h1>
      </div>
      <div className='text-slate-500  text-4xl left-0'>Welcome You
      </div>
    </div>
  </div>

  )
}

export default Login