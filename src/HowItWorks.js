import React from 'react';
import Cooking from './assets/cooking.gif';
import FoodDelivery from './assets/fooddelivery.gif';
import Explore from './assets/explore.png';

export default function HowItWorks() {
  return (
    <div className="row mx-1 my-4 mt-4">
      <div className="container mt-4">
        <div className="row align-items-center my-4">
          <div className="col-sm-12 col-lg-8">
              <h4 className="text-center">
                Browse what's cooking in your neighborhood
              </h4>
              <p
                className="text-justify"
                style={{ marginLeft: "2rem" }}
              >
                Specially sorted chefs from Feasti wants to share their mouth
                watering meal with you. Discover homemade meals near you. All of
                our HomeCooks are carefully vetted & food safety certified.
              </p>
              <button className="btn btn-primary" style={{ marginLeft: "2rem" }}>
                Explore
              </button>
          </div>
          <div className="col-sm-12 col-lg-4 text-center">
            <img
              src={Explore}
              className="border rounded-circle text-center"
              style={{ height: 240, width: 240 }}
              alt="explore  some foods"
              loading="lazy"
            />
          </div>
        </div>
        <div className="row align-items-center my-4">
          <div className="col-sm-12 col-lg-4 text-center">
            <img
              src={Cooking}
              className="border rounded-circle text-center"
              style={{ height: 240, width: 240, marginLeft: "2rem" }}
              alt="cooking foods"
              loading="lazy"
            />
          </div>
          <div className="col-sm-12 col-lg-8 text-center ">
            <h4 style={{ marginLeft: "2rem" }}>
                Easy Subscription
              </h4>
              <p
                className="text-justify"
                style={{ marginLeft: "2rem" }}
              >
                Lunch and Dinner made super easy. Choose weekly or monthly
                plans, Add to your cart and checkout – it’s that easy!
              </p>
          </div>
        </div>
        <div className="row align-items-center my-4">
          <div className="col-sm-12 col-lg-4">
            <div style={{ justifyContent: 'center' }}>
              <h4 className="text-center">Enjoy</h4>
              <p
                className="text-justify"
                style={{ marginLeft: "2rem" }}
              >
                Affordable healthy meals, Get your order delivered directly to
                your door, so you can eat worry-free, every day.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-8">
            <img
              src={FoodDelivery}
              className="border rounded-circle text-center"
              style={{ height: 240, width: 240 }}
              alt="Deliver Food"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
