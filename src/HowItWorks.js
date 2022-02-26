import React from "react";
import "./css/style.css";
import IMg1 from "./assets/img1.jpeg";

export default function HowItWorks() {
  return (
    <>
      <div className="row mt-4 ">
        <h1 className="text-center">How it works</h1>
      </div>
      <div className="row mt-4 text-center">
        <div className="col-sm-4 text-center mx-2">
          <img
            src={IMg1}
            className="img-thumbnail"
            style={{ height: 160, width: 160, borderRadius: 80 }}
            alt=""
          />
          <h4 className="text-center">
            <span className="navy">Choose a chef</span>
          </h4>
          <p className="text-center">
            All restaurants are food safety certified <br />
          </p>
        </div>
        <div className="col-sm-3 mx-2 text-center">
          <img
            src={IMg1}
            className="img-thumbnail"
            style={{ height: 160, width: 160, borderRadius: 80 }}
            alt=""
          />
          <h4 className="text-center">
            <span className="navy">Pick a plan</span>
          </h4>
          <p className="text-center">
            Order with the most flexible
            <br />
            subscription suiting your pocket
          </p>
        </div>
        <div className="col-sm-4 mx-2 text-center">
          <img
            src={IMg1}
            className="img-thumbnail"
            style={{ height: 160, width: 160, borderRadius: 80 }}
            alt=""
          />
          <h4 className="text-center">
            <span className="navy">Get your delivery </span>
          </h4>
          <p className="text-center">
            Get your meal arrived the place where <br />
            you are in the town
          </p>
        </div>
      </div>
    </>
  );
}
