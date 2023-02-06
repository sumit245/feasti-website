import React from 'react';
import Explore from '../assets/eduntrain.webp';
import Cooking from '../assets/trustworthy.jpg';

export default function HomeSafety() {
  return (
    <div className="container mt-4">
      <h4 className="text-black fw-bold text-center">
        Our commitments to food safety
      </h4>
      <div className="my-4 mx-2">
        <p className="text-center">
          {' '}
          We strive to provide you with fresh, homemade dishes that we would
          serve our families. Ensuring that our customers receive high-quality
          meals that are safe to eat.
          <br />
          {/* <br />
          <br /> */}
          We have a comprehensive safety plan designed to ensure that food
          safety controls are effectively applied at every step of our supply
          chain, from the chefs' kitchens to your doorstep.
        </p>
      </div>

      <div className="row my-4">
        <div className="col-lg-4 col-sm-12 text-center">
          <img
            src={Explore}
            className="border rounded-circle"
            style={{ height: 220, width: 220 }}
            alt=""
          />
        </div>
        <div className="col-lg-8 col-sm-12 text-center">
          <div>
            <h6 className="text-justify text-dark fw-bold">
              1. Feasti home chef training and education
            </h6>
            <p className="text-justify">
              At Feasti, we are committed to helping ensure that your food
              will always be safe to eat. All chefs are required to pass an
              accredited food safety certification exam and comply with all
              local laws and regulations.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-4 col-sm-12 text-center">
          <img
            src={Cooking}
            className="border rounded-circle"
            alt="chef cooking"
          />
        </div>
        <div className="col-sm-12 col-lg-8 text-center ">
          <div>
            <h6 className="text-justify text-dark fw-bold">
              2. Trusted by thousands of people
            </h6>
            <p className="text-justify">
              Feasti is used every day by thousands of customers around the
              United States & Canada. We work hard to help our chefs feel
              taken care of and supported throughout the entire process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
