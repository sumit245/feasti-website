import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import BannerCarousel from "./ControlledCarousel";
import HowItWorks from "./HowItWorks";
import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Becomeachef from "./Becomeachef";
import Register from "./Register";
import Footer from "./Footer";

function Home() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <BannerCarousel />
      </div>
      <div className="row">
        <HowItWorks />
      </div>
      <Footer/>
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
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
