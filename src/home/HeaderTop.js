import React, { useEffect, useState } from 'react';

export default function HeaderTop() {
  const [discount, setDiscount] = useState(0);
  const fetchAdminCoupon = async () => {
    const response = await fetch('https://feasti.com/api/admin-coupon/');
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
    <div className="text-center pt-0 headertop">
      <span className="py-0">Get {discount} Discount on next order</span>
    </div>
  );
}
