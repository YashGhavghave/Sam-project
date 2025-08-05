// src/components/Cards.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCloudinaryData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/roomsdata');
        setData(response.data);
      } catch (error) {
        console.error(error);
        alert('Error fetching data');
      }
    };

    fetchCloudinaryData();
  }, []);

  return (
    <div className="min-h-screen bg-white pt-[15vh] px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item, index) => (
        <Link to={`/details/${index}`} key={index}>
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={item.image}
              alt={`Room ${index}`}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4 text-slate-700 font-semibold text-lg">
              {item.description.slice(0, 80)}...
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
