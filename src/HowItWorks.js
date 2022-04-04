import React from "react";
import Cooking from "./assets/cooking.gif";
import FoodDelivery from "./assets/fooddelivery.gif";
import Explore from "./assets/foodsearch.gif";

export default function HowItWorks() {
  return (
    <>
      <div className="row mt-4 justify-content-center">
        <div className="header-container">
          <h2 className="text-black">
            How it works
          </h2>
        </div>
      </div>
      <div className="row mt-4 mx-4">
        <div className="col-sm-4 text-center ">
          <img
            src={Explore}
            className="img-thumbnail"
            style={{ height: 240, width: 320 }}
            alt=""
          />
          <h4 className="text-center my-3" style={{ color: "#666" }}>
            Explore
          </h4>
          <p className="text-center">
            Discover homemade meals near you. All of our HomeCooks are carefully
            vetted & food safety certified. <br />
          </p>
        </div>
        <div className="col-sm-4 text-center">
          <img
            src={Cooking}
            className="img-thumbnail"
            style={{ height: 240, width: 320 }}
            alt=""
          />
          <h4 className="text-center my-3" style={{ color: "#666" }}>
            Easy Subscription
          </h4>
          <p className="text-center">
            Lunch and Dinner made super easy. Choose weekly or monthly plans,
            Add to your cart and checkout – it’s that easy!
          </p>
        </div>
        <div className="col-sm-4 text-center">
          <img
            src={FoodDelivery}
            className="img-thumbnail"
            style={{ height: 240, width: 320 }}
            alt=""
          />
          <h4 className="text-center my-3" style={{ color: "#666" }}>
            Enjoy
          </h4>
          <p className="text-center">
            Affordable healthy meals, Get your order delivered directly to your
            door, so you can eat worry-free, every day.
          </p>
        </div>
      </div>
    </>
  );
}
