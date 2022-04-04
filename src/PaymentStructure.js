import React from "react";
import Icon1 from "./assets/icon-01.png";
import Icon2 from "./assets/icon-02.png";
import Icon3 from "./assets/icon-03.png";
import Icon4 from "./assets/icon-04.png";
export default function PaymentStructure() {
  return (
    <section className=" pt-5 pb-5">
      <div className="row mt-4 justify-content-center">
        <div className="header-container">
          <h2 className="text-center text-black" style={{ fontWeight: "bolder" }}>
            Transparent fees, Direct payments
          </h2>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 my-4">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1 mr-3">
                <img
                  src={Icon4}
                  alt="Direct-payment"
                  style={{ height: 80, width: 80, marginRight: 8 }}
                />
              </div>
              <div>
                <h6 style={{ color: "#444", fontWeight: 'bold' }}>No fee to join Feasti</h6>
                <span className="text-justify">
                  {" "}
                  There is absolutely no fees to join Feasti. In fact, our team
                  will guide you through the onboarding process and help you
                  build your menu, at no charge.{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 my-4">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1 mr-3">
                <img
                  src={Icon3}
                  alt="icon-03"
                  style={{ height: 80, width: 80, marginRight: 8 }}
                />
              </div>
              <div>
                <h6 style={{ color: "#444", fontWeight: 'bold' }}>We only make money if you make money</h6>
                <span className="text-justify">
                  {" "}
                  Feasti takes a flexible commmission on every transaction,
                  which includes credit card transaction fees. There are no fees
                  to host your menu.{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 my-4">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1 mr-3">
                <img
                  src={Icon1}
                  alt="icon-01"
                  style={{ height: 80, width: 80, marginRight: 8 }}
                />
              </div>
              <div>
                <h6 style={{ color: "#444", fontWeight: 'bold' }}>Easy direct deposit setup</h6>
                <span className="text-justify">
                  {" "}
                  Easily connect your bank account to your Feasti cook account,
                  and accept direct deposit payments for every dish that you
                  sell. Track your earnings all in one place.{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 my-4">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1 mr-3">
                <img
                  src={Icon2}
                  alt="icon-02"
                  style={{ height: 80, width: 80, marginRight: 8 }}
                />
              </div>
              <div>
                <h6 style={{ color: "#444", fontWeight: 'bold' }}>Get paid on every order</h6>
                <span className="desc-info">
                  {" "}
                  A direct deposit payment is sent your way for every order you
                  hand off. These rolling payouts allow you to keep your
                  business going with continuous cash flow.{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
