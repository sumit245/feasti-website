import React from "react";
import MobileStoreButton from "react-mobile-store-button/lib/MobileStoreButton";
import Img1 from "./assets/image.webp";
import ChefReview from "./ChefReview";
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
      <div className="row mx-2">
        <div>
          <h2 className="text-danger my-4" style={{fontWeight:"bolder"}} >Cooking safely</h2>
          <img
            src="https://cdn.shef.com/static/media/cooking-safely.7001665c.jpg"
            alt="chef-profile"
            className="img-thumbnail"
          />
          <div className="row my-5 mx-5 justify-content-evenly">
            <div className="col-sm-6">
              <img
                src="https://cdn.shef.com/static/media/Safety_Icon.1ef71965.svg"
                className="sc-jdPOdc cuvzLK"
                alt="food-safety-training"
              />
              <h3 className="text-dark my-4">Food safety training</h3>
              <div className="col-sm-10">
                All applicants are required to pass an accredited food safety
                certification exam before joining our cooking community. Once
                you pass this course, you’ll be one step closer to cooking and
                selling your food safely!
              </div>
            </div>
            <div className="col-sm-6">
              <img
                src="https://cdn.shef.com/static/media/Trust_Icon.0c7a428b.svg"
                alt="food-safety-instrument"
              />
              <h3 className="text-dark my-4">Trusted by thousands of people</h3>
              <div className="col-sm-10">
                Feasti is used every day by thousands of customers around the
                United States. We work hard to help our shefs feel taken care of
                and supported throughout the entire process.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
