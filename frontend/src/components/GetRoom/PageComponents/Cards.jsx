import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
  const ListContent = ['Dong Su, South Korea', 'Ashborn, South Korea', 'Jinwoo Sung, South Korea', 'Igris, South Korea', 'Bellion, South Korea', 'Beru, South Korea', 'Sohan Akare, Central India', 'Nikhil Warkad, Central India', 'Yash Tale, Central India', 'Aditya Jogdand, Central India',];
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
  const PriceList = ['1,000', '3,000', '1,500', '2,200', '4,200', '4,000', '5,000', '2,500', '1,100', '1,200']

  const array = () => {
    return ListContent.map((name, index) => (
      <Link to={`/character/${index}`}
        key={index}
        className='relative h-[300px] w-[400px] rounded-2xl bg-slate-200 hover:scale-105 transition-all duration-300 ease-out shadow-lg overflow-hidden'
      >
        <img
          src={ImageUrl[index]}
          alt={name}
          className='h-[70%] w-full object-cover rounded-t-2xl'
        />
        <h1 className='text-lg font-semibold text-center mt-2 font-sans'>{name}</h1>
        <h1 className='text-lg font-semibold text-center mt-2'>$ {PriceList[index]} per/month</h1>
      </Link>
    ));
  };

  return (
    <div className='h-auto flex justify-center items-center bg-white relative top-[15vh] pt-10 pb-20'>
      <div className='grid grid-cols-3 gap-8 relative top-[0vh]'>
        {array()}
      </div>
    </div>
  );
}

export default Cards;
