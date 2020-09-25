import React from 'react';
import { useStateValue } from '../../store/StateProvider';
import './Product.css';

const Product = ({ id, title, imgSrc, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log('Basket: ', basket);
    //dispatch the item into store - global state
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        imgSrc: imgSrc,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={Math.random()} role="img" aria-label="accessible">
                &#11088;
              </span>
            ))}
        </div>
      </div>

      <img src={imgSrc} alt="product-img" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
