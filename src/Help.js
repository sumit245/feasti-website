import React from 'react';
import Bulb from './assets/Bulb_Icon.svg';
import Chat from './assets/Talk_Icon.svg';
import Food from './assets/Food_Icon.svg';
import Store from './assets/Store_Icon.svg';

export default function Help() {
  return (
    <div className="container my-4">
      <h5 className="text-black fw-bold text-center">
        An extra hand in the kitchen…
      </h5>
      <div className="row mt-4">
        <div className="col-md-6 my-2">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1 mr-3">
              <div className="icon-bg">
                <img
                  src={Chat}
                  alt="chat-with-us"
                  className="icon-center my-2"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6 className="text-dark fw-bold">
                Support via email and text
              </h6>
              <p className="text-justify">
                Reach out to our Cook Support Team via email or text message
                anytime, and a representative will get back to you asap!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1 mr-3">
              <div className="icon-bg">
                <img
                  src={Food}
                  alt="passion"
                  className="icon-center my-2"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6 className="text-dark fw-bold">
                Software to handle the business stuff
              </h6>
              <p className="text-justify">
                Spend more time on your passion and craft, and less time
                dealing with calls, texts, schedules and payments. Our
                software handles all of that for you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 my-2">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1 mr-3">
              <div className="icon-bg">
                <img
                  src={Store}
                  alt="shop-online"
                  className="icon-center my-2"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6 className="text-dark fw-bold">Craft your menu</h6>
              <p className="text-justify">
                Our team has expert photographers on staff to help you take
                beautiful photos of your dishes.
                <br />
                We’ll help you craft a compelling menu and provide tips on
                pricing your menu items.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1 mr-3">
              <div className="icon-bg">
                <img
                  src={Bulb}
                  alt="idea"
                  className="icon-center my-2"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6 className="text-dark fw-bold">Get advice</h6>
              <p className="text-justify">
                Any-time access to our extensive knowledgebase, full of
                helpful articles and video tutorials on how to grow your home
                cooking business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
