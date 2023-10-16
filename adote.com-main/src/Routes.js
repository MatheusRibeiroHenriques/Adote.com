import { Route, Routes } from 'react-router-dom';

import Banner from './components/Banner';
import AdoptionArea from './components/AdoptionArea';
import ContactArea from './components/ContactArea';
import DonationAarea from './components/DonationArea';
import AboutUs from './components/AboutUs';
import LoginArea from './components/LoginArea';
import RegistrationArea from './components/RegistrationArea';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/adocao" element={<AdoptionArea />} />
            <Route path="/contact" element={<ContactArea />} />
            <Route path="/doar" element={<DonationAarea />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<LoginArea />} />
            <Route path="/register" element={<RegistrationArea />} />
        </Routes>

    );
}

export default Router;