import React from "react";
import Img1 from "./assets/img1.jpeg";
import Img2 from "./assets/img2.jpg";
import Img3 from "./assets/img3.jpg";
import "./App.css";

export default function BannerCarousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Img1}
            className="w-100"
            style={{ height: 480 }}
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Img2}
            className=" w-100"
            style={{ height: 480 }}
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Img3}
            className=" w-100"
            style={{ height: 480 }}
            alt="Slide 3"
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
    </div>
  );
}
