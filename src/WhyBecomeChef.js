import React from "react";
import Cash from "./assets/cash_icon.png";
import Happy from "./assets/yummy.jpg";
import Boss from "./assets/boss.png";
export default function WhyBecomeChef() {
  return (
    <div className="row mx-4 my-4">
      <div className="row mt-4 justify-content-center">
        <div className="header-container">
          <h2
            className="text-black text-center"
            style={{ fontWeight: "bolder" }}
          >
            Why join Feasti?
          </h2>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-sm-4 mx-1 text-center"  style={{maxWidth:"32%"}}>
          <img
            src={Cash}
            alt="cash-outline"
            style={{ height: 160, width: 160, borderRadius: 80 }}
          />
          <h5 className="text-justify  my-3" style={{ color: "#666" }}>
            Make real money
          </h5>
          <div className="text-justify my-2">
            Turn your passion into profit, make cooking a steady source of
            income.
          </div>
        </div>
        <div className="col-sm-4 mx-1 text-center" style={{maxWidth:"32%"}}>
          <img
            src={Boss}
            alt="star-outline"
            style={{ height: 160, width: 160, borderRadius: 80 }}
          />
          <h5 className="text-justify  my-3" style={{ color: "#666" }}>
            Set Your Own Schedule
          </h5>
          <div className="text-justify my-2">
            Design your own menu, set your own prices and work when you want.
            We’ll help you with payments, logistics and customer support.
          </div>
        </div>
        <div className="col-sm-4 mx-1 text-center" style={{maxWidth:"32%"}}>
          <img
            src={Happy}
            alt="building"
            style={{ height: 160, width: 160, borderRadius: 80 }}
          />
          <h5 className="text-justify  my-3" style={{ color: "#666" }}>
            Serve happy customers
          </h5>
          <div className="text-justify my-2">
            We’ll provide you with marketing support so you can share your
            food with customers across your community.
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
