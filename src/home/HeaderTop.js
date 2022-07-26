import React, { useEffect, useState } from 'react';

export default function HeaderTop() {
  const [discount, setDiscount] = useState(0);
  const fetchAdminCoupon = async () => {
    const response = await fetch(
      'http://54.146.133.108:5000/api/admin-coupon/'
    );
    const data = await response.json();
    setDiscount(data.coupons[0].discount);
  };
  useEffect(() => {
    let componentMounted = true;
    if (componentMounted) {
      fetchAdminCoupon();
    }

    return () => {
      componentMounted = false;
    };
  }, []);
  

  return (
    <div className="container-fluid text-center pt-0 headertop">
      <span className="py-0">Get {discount} Discount on next order</span>
    </div>
  );
}
