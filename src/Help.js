import React from 'react';
import Bulb from './assets/Bulb_Icon.svg';
import Chat from './assets/Talk_Icon.svg';
import Food from './assets/Food_Icon.svg';
import Store from './assets/Store_Icon.svg';

export default function Help() {
  return (
    <section className="pt-5 pb-5">
      <div className="row mt-4 justify-content-center">
        <h4 className="text-black my-4 text-center">
          An extra hand in the kitchen…
        </h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <div className="icon-bg">
                  <img
                    src={Chat}
                    alt="cht-with-us"
                    className="icon-center my-2"
                  />
                </div>
              </div>
              <div>
                <h6 className="text-dark fw-bold">
                  Support via email and text
                </h6>
                <span className="text-justify">
                  Reach out to our Cook Support Team via email or text message
                  anytime, and a representative will get back to you asap!
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-4">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <div className="icon-bg">
                  <img src={Food} alt="passion" className="icon-center my-2" />
                </div>
              </div>
              <div>
                <h6 className="text-dark fw-bold">
                  Software to handle the business stuff
                </h6>
                <span className="text-justify">
                  Spend more time on your passion and craft, and less time
                  dealing with calls, texts, schedules and payments. Our
                  software handles all of that for you!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row  my-3">
          <div className="col-6 my-4">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <div className="icon-bg">
                  <img
                    src={Store}
                    alt="shop-online"
                    className="icon-center my-2"
                  />
                </div>
              </div>
              <div>
                <h6 className="text-dark fw-bold">
                  Craft your menu
                </h6>
                <span className="text-justify">
                  Our team has expert photographers on staff to help you take
                  beautiful photos of your dishes.
                  <br />
                  We’ll help you craft a compelling menu and provide tips on
                  pricing your menu items.
                </span>
              </div>
            </div>
          </div>
          <div className="col-6 my-4">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <div className="icon-bg">
                  <img src={Bulb} alt="idea" className="icon-center my-2" />
                </div>
              </div>
              <div>
                <h6 className="text-dark fw-bold">
                  Get advice
                </h6>
                <span className="text-justify">
                  Any-time access to our extensive knowledgebase, full of
                  helpful articles and video tutorials on how to grow your home
                  cooking business.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </section>
  );
}
