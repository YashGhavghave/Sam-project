import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import  {hover, motion}  from "motion/react";
import Landing2 from "./PageComponents/Landing2";

import Navbar from "./PageComponents/Navbar";
import First_LandingComponent from "./PageComponents/First_LandingComponent";

function Main() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/profile", {
          withCredentials: true, // Important to send cookie
        });

        setUserData(res.data.user);
        setLoading(false);
      } catch (err) {
        console.error("Not authenticated:", err);
        setLoading(false);
        navigate("/login"); // redirect to login if not logged in
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) return <div className="p-10 flex justify-evenly items-center  text-3xl font-medium">Loading...</div>;

  return (
    <div className="relative min-h-screen ">
      <Navbar />

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
  className="absolute top-[30vh] left-10 md:left-30 max-w-3xl ">
  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-800 leading-tight mb-4 w-[30vw]">
    Hello, <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
      {userData?.user}
    </span>
  </h1>

  <p className="text-lg sm:text-xl text-gray-600 font-medium w-[35vw]">
    Welcome to{' '}
    <span className="text-orange-500 font-semibold">Student Nest</span> —
    the best place to find study-ready living spaces!
  </p>

  <p className="text-gray-500 mt-2 text-sm sm:text-base font-mono w-[45vw]">
    Discover PGs, hostels, flats, or co-living rooms designed for engineering students and faculty.
  </p>
</motion.div>

<div className="h-[30vh] w-[40vw] bg-orange-200 absolute top-[28rem] left-[8.3rem] border-none flex justify-evenly items-center shadow-xl/20 rounded-2xl flex-col text-2xl font-normal ">
    <p className="text-lg sm:text-xl text-gray-600 font-medium w-[35vw]">
    Welcome to{' '}
    <span className="text-orange-500 font-semibold">Student Nest</span>
  <h1 className="text-sm text-gray-600 font-medium">   ---- We are hear to make you easy....</h1>
  </p>
  <input type="text" className="w-[30vw] h-[4vh] p-4 text-lg rounded-full border-1 outline-none" placeholder="Search "/>
  <button className="px-10 text-lg font-normal bg-orange-500 rounded-full text-white py-0.5">Search</button>
</div>


      <div className="">
        <First_LandingComponent />
      </div>
      <div>
        <Landing2/>
      </div>
    </div>
  );
}

export default Main;
