import React from "react";
import MobileStoreButton from "react-mobile-store-button/lib/MobileStoreButton";
import Img1 from "./assets/image.webp";
import ChefReview from "./ChefReview";
import FoodSafety from "./FoodSafety";
import Footer from "./Footer";
import Header from "./Header";
import Help from "./Help";
import PaymentStructure from "./PaymentStructure";
import SellingSteps from "./SellingSteps";
import WhatisChef from "./WhatisChef";
import WhyBecomeChef from "./WhyBecomeChef";

export default function Becomeachef() {
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  const androidUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  return (
    <div>
      <Header />
      <div>
        <div className="carousel-content">
          <h1 className="text-on-carousel" style={{ color: "#fff" }}>
            <br />
            Earn money doing <br />
            what you love
          </h1>
          <p className="lead" style={{color:"#fff"}}>
            Sign up to be your own boss and cook whenever you want.
          </p>
        </div>
        <img
          src={Img1}
          alt="banner"
          className="img-fluid"
          style={{ height: "720px", width: "100%" }}
        />

        <div
          style={{
            position: "absolute",
            left: "40%",
            top: "80%",
            flexDirection: "row",
          }}
          className="col-sm-6"
        >
          <MobileStoreButton
            store="ios"
            height={60}
            width={166}
            url={iOSUrl}
            linkProps={{ title: "Download Feasti" }}
          />
          <MobileStoreButton
            store="android"
            url={androidUrl}
            linkProps={{ title: "Download Feasti" }}
          />
        </div>
        <a
          href="/become-chef/register"
          className="btn btn-danger float-right"
          style={{
            borderRadius: 40,
            position: "absolute",
            left: "4%",
            width: 140,
            fontWeight:"bold",
            top: "69%",
          }}
        >
          Get Started
        </a>
      </div>
      <WhatisChef />
      <WhyBecomeChef />
      <ChefReview />
      <SellingSteps />
      <PaymentStructure />
      <Help />
      <FoodSafety />
      <div
        className="d-flex justify-content-center align-items-center h-100 py-4 mx-4"
        style={{
          borderTopColor: "#ddd",
          borderTopWidth: 1,
          borderTopStyle: "solid",
        }}
      >
        <h4 style={{ color: "gray", fontWeight: "bold" }}>
          Have more questions?{" "}
          <a
            href="mailto://support@feasti.com"
            className="text-decoration-none"
            style={{ color: "gray" }}
          >
            Email support@feasti.com
          </a>
        </h4>
      </div>
      <Footer />
    </div>
  );
}
