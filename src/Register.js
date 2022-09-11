import RegisterForm from './RegisterForm';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function Register() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeLabel="X" closeVariant="white">
        <Modal.Title>Sign up now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="carousel-form">
          <RegisterForm />
        </div>
      </Modal.Body>
    </Modal>
  );
}
