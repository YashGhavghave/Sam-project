import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login/login'
import CharacterPage from '../components/GetRoom/PageComponents/CharacterPage';
import RegistrationForm from '../components/Register/RegistrationForm';
import RoomsPage from '../components/GetRoom/RoomsPage';
import Main from '../components/LandingPage/main';
import HotelPage from '../components/GetHotel/HotelPage';
import AboutPage from '../components/About/AboutPage';
import ConnectPage from '../components/ConnectUs/ConnectPage';

function Index() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route path='/player' element={<Player />} /> */}
      <Route path='/hotel' element={<HotelPage />} />
      <Route path='/main' element={<Main />} />
      <Route path='/register' element={<RegistrationForm />} />
      <Route path='/room' element={<RoomsPage />} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/connectus' element={<ConnectPage/>} />
      <Route path='/character/:id' element={<CharacterPage/>} />
    </Routes>
    </>
  );
}

export default Index;
