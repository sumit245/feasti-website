import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

export default function AdminCoupon({ visible, closer }) {
  const [show, setShow] = useState(false);
  const [promo_code, setPromoCode] = useState('');
  const [discount, setDiscount] = useState('');
  const fetchAdminCoupon = async () => {
    const response = await fetch(
      'http://54.146.133.108:5000/api/admin-coupon/'
    );
    const data = await response.json();
    setDiscount(data.coupons[0].discount);
    setPromoCode(data.coupons[0].promo_code);
  };
  useEffect(() => {
    let componentMounted = true;
    if (componentMounted) {
      setShow(visible);
      fetchAdminCoupon();
    }
    return () => {
      componentMounted = false;
    };
  }, [visible]);
  const handleClose = () => {
    setShow(false);
    closer(false);
  };
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <button type="button" className="close-btn" onClick={handleClose}>
        <span>X</span>
      </button>
      <Modal.Body className="coupon">
        <div className="text-center">
          <div className="discount">
            <h1 className="discount-text">15</h1>
            <h1 className="discount-off">OFF</h1>
          </div>

          <p>Enjoy {discount} off on your next order</p>
          {/* <p> */}
          <h2 className="coupon-text">Use coupon code</h2>
          <h2 className="coupon-code"> {promo_code}</h2>
          {/* </p> */}
          <p>* Terms and Conditions applied</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
