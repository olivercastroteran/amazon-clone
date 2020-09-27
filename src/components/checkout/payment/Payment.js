import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../store/StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import './Payment.css';

const Payment = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React St</p>
            <p>React Land, CA</p>
          </div>
        </div>

        {/* payment section - Review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {/*  Show basket products */}
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id + Math.random()}
                id={item.id}
                imgSrc={item.imgSrc}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* Stripe Magic */}</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
