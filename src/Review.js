import React from "react";
import Noodles from "./assets/noodles.jpg";
import Omlette from "./assets/omlette.jpg";
import Perri from "./assets/perri.jpeg";
export default function Review() {
  return (
    <div className="row mx-1">
      <div className="seven">
        <h2
          className="text-black my-5 text-center"
          style={{ fontWeight: "bolder" }}
        >
          Lots of Happy Customers
        </h2>
      </div>

      <div className="row justify-content-between">
        <div className="card my-2 p-1 col-sm-4">
          <img
            src={Omlette}
            alt="quotes"
            className="card-img-top img-thumbnail"
          />
          <div className="card-body">
            <h6 className="card-title">Henry in Los Angeles</h6>
            <p className="mt-2 card-text text-justify">
              The noodles were perfectly made! Wonderful consistency and full of
              flavor. The salad was an explosion of flavors, absolutely
              wonderful. Each bite delivered a rainbow of different (but very
              complementary) flavors.
            </p>
          </div>
        </div>
        <div className="card bg-danger my-2 p-1 col-sm-4">
          <img
            src={Noodles}
            alt="five star food"
            className="card-img-top img-thumbnail"
          />
          <div className="card-body">
            <h6 className="card-title text-white">Annette in Alhambra</h6>
            <p className="mt-2 card-text text-justify text-white">
              Channi's food was so good, I spread my order over three days to
              eat so I could enjoy. Her naan was uber good, as were her
              chutneys. I almost cried when I had my last spoonful!
            </p>
          </div>
        </div>
        <div className="card my-2 p-1 col-sm-4">
          <img
            src={Perri}
            alt="five star food"
            className="card-img-body img-thumbnail"
          />
          <div className="card-body">
            <h6 className="card-title">Karren in Glendale</h6>
            <p className="mt-2 card-text text-justify">
              Arguably the BEST tacos I've ever had. My kids, who "were not
              hungry", cleaned out their plates the second it was served. Will
              definitely be ordering this dish on the weekly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
