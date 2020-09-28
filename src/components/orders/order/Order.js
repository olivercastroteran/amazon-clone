import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from '../../checkout/checkoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.createdAt).format('MMMM Do YYYY, h:mma')}</p>
      <small className="order__id">{order.id}</small>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id + Math.random()}
          id={item.id}
          imgSrc={item.imgSrc}
          title={item.title}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
};

export default Order;
