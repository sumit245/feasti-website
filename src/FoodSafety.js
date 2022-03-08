import React from "react";

export default function FoodSafety() {
  return (
    <div className="row mx-2 my-4">
      <div>
        <div className="seven">
          <h2
            className="text-black text-center my-4"
            style={{ fontWeight: "bolder" }}
          >
            Cooking safely
          </h2>
        </div>

        <img
          src="https://cdn.shef.com/static/media/cooking-safely.7001665c.jpg"
          alt="chef-profile"
          className="img-thumbnail"
        />
        <div className="row my-5 mx-5 justify-content-evenly">
          <div className="col-sm-6">
            <img
              src="https://cdn.shef.com/static/media/Safety_Icon.1ef71965.svg"
              className="sc-jdPOdc cuvzLK"
              alt="food-safety-training"
            />
            <h3 className="text-dark my-4">Food safety training</h3>
            <div className="col-sm-10">
              All applicants are required to pass an accredited food safety
              certification exam before joining our cooking community. Once you
              pass this course, you’ll be one step closer to cooking and selling
              your food safely!
            </div>
          </div>
          <div className="col-sm-6">
            <img
              src="https://cdn.shef.com/static/media/Trust_Icon.0c7a428b.svg"
              alt="food-safety-instrument"
            />
            <h3 className="text-dark my-4">Trusted by thousands of people</h3>
            <div className="col-sm-10">
              Feasti is used every day by thousands of customers around the
              Canada. We work hard to help our shefs feel taken care of and
              supported throughout the entire process.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
