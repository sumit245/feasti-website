import React from "react";

export default function Help() {
  return (
    <div>
      <div className="row mx-2 my-5">
        <h2
          className="text-danger my-4 text-center"
          style={{ fontWeight: "bolder" }}
        >
          Help when you need it
        </h2>
        <div className="col-sm-6 my-4">
          <img
            src="https://cdn.shef.com/static/media/Talk_Icon.a0654cac.svg"
            alt="cht-with-us"
          />
          <h3 className="text-dark my-4">Talk to us</h3>
          <div className="text-justify">
            Reach out to our customer support whenever you have an issue.
            <br />
            <br />
            We’re only a quick email or text away. Our team looks forward to
            hearing from you and answering your questions.
          </div>
        </div>
        <div className="col-sm-6 my-4">
          <img
            src="https://cdn.shef.com/static/media/Food_Icon.71ea0c27.svg"
            alt="passion"
          />
          <h3 className="text-dark my-4">Pursue your passion</h3>
          <div>
            We’ll help you with payments, logistics and customer support so
            <br />
            you can focus on what you love: cooking amazing food.
            <br />
            <br />
            We’ll also provide you with marketing support so that customers can
            fall in love with your food from day one.
          </div>
        </div>
        <div className="col-sm-6 mt-5 my-4">
          <img
            src="https://cdn.shef.com/static/media/Store_Icon.54f36f31.svg"
            alt="shop-online"
          />
          <h3 className="text-dark my-4">Craft your menu</h3>
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
          <img
            src="https://cdn.shef.com/static/media/Bulb_Icon.d56589f9.svg"
            alt="idea"
          />
          <h3 className="text-dark my-4">Get advice</h3>
          <div>
            We have hundreds of tips and data points available for you to use
            when designing your food business.
            <br />
            Join our weekly informational calls to learn how to improve your
            menus and build a successful business on Feasti.
          </div>
        </div>
      </div>
    </div>
  );
}
