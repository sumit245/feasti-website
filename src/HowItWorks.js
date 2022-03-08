import React from "react";
import IMg1 from "./assets/img1.jpeg";

export default function HowItWorks() {
  return (
    <>
      <div className="row mt-4 ">
        <h1 className="text-center">How it works</h1>
      </div>
      <div className="row mt-4 text-center">
        <div className="col-sm-4 mx-1 text-center ">
          <img
            src={IMg1}
            className="img-thumbnail"
            style={{ height: 160, width: 160, borderRadius: 80 }}
            alt=""
          />
          <h4 className="text-center">
            <span className="navy">Explore</span>
          </h4>
          <p className="text-center">
            Discover homemade meals near you. All of our HomeCooks are carefully
            vetted & food safety certified. <br />
          </p>
        </div>
        <div className="col-sm-3 mx-1 text-center">
          <img
            src={IMg1}
            className="img-thumbnail"
            style={{ height: 160, width: 160, borderRadius: 80 }}
            alt=""
          />
          <h4 className="text-center">
            <span className="navy">Order</span>
          </h4>
          <p className="text-center">
            Add dishes to your cart, select pickup or delivery date & time and
            checkout - it’s that easy!
          </p>
        </div>
        <div className="col-sm-4 mx-1 text-center">
          <img
            src={IMg1}
            className="img-thumbnail"
            style={{ height: 160, width: 160, borderRadius: 80 }}
            alt=""
          />
          <h4 className="text-center">
            <span className="navy">Enjoy</span>
          </h4>
          <p className="text-center">
            Do curbside pickup or get your order delivered directly to your
            door. Food is delivered hot and ready to eat!
          </p>
        </div>
      </div>
    </>
  );
}
