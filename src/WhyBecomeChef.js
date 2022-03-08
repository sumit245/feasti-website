import React from "react";
import Cash from "./assets/cash_icon.png";
import Happy from "./assets/yummy.jpg";
import Boss from "./assets/boss.png";
export default function WhyBecomeChef() {
  return (
    <div className="row mx-4 my-4">
      <div className="col-lg my-4">
        <div className="seven">
          <h2
            className="text-black my-5 text-center"
            style={{ fontWeight: "bolder" }}
          >
            Why join Feasti?
          </h2>
        </div>

        <div className="row my-5">
          <div className="col-sm-4">
            <img
              src={Cash}
              alt="cash-outline"
              style={{ height: 160, width: 160, borderRadius: 80 }}
            />
            <h3 className="text-justify my-4" style={{ fontWeight: "bolder" }}>
              Make real money
            </h3>
            <div className="text-justify my-4">
              Turn your passion into profit, make cooking a steady source of
              income.
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src={Boss}
              alt="star-outline"
              style={{ height: 160, width: 160, borderRadius: 80 }}
            />
            <h3 className="text-justify my-4" style={{ fontWeight: "bolder" }}>
              Be your own boss
            </h3>
            <div className="text-justify my-4">
              Design your own menu, set your own prices and work when you want.
              We’ll help you with payments, logistics and customer support.
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src={Happy}
              alt="building"
              style={{ height: 160, width: 160, borderRadius: 80 }}
            />
            <h3 className="text-justify my-4" style={{ fontWeight: "bolder" }}>
              Serve happy customers
            </h3>
            <div className="text-justify my-4">
              We’ll provide you with marketing support so you can share your
              food with customers across your community.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
