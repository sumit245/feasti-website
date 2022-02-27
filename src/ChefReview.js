import React from "react";

export default function ChefReview() {
  return (
    <div>
      <div className="row mx-4 my-4">
        <div className="col-sm-6">
          <img
            src="https://cdn.shef.com/static/media/supriya.aa5064d1.jpg"
            className="img-fluid"
            alt="chef-1"
          />
        </div>
        <div className="col-sm-6">
          <div className="text-justify">
            <img
              src="https://cdn.shef.com/static/media/Quote_Icon.5d24a819.svg"
              className="sc-mlOqW flXQvI"
              alt="chef-1"
            />
            <p className="lead">
              I consider this a dream job. I get to do what I love every day.
            </p>
            <div className="text">Supriya, Bay Area | Joined in 2020</div>
          </div>
        </div>
      </div>
      <div className="row mx-4 my-4">
        <div className="col-sm-6">
          <img
            src="https://cdn.shef.com/static/media/Quote_Icon.5d24a819.svg"
            className="sc-mlOqW flXQvI"
            alt="text"
          />
          <p className="lead">
            I opened up a momo restaurant in Kathmandu, Nepal. When I moved to
            the US, I wanted to work in the food industry — that's when I found
            Shef.
          </p>
          <div className="text">Deep, Bay Area | Joined in 2019</div>
        </div>
        <div className="col-sm-6">
          <div className="sc-bWNSNh iSVwls sc-kQEKhi sc-ekBFwZ gvQcQZ ezWqGj">
            <img
              src="https://cdn.shef.com/static/media/deep.b3d48870.png"
              className="img-fluid"
              alt="chef-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
