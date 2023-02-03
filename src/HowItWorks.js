import React from 'react';
import Cooking from './assets/cooking.gif';
import FoodDelivery from './assets/fooddelivery.gif';
import Explore from './assets/explore_food.png';

export default function HowItWorks() {
  return (
    <div className="container py-0 my-0">
      <h4 className="text-black fw-bold text-center">
        How it works?
      </h4>
      <div className="row align-items-center">
        <div className="col-sm-12 col-lg-8 text-center">
          <img
            src={Explore}
            style={{ height: 220, width: 220 }}
            alt="explore some foods"
            loading="lazy"
          />
          <h4 className="text-black fw-bold my-2">
            Explore
          </h4>
          <p className="text-center px-2 text-black">Specially sorted chefs from Feasti wants to share their mouth
            watering meal with you. Discover homemade meals near you.</p>
        </div>
        <div className="col-sm-12 col-lg-4 text-center">
          <img
            src={Cooking}
            style={{ height: 220, width: 220 }}
            alt="cooking foods"
            loading="lazy"
          />
          <h4 className="text-black fw-bold my-2">
            Easy Subscription
          </h4>
          <p className="text-center px-2 text-black">Lunch and Dinner made super easy. Choose weekly or monthly
            plans, Add to your cart and checkout – it’s that easy!</p>
        </div>
        <div className="col-sm-12 col-lg-4 text-center">
          <img
            src={FoodDelivery}
            style={{ height: 240, width: 240 }}
            alt="Deliver Food"
            loading="lazy"
          />
          <h4 className="text-black fw-bold my-2 h4">Enjoy</h4>
          <p className="text-center px-2 text-black">Affordable healthy meals, Get your order delivered directly to
            your door, so you can eat worry-free, every day.</p>
        </div>
      </div>
    </div>
  );
}
