import React from 'react';
import Trust from './assets/Trust_Icon.svg';
import Safety from './assets/Safety_Icon.svg';
export default function FoodSafety() {
  return (
    <div className="container">
      <h4 className="text-black text-center my-4">Cooking safely</h4>

      <div className="row my-5 mx-5 justify-content-evenly">
        <div className="col-sm-6">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="icon-bg">
                <img
                  src={Safety}
                  className="icon-center my-2"
                  alt="food-safety-training"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6 className="text-dark fw-bold">Food safety training</h6>
              <div className="text-justify">
                All applicants are required to pass an accredited food safety
                certification exam before joining our cooking community. Once
                you pass this course, you’ll be one step closer to cooking and
                selling your food safely!
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="icon-bg">
                <img
                  src={Trust}
                  alt="food-safety-instrument"
                  className="icon-center my-2"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6 className="text-dark fw-bold">
                Trusted by thousands of people
              </h6>
              <div className="text-justify">
                Feasti is used every day by thousands of customers around the
                Canada. We work hard to help our chefs feel taken care of and
                supported throughout the entire process.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
