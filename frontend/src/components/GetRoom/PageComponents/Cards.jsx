import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

function Cards() {
  const ListContent = [
    'Dong Su, South Korea', 'Ashborn, South Korea', 'Jinwoo Sung, South Korea',
    'Igris, South Korea', 'Bellion, South Korea', 'Beru, South Korea',
    'Sohan Akare, Central India', 'Nikhil Warkad, Central India',
    'Yash Tale, Central India', 'Aditya Jogdand, Central India',
  ];

  const ImageUrl = [
    'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg',
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
    'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg',
    'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
    'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg',
    'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg',
    'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg',
    'https://images.pexels.com/photos/259685/pexels-photo-259685.jpeg',
  ];

  const PriceList = ['1,000', '3,000', '1,500', '2,200', '4,200', '4,000', '5,000', '2,500', '1,100', '1,200'];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
    }),
  };

  return (
    <div className='h-auto flex justify-center items-center bg-white relative top-[15vh] pt-10 pb-20'>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
        initial='hidden'
        animate='visible'
      >
        {ListContent.map((name, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to={`/character/${index}`}
              className='block h-[300px] w-[400px] rounded-2xl bg-slate-200 shadow-xl overflow-hidden'
            >
              <img
                src={ImageUrl[index]}
                alt={name}
                className='h-[70%] w-full object-cover rounded-t-2xl'
              />
              <div className='p-3 text-center'>
                <h1 className='text-lg font-semibold font-sans'>{name}</h1>
                <h2 className='text-md mt-1 text-gray-700'>$ {PriceList[index]} per/month</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Cards;
