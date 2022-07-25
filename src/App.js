import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerCarousel from './ControlledCarousel';
import HowItWorks from './HowItWorks';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Becomeachef from './Becomeachef';
import Register from './Register';
import Footer from './Footer';
import PrivacyPolicy from './PrivacyPolicy';
import TermsofService from './TermsofService';
import Values from './home/Values';
import Featured from './home/Featured';
import MeettheChef from './home/MeettheChef';
import Testimonials from './home/testimonials';
import Contacts from './Contacts';
import HeaderTop from './home/HeaderTop';
import HomeSafety from './home/HomeSafety';

function Home() {
  return (
    <div style={{ width: '100%' }}>
      <HeaderTop />
      <Header />
      <BannerCarousel />
      <HowItWorks />
      <Values />
      <MeettheChef />
      <Featured />
      <HomeSafety/>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="become-chef" element={<Becomeachef />} />
          <Route path="/become-chef/register" element={<Register />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsofService />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
