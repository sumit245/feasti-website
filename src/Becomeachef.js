import React, { useState, useEffect } from 'react';
import HeroChef from './becomeachef/HeroChef';
import ChefReview from './ChefReview';
import FoodSafety from './FoodSafety';
import Footer from './Footer';
import HeaderTop from './home/HeaderTop';
import Header from './Header';
import Help from './Help';
import PaymentStructure from './PaymentStructure';
import SellingSteps from './SellingSteps';
import ChefFeatured from './becomeachef/ChefFeatured';
import Modal from 'react-bootstrap/Modal';
import FAQ from "./becomeachef/FAQ"
import RegisterForm from './RegisterForm';
import Howtosell from './becomeachef/Howtosell'

export default function Becomeachef() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <HeaderTop />
        <Header />
        <HeroChef />
        <ChefReview />
        <Howtosell/>
        {/* <SellingSteps /> */}
        <PaymentStructure />
        <Help />
        <ChefFeatured />
        <FoodSafety />
        <FAQ />
        <Footer />
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
    </>
  );
}
