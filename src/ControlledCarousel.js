import React from "react";
import Img1 from "./assets/imagebg.jpg";
import "./App.css";
import MobileStoreButton from "react-mobile-store-button/lib/MobileStoreButton";

export default function BannerCarousel() {
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  const androidUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  return (
    <div>
      <div className="carousel-content">
        <h1 className="text-on-carousel">
          Homemade Food.
          <br />
          Subscription based
          <br /> meal ordering platform
        </h1>
      </div>
      <img
        src={Img1}
        className="img-fluid"
        style={{ height: "700px", width: "100%" }}
        alt="background"
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
  );
}
