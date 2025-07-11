import { useParams } from 'react-router-dom';
import Navbar from '../../LandingPage/PageComponents/Navbar';
import { motion } from 'motion/react';

const ListContentAndLocation = [
  'Dong Su, South Korea', 'Ashborn, South Korea', 'Jinwoo Sung, South Korea',
  'Igris, South Korea', 'Bellion, South Korea', 'Beru, South Korea',
  'Sohan Akare, Central India', 'Nikhil Warkad, Central India',
  'Yash Tale, Central India', 'Aditya Jogdand, Central India',
];

const LocationList = [
  'https://www.google.com/maps/place/Nagpur,+Maharashtra/@21.1610858,79.0725101,12z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c0a5a31faf13:0x19b37d06d0bb3e2b!8m2!3d21.1458004!4d79.0881546!16zL20vMDJjOTht?entry=ttu'
];

const ListContent = [
  'Dong Su', 'Ashborn', 'Jinwoo Sung', 'Igris', 'Bellion',
  'Beru', 'Sohan Akare', 'Nikhil Warkad', 'Yash Tale', 'Aditya Jogdand'
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

const LandArea = ['2000', '1200', '2300', '4000', '3400', '2300', '1230', '3200', '4200', '3200'];

const Description = [
  `Discover a wide range of homes available for rent that suit every lifestyle and budget. Whether you're looking for a cozy studio, a spacious apartment, or a luxurious villa, we have the perfect rental options for you. Each property is carefully selected to offer comfort, convenience, and value  with features like modern interiors, secure neighborhoods, nearby schools, shopping areas, and public transport.

Start your new chapter in a place that feels like home. Browse listings, schedule visits, and find your ideal space made easy and hassle-free.`
];

function CharacterPage() {
  const { id } = useParams();
  const index = parseInt(id);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Image Section */}
      <motion.div
        className="relative w-full h-[70vh] mt-[15vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={ImageUrl[index]}
          alt={ListContent[index]}
          className="w-full h-full object-cover"
        />
        <motion.h1
          className="absolute top-[70%] left-0 h-[7%] w-[60vw] md:w-[25vw] rounded-r-full bg-white backdrop-invert text-2xl font-semibold font-sans flex items-center justify-center shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          {ListContent[index]}
        </motion.h1>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col items-start gap-5 px-10 mt-15 mb-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="text-2xl text-slate-700 w-full">
          <strong>Owner and Location:</strong> {ListContentAndLocation[index]}
        </div>

        <div className="text-2xl text-slate-700 w-full">
          <strong>Get Location With Map:</strong>
          <a
            href={LocationList[0]}
            className="hover:text-blue-500 ml-2 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        </div>

        <div className="text-2xl text-slate-700 w-full">
          <strong>Total Area:</strong> {LandArea[index]} sq.ft
        </div>

        <div className="text-2xl text-slate-700 w-full">
          <strong>Description:</strong>
        </div>

        <motion.div
          className="text-xl text-slate-700 w-full pl-4 border-l-4 border-blue-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          {Description[0]}
        </motion.div>

        <div className="text-2xl text-slate-700 w-full">
          <strong>Contact No.:</strong> +01 723xxxxxx45
        </div>
      </motion.div>

      <motion.button
        className="bg-red-500 mb-5 pt-2 pb-2 text-xl w-[30vw] relative left-[35vw] rounded-full hover:w-full hover:left-0 hover:rounded-none transition-all ease-out duration-300 text-white"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Connect with Owner
      </motion.button>

      <footer className="h-[40px] bg-gray-400 w-full flex items-center justify-center text-slate-600 text-lg">
        Student Nest
      </footer>
    </div>
  );
}

export default CharacterPage;
