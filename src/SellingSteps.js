import RegisterForm from './RegisterForm';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function SellingSteps({ navigation }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="bg-light py-3 px-4">
        <h5 className="text-black fw-bold text-center">How to sell on Feasti</h5>
        <div class="stepper-wrapper">
          <div class="stepper-item completed">
            <div class="step-counter">1</div>
            <div class="step-name">
              <h6
                className="text-center mt-2 mb-3"
                style={{ fontWeight: 'bolder', color: '#666' }}
              >
                Get approved to cook
              </h6>
              <div className="text-center">
                <small className="step-description">
                  <a
                    className="text-primary text-decoration-none"
                    href="/become-chef/register"
                  >
                    Get Started
                  </a>{' '}
                  and submit a sample of your favorite dishes.
                </small>
              </div>
            </div>
          </div>
          <div class="stepper-item completed">
            <div class="step-counter">2</div>
            <div class="step-name">
              <h6
                className="text-center mt-2 mb-3"
                style={{ fontWeight: 'bolder', color: '#666' }}
              >
                Your Dishes Your Prices
              </h6>
              <div className="text-center">
                <small className="step-description">
                  Total Flexibility and control over your menu
                </small>
              </div>
            </div>
          </div>
          <div class="stepper-item completed">
            <div class="step-counter">3</div>
            <div class="step-name">
              <h6
                className="text-center mt-2 mb-3"
                style={{ fontWeight: 'bolder', color: '#666' }}
              >
                Set Your Own Schedule
              </h6>
              <div className="text-center">
                <small className="step-description">
                  You choose which days and times your menu is active
                </small>
              </div>
            </div>
          </div>
          <div class="stepper-item completed">
            <div class="step-counter">4</div>
            <div class="step-name">
              <h6
                className="text-center mt-2 mb-3"
                style={{ fontWeight: 'bolder', color: '#666' }}
              >
                Prepare Your Orders
              </h6>
              <div className="text-center">
                <small className="step-description">
                  Customers place orders, check recipe and quantity of meals and
                  cook in your kitchen
                </small>
              </div>
            </div>
          </div>
          <div class="stepper-item completed">
            <div class="step-counter">5</div>
            <div class="step-name">
              <h6
                className="text-center mt-2 mb-3"
                style={{ fontWeight: 'bolder', color: '#666' }}
              >
                Serve Your Customers
              </h6>
              <div className="text-center">
                <small className="step-description">
                  {' '}
                  We’ll help you identify the best delivery method available so
                  your customers can get their food safely and on time
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-item-center">
          <div
            className="col-12 text-center"
            style={{ justifyContent: 'center' }}
          >
            <button className="btn btn-danger mx-1" onClick={handleShow}>
              Sign up now
            </button>

            <a className="btn btn-primary mx-1" href="/contacts">
              Contact our team
            </a>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark color-white" closeButton>
          <Modal.Title className="text-white">Sign up now</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <div className="carousel-form">
            <RegisterForm />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
