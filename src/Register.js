import React from "react";
import Header from "./Header";
import Help from "./Help";
import SellingSteps from "./SellingSteps";
import WhatisChef from "./WhatisChef";
import WhyBecomeChef from "./WhyBecomeChef";
import Img1 from "./assets/img1.jpeg";
import RegisterForm from "./RegisterForm";
import Footer from "./Footer";

export default function Register() {
  return (
    <div>
      <Header />
      <div>
        <div className="carousel-form">
          <RegisterForm />
        </div>
        <img src={Img1} alt="banner" className="img-fluid" />
      </div>
      <WhatisChef />
      <WhyBecomeChef />
      <SellingSteps />
      <Help />
      <Footer />
    </div>
  );
}
