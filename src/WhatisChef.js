import React from "react";

export default function WhatisChef() {
  return (
    <div className="row mx-4 my-4">
      <div className="col-lg">
        <h2
          className="text-black text-center my-4 mb-4"
          style={{ fontWeight: "bolder" }}
        >
          What is Feasti?
        </h2>
        <div className="col-lg my-4">
          Feasti connects talented cooks with local customers.
          <br />
          <br />
          We believe in providing the feasti in our community — individuals who
          have always dreamt of building their own food business — the
          opportunity to make a meaningful income by doing what they love! We
          also believe that every person should have access to a wholesome,
          homemade meal at an affordable subscription price.
          <strong>
            Building a community devoted to economic empowerment and cultural
            inclusivity
          </strong>{" "}
          — that’s why we started Feasti.
        </div>
      </div>
    </div>
  );
}
