'use client';

import { useState } from 'react';

const CheckoutForm = ({ productDetails }:any) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e:any) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const orderData = {
      user: userData,
      product: productDetails,
    };

    await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    alert('Order submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout Form</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Checkout</button>
    </form>
  );
};

export default CheckoutForm;
