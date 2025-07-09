import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "./PageComponents/Navbar";
import First_LandingComponent from "./PageComponents/First_LandingComponent";

function Main() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/profile", {
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

  if (loading) return <div className="p-10">Loading your profile...</div>;

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-10 max-w-xl mx-auto shadow-lg bg-white rounded-xl mt-10">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          Welcome, {userData?.user}!
        </h1>
        <p className="text-gray-600 mb-2">
          <strong>User ID:</strong> {userData?.user}
        </p>
        {/* Add more profile details here if needed */}
      </div>

      <div className="mt-10">
        <First_LandingComponent />
      </div>
    </div>
  );
}

export default Main;
