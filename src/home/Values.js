import React from "react";
import Lunch from "../assets/lunch.png";
import ChefCommunity from "../assets/chefcommunity.webp";
import Nourishing from "../assets/nourishing.webp";
import Chef from "../assets/chef.png"

export default function Values() {
  return (
    <section className="mx-5 my-4 py-5">
      <div className="seven">
        <h2
          className="text-black text-center my-4 mb-4"
          style={{ fontWeight: "bolder" }}
        >
          Our Values
        </h2>
      </div>
      <div className="our-values-container">
        <div className="row">
          <div className="col-sm-3 our-values-content">
            <div className="text-center">
              <img
                src={Lunch}
                alt="Sharing joy of homemade food"
                style={{
                  maxWidth: 320,
                  maxHeight: 180,
                  width: "auto",
                  height: "auto",
                }}
              />
              <div className=" mt-2 text-center">
                <h5>Sharing Joy</h5>
                <p>Enjoy community through food.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 our-values-content1 mx-1">
            <div className="text-center">
              <img
                src={ChefCommunity}
                alt="Connecting community by homemade food"
                style={{
                  maxWidth: 320,
                  maxHeight: 180,
                  width: "auto",
                  height: "auto",
                }}
              />
              <div className=" mt-2 text-center">
                <h5>Connecting Community</h5>
                <p>Real people. Authentic passion</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 our-values-content2 mx-1">
            <div className="text-center">
              <img
                src={Nourishing}
                alt="Nourishing Neighbors"
                style={{
                  maxWidth: 320,
                  maxHeight: 180,
                  width: "auto",
                  height: "auto",
                }}
              />
              <div className=" mt-2 text-center">
                <h5>Nourishing Neighbors</h5>
                <p>Eat wholesome. Eat better.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 our-values-content3">
            <div className="text-center">
              <img
                src={Chef}
                alt="Earn money by cooking"
              />
              <div className="mt-2 text-center">
                <h5>Cultivating Opportunity</h5>
                <p>Empowering HomeCooks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
