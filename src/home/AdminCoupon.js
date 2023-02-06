import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

export default function AdminCoupon({ visible, closer }) {
  const [show, setShow] = useState(false);
  const [promo_code, setPromoCode] = useState('');
  const [discount, setDiscount] = useState('');
  const fetchAdminCoupon = async () => {
    const response = await fetch('https://feasti.com/api/admin-coupon/');
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
        </div>
        <div className="text-center">
          <p >Enjoy {discount}% off on your next order</p>
        </div>

        <div className='d-flex align-items-center justify-content-center'>
          <h3 className='coupon-text mx-1'>Use coupon code</h3>
          <h3 className="coupon-code mx-1">{promo_code}</h3>
        </div>
        <p className='text-small'>* Terms and Conditions applied</p>
      </Modal.Body>
    </Modal>
  );
}
