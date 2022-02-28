import React from "react";

export default function SellingSteps() {
  return (
    <div>
      <div className="row mx-1 my-4">
        <h2 className="text-danger my-5" style={{ fontWeight: "bolder" }}>
          How to sell on Shef
        </h2>
        <div className="col-sm-3">
          <img
            src="https://cdn.shef.com/static/media/step-1.9ada50ca.png"
            className="img-thumbnail"
            alt="step-1"
          />
          <h2
            className="text-justify text-danger my-3"
            style={{ fontWeight: "bolder" }}
          >
            1
          </h2>
          <h5
            className="text-justify text-dark mt-2 mb-3"
            style={{ fontWeight: "bolder" }}
          >
            Get approved to cook
          </h5>
          <div className="text-justify">
            <a className="text-primary" href="/become-chef/register">
              Sign up
            </a>{" "}
            and submit a sample of your favorite dishes. Pass the food tasting,
            complete an accredited food safety exam, and choose your menu of
            dishes.
          </div>
        </div>
        <div className="col-sm-3">
          <img
            src="https://cdn.shef.com/static/media/step-2.eba3fb2b.png"
            className="img-thumbnail"
            alt="step-2"
          />
          <h2
            className="text-justify text-danger my-3"
            style={{ fontWeight: "bolder" }}
          >
            2
          </h2>
          <h5
            className="text-justify text-dark mt-2 mb-3"
            style={{ fontWeight: "bolder" }}
          >
            Pick your schedule
          </h5>
          <div className="text-justify">
            Choose the days you’d like to cook. As little or as much as you’d
            like.
          </div>
        </div>
        <div className="col-sm-3">
          <img
            src="https://cdn.shef.com/static/media/step-3.d5a13737.png"
            className="img-thumbnail"
            alt="step-3"
          />
          <h2
            className="text-justify text-danger my-3"
            style={{ fontWeight: "bolder" }}
          >
            3
          </h2>
          <h5
            className="text-justify text-dark mt-2 mb-3"
            style={{ fontWeight: "bolder" }}
          >
            Prepare your orders
          </h5>
          <div className="text-justify">
            Customers can start ordering from you on Shef. They’ll order at
            least a day in advance so you have enough time to get ingredients
            and prepare their dishes.
          </div>
        </div>
        <div className="col-sm-3">
          <img
            src="https://cdn.shef.com/static/media/step-6.f2045f8e.png"
            className="img-thumbnail"
            alt="step-4"
          />
          <h2
            className="text-justify text-danger my-3"
            style={{ fontWeight: "bolder" }}
          >
            4
          </h2>
          <h5
            className="text-justify text-dark mt-2 mb-3"
            style={{ fontWeight: "bolder" }}
          >
            Serve your customers
          </h5>
          <div className="text-justify">
            We’ll help you identify the best delivery method available so your
            customers can get their food safely and on time.¹
          </div>
        </div>
        {/* </div> */}
        {/* <div className="sc-cBYayr eVPJDi">
            <img
              src="https://cdn.shef.com/static/media/Arrow.89abd840.svg"
              direction="left"
              className="sc-kpXpMQ djbXgd"
            />
            <img
              src="https://cdn.shef.com/static/media/Arrow.89abd840.svg"
              direction="right"
              className="sc-kpXpMQ eLEqbo"
            />
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
