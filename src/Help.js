import React from "react";
import Bulb from "./assets/Bulb_Icon.svg";
import Chat from "./assets/Talk_Icon.svg"
import Food from "./assets/Food_Icon.svg"
import Store from "./assets/Store_Icon.svg"

export default function Help() {
  return (
    <>
      <div className="row mx-2 my-5 justify-content-center">
        <div className="header-container">
          <h2
            className="text-black my-4 text-center"
            style={{ fontWeight: "bolder" }}
          >
            An extra hand in the kitchen…
          </h2>
        </div>
      </div>
      <div className="row mx-4 my-3">
        <div className="col-sm-6 my-4">
          <img
            src={Chat}
            alt="cht-with-us"
          />
          <h3 className="my-4" style={{ color: "#666" }}>Support via email and text</h3>
          <div className="text-justify">
            Reach out to our Cook Support Team via email or text message
            anytime, and a representative will get back to you asap!
          </div>
        </div>
        <div className="col-sm-6 my-4">
          <img
            src={Food}
            alt="passion"
          />
          <h3 className="my-4" style={{ color: "#666" }}>
            Software to handle the business stuff
          </h3>
          <div>
            Spend more time on your passion and craft, and less time dealing
            with calls, texts, schedules and payments. Our software handles all
            of that for you!
          </div>
        </div>
      </div>
      <div className="row mx-4 my-3">
        <div className="col-sm-6 mt-5 my-4">
          <img
            src={Store}
            alt="shop-online"
          />
          <h3 className="my-4" style={{ color: "#666" }}>Craft your menu</h3>
          <div>
            Our team has expert photographers on staff to help you
            <br />
            take beautiful photos of your dishes.
            <br />
            We’ll help you craft a compelling menu and provide tips on pricing
            your menu items.
          </div>
        </div>
        <div className="col-sm-6 mt-5 my-4">
          <img src={Bulb} alt="idea" />
          <h3 className="my-4" style={{ color: "#666" }}>Get advice</h3>
          <div>
            Any-time access to our extensive knowledgebase, full of helpful
            articles and video tutorials on how to grow your home cooking
            business.
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
