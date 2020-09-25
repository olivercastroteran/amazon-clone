import React from 'react';
import Product from './product/Product';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            rating={4}
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="89893333"
            title="Fitbit Charge 4 With Built-in GPS"
            price={80.55}
            rating={4}
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="67893426"
            title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
            price={1200.99}
            rating={5}
            imgSrc="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg"
          />
          <Product
            id="73282018"
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
            price={89.99}
            rating={4}
            imgSrc="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"
          />
          <Product
            id="23281018"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={850.99}
            rating={5}
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="32949249"
            title="Samsung S19F350HNW 18.5-inch AH IPS LED Monitor (Black) (Not A TV)"
            price={250.69}
            rating={4}
            imgSrc="https://m.media-amazon.com/images/I/81JNAFOB3lL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
