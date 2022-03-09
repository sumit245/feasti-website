import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import BannerCarousel from "./ControlledCarousel";
import HowItWorks from "./HowItWorks";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Becomeachef from "./Becomeachef";
import Register from "./Register";
import Footer from "./Footer";
import PrivacyPoilcy from "./PrivacyPoilcy";
import TermsofService from "./TermsofService";
import Review from "./Review";

function Home() {
  return (
    <div>
      <Header />
      <BannerCarousel />
      <HowItWorks />
      <Review />
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
          <Route path="/privacy-policy" element={<PrivacyPoilcy />} />
          <Route path="/terms-of-service" element={<TermsofService />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
