import Cooking from '../assets/cooking.gif';
import FoodDelivery from '../assets/enjoy.png';
import RegisterForm from '../RegisterForm';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function HowItWorks() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container my-4">
      <h4 className="text-black fw-bold text-center">
        How to sell?
      </h4>
      <div className="row align-items-center my-4">
        <div className="col-sm-12 col-lg-8 text-center my-4">
          <img
            src='https://www.fibe.in/static/productpage/instantcashpage/instantcash-hero-section.svg'
            style={{ height: 220, width: 220 }}
            alt="explore some foods"
            loading="lazy"
          />
          <h4 className="text-black fw-bold my-2">
            Get approved to cook
          </h4>
          <p className="text-center px-2 text-black">
            <small className="step-description">
              <a
                className="text-primary text-decoration-none"
                href="/become-chef/register"
              >
                Get Started
              </a>{' '}
              and submit a sample of your favorite dishes.
            </small>
          </p>
        </div>
        <div className="col-sm-12 col-lg-4 text-center my-4">
          <img
            src="https://previews.123rf.com/images/goodstudio/goodstudio2104/goodstudio210400407/168159823-happy-rich-and-wealthy-woman-counting-cash-young-lady-with-money-stacks-and-bags-wealth-abundance-ri.jpg"
            style={{ height: 220, width: 220 }}
            alt="cooking foods"
            loading="lazy"
          />
          <h4 className="text-black fw-bold my-2">
            Your Dishes Your Prices
          </h4>
          <p className="text-center px-2 text-black">
            <small className="step-description">
              Total Flexibility and control over your menu and money
            </small>
          </p>
        </div>
        <div className="col-sm-12 col-lg-4 text-center my-4">
          <img
            src="https://envoy.com/images/products/protect/how-it-works/02-set-schedule.svg"
            style={{ height: 240, width: 240 }}
            alt="Deliver Food"
            loading="lazy"
          />
          <h4 className="text-black fw-bold my-2 h4">Set Your Own Schedule</h4>
          <p className="text-center px-2 text-black">
            <small className="step-description">
              You choose which days and times your menu is active
            </small>
          </p>
        </div>
        <div className="col-sm-12 col-lg-4 text-center my-4">
          <img
            src={Cooking}
            style={{ height: 240, width: 240 }}
            alt="Deliver Food"
            loading="lazy"
          />
          <h4 className="text-black fw-bold my-2 h4">Prepare Your Orders</h4>
          <p className="text-center px-2 text-black">
            <small className="step-description">
              Customers place orders, check recipe and quantity of meals and
              cook in your kitchen
            </small>
          </p>
        </div>
        <div className="col-sm-12 col-lg-4 text-center my-4">
          <img
            src={FoodDelivery}
            style={{ height: 240, width: 240 }}
            alt="Deliver Food"
            loading="lazy"
          />
          <h4 className="text-black fw-bold my-2 h4">
            Serve Your Customers
          </h4>
          <p className="text-center px-2 text-black">
            <small className="step-description">
              {' '}
              We’ll help you identify the best delivery method available so
              your customers can get their food safely and on time
            </small>
          </p>
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
      <Modal show={show} onHide={handleClose} >
        <Modal.Header className="bg-dark text-white"
          closeButton >
          <Modal.Title className="text-white">Sign up now</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <div className="carousel-form">
            <RegisterForm />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
