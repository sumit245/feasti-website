import React from "react";
import Header from "./Header";
import Help from "./Help";
import SellingSteps from "./SellingSteps";
import WhatisChef from "./WhatisChef";
import WhyBecomeChef from "./WhyBecomeChef";
import Img1 from "./assets/image.webp";
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
        <img
          src={Img1}
          alt="banner"
          className="img-fluid"
          style={{ height: "720px", width: "100%" }}
        />
      </div>
      <WhatisChef />
      <WhyBecomeChef />
      <SellingSteps />
      <Help />
      <Footer />
    </div>
  );
}
