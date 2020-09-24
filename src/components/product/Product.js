import React from 'react';
import './Product.css';

const Product = ({ title, imgSrc, price, rating }) => {
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
              <span role="img" aria-label="accessible">
                &#11088;
              </span>
            ))}
        </div>
      </div>

      <img src={imgSrc} alt="product-img" />

      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
