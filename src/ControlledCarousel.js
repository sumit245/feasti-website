import React from "react";
import Img1 from "./assets/image.jpg";
import "./App.css";

export default function BannerCarousel() {
  return (
    // <div
    //   id="carouselExampleIndicators"
    //   className="carousel slide"
    //   data-bs-ride="carousel"
    // >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Img1}
            className="w-100"
            style={{ height: 480 }}
            alt="Slide 1"
          />
        </div>
        <div className="carousel-content">
          <h1 className="text-on-carousel">
            Authentic dishes.
            <br />
            Homemade.
            <br />
            Delivered.
          </h1>
        </div>
      </div>
    //* </div> */}
  );
}
