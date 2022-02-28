import React from "react";
import Cash from "./assets/cash_icon.png";
import Happy from "./assets/yummy.jpg";
import Boss from "./assets/boss.png";
export default function WhyBecomeChef() {
  return (
    <div className="row mx-4 my-4">
      <div className="col-lg">
        <h2 className="text-danger font-weight-bold my-4">Why join Feasti?</h2>
        <div className="row my-4">
          <div className="col-sm-4">
            <img
              src={Cash}
              // className="img-thumbnail"
              alt="cash-outline"
              style={{ height: 160, width: 160, borderRadius: 80 }}
            />
            <h3 className="text-justify">Make real money</h3>
            <div className="text-justify">
              It’s completely free to apply. Many shefs make around $1,000 per
              week.
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src={Boss}
              alt="star-outline"
              style={{ height: 160, width: 160, borderRadius: 80 }}
            />
            <h3 className="text-justify">Be your own boss</h3>
            <div className="text-justify">
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
            <h3 className="text-justify">Serve happy customers</h3>
            <div className="text-justify">
              We’ll provide you with marketing support so you can share your
              food with customers across your community.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
