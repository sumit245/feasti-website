import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import BannerCarousel from './ControlledCarousel';
import Becomeachef from './Becomeachef';
import HowItWorks from './HowItWorks';
import Register from './Register';
import Footer from './Footer';
import PrivacyPolicy from './PrivacyPolicy';
import TermsofService from './TermsofService';
import Contacts from './Contacts';
import HeaderTop from './home/HeaderTop';
import HomeSafety from './home/HomeSafety';
import AdminCoupon from './home/AdminCoupon';
import Values from './home/Values';
import Featured from './home/Featured';
import MeettheChef from './home/MeettheChef';

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    if (componentMounted) {
      setShow(true);
    }
    return () => {
      componentMounted = false;
    };
  }, []);

  const handleClose = (state) => setShow(state);

  return (
    <div style={{ width: '100%' }}>
      {show ? (
        <AdminCoupon visible={show} closer={handleClose} />
      ) : (
        <div>
          <HeaderTop />
          <Header />
          <BannerCarousel />
          <HowItWorks />
          <Values />
          <MeettheChef />
          <Featured />
          <HomeSafety />
          <Footer />
        </div>
      )}
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
