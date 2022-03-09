import React from "react";
import Cooking from "./assets/cooking.gif";
import FoodDelivery from "./assets/fooddelivery.gif";
import Explore from "./assets/foodsearch.gif";

export default function HowItWorks() {
  return (
    <>
      <div className="row mt-4 seven">
        <h2
          className="text-black text-center my-4 mb-4"
          style={{ fontWeight: "bolder" }}
        >
          How it works
        </h2>
      </div>
      <div className="row mt-4 text-center mx-4">
        <div className="col-sm-4 mx-1 text-center ">
          <img
            src={Explore}
            className="img-thumbnail"
            style={{ height: 240, width: 320 }}
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
            src={Cooking}
            className="img-thumbnail"
            style={{ height: 240, width: 320 }}
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
            src={FoodDelivery}
            className="img-thumbnail"
            style={{ height: 240, width: 320 }}
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
