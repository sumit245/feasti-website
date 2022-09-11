import React from 'react';
import Cooking from './assets/cooking.gif';
import FoodDelivery from './assets/fooddelivery.gif';
import Explore from './assets/explore.png';

export default function HowItWorks() {
  return (
    <div className="row mx-1 my-4 mt-4">
      <div className="container mt-4">
        <div className="row align-items-center my-4">
          <div className="col-sm-8 justify-content-end">
            <div style={{ width: '60%', justifyContent: 'center' }}>
              <h4
                className="text-justify"
                style={{ width: '80%', marginLeft: 276 }}
              >
                {' '}
                Browse what's cooking in your neighborhood
              </h4>
              <p
                className="text-justify"
                style={{ width: '80%', marginLeft: 276 }}
              >
                Specially sorted chefs from Feasti wants to share their mouth
                watering meal with you. Discover homemade meals near you. All of
                our HomeCooks are carefully vetted & food safety certified.
              </p>
              <button className="btn btn-primary" style={{ marginLeft: 276 }}>
                Explore
              </button>
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src={Explore}
              className="border rounded-circle"
              style={{ height: 240, width: 240 }}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="row align-items-center my-4">
          <div className="col-sm-4 justify-content-end">
            <img
              src={Cooking}
              className="border rounded-circle"
              style={{ height: 240, width: 240, marginLeft: 276 }}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="col-sm-8">
            <div style={{ width: '60%' }}>
              <h4
                className="text-justify"
                style={{ width: '80%', marginLeft: 276 }}
              >
                Easy Subscription
              </h4>
              <p
                className="text-justify"
                style={{ width: '80%', marginLeft: 276 }}
              >
                Lunch and Dinner made super easy. Choose weekly or monthly
                plans, Add to your cart and checkout – it’s that easy!
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center my-4">
          <div className="col-sm-8 justify-content-end">
            <div style={{ width: '60%', justifyContent: 'center' }}>
              <h4
                className="text-justify"
                style={{ width: '80%', marginLeft: 276 }}
              >
                Enjoy
              </h4>
              <p
                className="text-justify"
                style={{ width: '80%', marginLeft: 276 }}
              >
                Affordable healthy meals, Get your order delivered directly to
                your door, so you can eat worry-free, every day.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src={FoodDelivery}
              className="border rounded-circle"
              style={{ height: 240, width: 240 }}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
