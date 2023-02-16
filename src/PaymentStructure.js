import React from 'react';
import Icon1 from './assets/icon-01.png';
import Icon2 from './assets/icon-02.png';
import Icon3 from './assets/icon-03.png';
import Icon4 from './assets/icon-04.png';
export default function PaymentStructure() {
  return (
    <div className="container my-5 ">
      <h5 className="text-center text-black fw-bold">Transparent fees, Direct payments</h5>
      <div className="row my-4">
        <div className="col-sm-12 col-md-6 my-2">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <img
                src={Icon4}
                alt="Direct-payment"
                className='icon-bg'
              />
            </div>
            <div>
              <h6 className="text-dark fw-bold">
                No fee to join Feasti
              </h6>
              <p className="text-justify">
                There is absolutely no fees to join Feasti. In fact, our team
                will guide you through the onboarding process and help you
                build your menu, at no charge.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 my-2">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <img
                src={Icon3}
                alt="icon-03"
                className='icon-bg'
              />
            </div>
            <div>
              <h6 className="text-dark fw-bold">
                We only make money if you make money
              </h6>
              <p className="text-justify">
                Feasti takes a flexible commmission on every transaction,
                which includes credit card transaction fees. There are no fees
                to host your menu.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 my-2">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <img
                src={Icon1}
                alt="icon-01"
                className='icon-bg'
              />
            </div>
            <div>
              <h6 className="text-dark fw-bold">
                Easy direct deposit setup
              </h6>
              <p className="text-justify">
                Easily connect your bank account to your Feasti cook account,
                and accept direct deposit payments for every dish that you
                sell. Track your earnings all in one place.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 my-2">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <img
                src={Icon2}
                alt="icon-02"
                className='icon-bg'
              />
            </div>
            <div>
              <h6 className="text-dark fw-bold">
                Get paid on every order
              </h6>
              <p className="desc-info">
                A direct deposit payment is sent your way for every order you
                hand off. These rolling payouts allow you to keep your
                business going with continuous cash flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
