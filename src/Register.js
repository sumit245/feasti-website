import RegisterForm from './RegisterForm';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
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
