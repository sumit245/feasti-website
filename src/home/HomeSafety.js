import React from 'react';
import Explore from '../assets/eduntrain.webp';
import Cooking from '../assets/trustworthy.jpg';

export default function HomeSafety() {
  return (
    <div className="row mx-1 my-4 mt-4">
      <div className="container mt-4">
        <h4 className="text-center text-black my-4">
          Our commitments to food safety
        </h4>
        <div className="container my-4" style={{maxWidth:"60%"}}>
          <p className="text-justify">
            {' '}
            We strive to provide you with fresh, homemade dishes that we would
            serve our families. Ensuring that our customers receive high-quality
            meals that are safe to eat.
            <br />
            <br/>
            <br/>
            We have a comprehensive safety plan designed to ensure that food
            safety controls are effectively applied at every step of our supply
            chain, from the chefs' kitchens to your doorstep.
          </p>
        </div>
        <div className="row align-items-center my-4">
          <div className="col-sm-8 justify-content-end">
            <div style={{ width: '60%', justifyContent: 'center' }}>
              <h6
                className="text-justify text-dark fw-bold"
                style={{ width: '80%', marginLeft: 276 }}
              >
                1. Feasti home chef training and education
              </h6>
              <p
                className="text-justify"
                style={{ width: '80%', marginLeft: 276 }}
              >
                At Feasti, we are committed to helping ensure that your food
                will always be safe to eat. All chefs are required to pass an
                accredited food safety certification exam and comply with all
                local laws and regulations.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src={Explore}
              className="border rounded-circle"
              style={{ height: 240, width: 240 }}
              alt=""
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
            />
          </div>
          <div className="col-sm-8">
            <div style={{ width: '60%' }}>
              <h6
                className="text-justify text-dark fw-bold"
                style={{ width: '80%', marginLeft: 276 }}
              >
                2. Trusted by thousands of people
              </h6>
              <p
                className="text-justify"
                style={{ width: '80%', marginLeft: 276 }}
              >
                Feasti is used every day by thousands of customers around the
                United States & Canada. We work hard to help our chefs feel
                taken care of and supported throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
