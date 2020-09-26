import React from 'react';
import { useStateValue } from '../../../store/StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, imgSrc, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // console.log(basket);
    // remove itemo from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={imgSrc} alt="product img" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={Math.random()} role="img" aria-label="accessible">
                &#11088;
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
