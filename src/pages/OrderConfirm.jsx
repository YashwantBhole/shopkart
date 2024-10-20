import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Import confirmation icon
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './OrderConfirm.css'; // Import custom CSS for animation

const OrderConfirm = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="mb-4">
        <FaCheckCircle className="confirm-icon animate" size={70} color="green" />
        <h1 className="mt-3">Order Confirmed!</h1>
        <p className="lead">Thank you for your purchase.</p>
      </div>

      <div className="mt-4">
        <button className="btn btn-primary me-3" onClick={() => window.location.href = '/shop'}>
          Continue Shopping
        </button>
        <button className="btn btn-secondary" onClick={() => window.location.href = '/track-order'}>
          Track Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirm;
