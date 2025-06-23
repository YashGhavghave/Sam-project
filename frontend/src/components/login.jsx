import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import image from '../assets/full-shot-ninja-wearing-equipment.jpg'

function Login() {

  //Axios Block//
  // let res


  const LoginHandler = (user, pass) => {
    try {
      const res = axios.post('http://localhost:3000/', {
        user, pass
      },
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
  return (<div className="relative h-[100vh] w-full overflow-hidden">
    {/* Blurred Background Image */}
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="absolute inset-0 bg-cover bg-center z-0"
    />

    {/* Foreground Form */}
    <div className="relative z-10 flex items-center  h-full">
      <form
        onSubmit={Hander}
        className=" w-[30vw] h-[96vh] flex flex-col justify-center items-center backdrop-blur-3xl rounded-r-full shadow-2xl gap-10 overflow-hidden"
      >
        <h1 className="text-4xl text-white text-bold">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={(e) => setuser(e.target.value)}
          className="p-2 border-blue-400 rounded-lg w-[80%] bg-amber-50"
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          className="p-2 border-blue-400 rounded-lg w-[80%] bg-amber-50"
        />
        <button onClick={NewUser} className='hover:text-blue-400 relative left-35 text-white'>New User --</button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-red-500 text-white px-[5vw] py-4 rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
  </div>

  )
}

export default Login
