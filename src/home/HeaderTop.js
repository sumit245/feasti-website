import React, { useEffect, useState } from 'react';

export default function HeaderTop() {
  const [discount, setdiscount] = useState(0);
  // const getDiscount=()=>{
  //   fetch('/api/')
  // }
  return (
    <div className="container-fluid text-center pt-0 headertop">
      <span className='py-0'>Get 20% Discount on first order</span>
    </div>
  );
}
