import React from "react";
import MobileStoreButton from "react-mobile-store-button/lib/MobileStoreButton";
import Img1 from "./assets/image.webp";
import ChefReview from "./ChefReview";
import FoodSafety from "./FoodSafety";
import Footer from "./Footer";
import Header from "./Header";
import Help from "./Help";
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
          <h1 className="text-on-carousel">
            <br />
            Earn money doing what <br />
            you love
          </h1>
          <p className="lead">
            <a href="/become-chef/register" className="text-info">
              Sign up
            </a>{" "}
            to be your own boss and cook whenever you want.
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
      </div>
      <WhatisChef />
      <WhyBecomeChef />
      <ChefReview />
      <SellingSteps />
      <Help />
      <FoodSafety />
      <Footer />
    </div>
  );
}
