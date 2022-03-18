import React from "react";

export default function SellingSteps() {
  return (
    <div className="bg-light py-3">
      <div className="row mx-1 my-4">
        <div className="seven">
          <h2
            className="text-black my-5 text-center"
            style={{ fontWeight: "bolder" }}
          >
            How to sell on Feasti
          </h2>
        </div>
      </div>
      <div className="row mx-5 ml-5">
        <div className="col-sm-2 mx-3">
          <img
            src="https://cdn.shef.com/static/media/step-1.9ada50ca.png"
            className="img-thumbnail"
            alt="step-1"
          />
          <h2
            className="text-justify  my-3"
            style={{ fontWeight: "bolder", color: "#ff6600" }}
          >
            1
          </h2>
          <h6
            className="text-justify text-dark mt-2 mb-3"
            style={{ fontWeight: "bolder" }}
          >
            Get approved to cook
          </h6>
          <div className="text-justify">
            <a
              className="text-primary text-decoration-none"
              href="/become-chef/register"
            >
              Get Started
            </a>{" "}
            and submit a sample of your favorite dishes.
          </div>
        </div>
        <div className="col-sm-2 mx-3">
          <img
            src="https://cdn.shef.com/static/media/step-2.eba3fb2b.png"
            className="img-thumbnail"
            alt="step-2"
          />
          <h2
            className="text-justify  my-3"
            style={{ fontWeight: "bolder", color: "#ff6600" }}
          >
            2
          </h2>
          <h6
            className="text-justify text-dark mt-2 mb-3"
            style={{ fontWeight: "bolder" }}
          >
            Your Dishes Your Prices
          </h6>
          <div className="text-justify">
            Total Flexibility and control over your menu
          </div>
        </div>
        <div className="col-sm-2 mx-3">
          <img
            src="https://cdn.shef.com/static/media/step-3.d5a13737.png"
            className="img-thumbnail"
            alt="step-3"
          />
          <h2
            className="text-justify my-3"
            style={{ fontWeight: "bolder", color: "#ff6600" }}
          >
            3
          </h2>
          <h6
            className="text-justify text-dark mt-2 mb-3"
            style={{ fontWeight: "bolder" }}
          >
            Set Your Own Schedule
          </h6>
          <div className="text-justify">
            You choose which days and times your menu is active
          </div>
        </div>
        <div className="col-sm-2 mx-3">
          <img
            src="https://cdn.shef.com/static/media/step-6.f2045f8e.png"
            className="img-thumbnail"
            alt="step-4"
          />
          <h2
            className="text-justify  my-3"
            style={{ fontWeight: "bolder", color: "#ff6600" }}
          >
            4
          </h2>
          <h6
            className="text-justify text-dark mt-2 mb-3"
            style={{ fontWeight: "bolder" }}
          >
            Prepare Your Orders
          </h6>
          <div className="text-justify">
            We’ll help you identify the best delivery method available so your
            customers can get their food safely and on time.
          </div>
        </div>
        <div className="col-sm-2 mx-3">
          <img
            src="https://cdn.shef.com/static/media/step-6.f2045f8e.png"
            className="img-thumbnail"
            alt="step-4"
          />
          <h2
            className="text-justify my-3"
            style={{ fontWeight: "bolder", color: "#ff6600" }}
          >
            5
          </h2>
          <h6
            className="text-justify text-dark mt-2 mb-3"
            style={{ fontWeight: "bolder" }}
          >
            Serve Your Customers
          </h6>
          <div className="text-justify">
            We’ll help you identify the best delivery method available so your
            customers can get their food safely and on time
          </div>
        </div>
      </div>
    </div>
  );
}
