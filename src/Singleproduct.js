import React from 'react'
import clothes1 from './assets/images/products/clothes-1.jpg'
import Relatedproducts from './Relatedproducts';
import "./css/Singleproduct.css";

const Singleproduct = () => {
  return (
    <>
      <div className="singleprod">
        <div className="product-featured">
          <div className="showcase-container">
            <div className="showcase">
              <div className="showcase-banner">
                <img
                  src={clothes1}
                  alt="shampoo, conditioner & facewash packs"
                  className="showcase-img"
                />
              </div>
              <div className="showcase-content">
                <ul className="collapsed">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  {/*
                   */}
                  <li>
                    <a href="#">Categories</a>
                  </li>
                  <li>
                    <a href="#">Womens</a>
                  </li>
                  <li>
                    <a href="#">Casuals</a>
                  </li>
                  <li>
                    <a href="#">RELAXED.....</a>
                  </li>
                </ul>
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star-outline" />
                  <ion-icon name="star-outline" />
                </div>
                <a href="index.html#">
                  <h3 className="showcase-title">
                    RELAXED SHORT FULL SLEEVES PULLOVER SWEATER
                  </h3>
                </a>
                <p className="showcase-desc">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                  sit amet consectetur Lorem ipsum dolor
                </p>
                <div className="price-box">
                  <p className="price">$45.00</p>
                  <del>$12.00</del>
                </div>
                <div className="addcart-quanity">
                  <button className="add-cart-btn">add to cart</button>
                  <div className="quantity-button">
                    <span className="signs">-</span>
                    <span>1</span>
                    <span className="signs">+</span>
                  </div>
                </div>

                <div className="sub-descript">
                  <p>
                    Color: <i>pink</i>
                  </p>
                  <p>
                    Product Type: <i>Pullover</i>
                  </p>
                </div>
                <div className="spsociallinks">
                 
                  <ul className="header-social-container">
                    <li><p>Share:  </p></li>
                    <li>
                      <a href="index.html#" className="social-link">
                        <ion-icon name="logo-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html#" className="social-link">
                        <ion-icon name="logo-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html#" className="social-link">
                        <ion-icon name="logo-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html#" className="social-link">
                        <ion-icon name="logo-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="policy-box">
      <div className="service-container">
              <a href="index.html#" className="service-item"  id='deliveryservice'>
                <div className="service-icon">
                  <ion-icon name="boat-outline" />
                </div>
                <div className="service-content" >
                  <h3 className="service-title" >Worldwide Delivery</h3>
                  <p className="service-desc">For Order Over $100</p>
                </div>
              </a>
              
              <a href="index.html#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="call-outline" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">Best Online Support</h3>
                  <p className="service-desc">Hours: 8AM - 11PM</p>
                </div>
              </a>
              <a href="index.html#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="arrow-undo-outline" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">Return Policy</h3>
                  <p className="service-desc">Easy &amp; Free Return</p>
                </div>
              </a>
              <a href="index.html#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="ticket-outline" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">30% money back</h3>
                  <p className="service-desc">For Order Over $100</p>
                </div>
              </a>
            </div>
      </div>
      <Relatedproducts/>
    </>
  );
}
export default Singleproduct;