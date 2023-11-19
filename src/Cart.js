import React from 'react'
import  "./css/Cart.css"
import clothes3 from './assets/images/products/clothes-3.jpg';

const Cart = () => {
  return (
    <>
      <div className="cart-panel">
        <div className="cart-title">
          <h2>
            Your Cart Items <span>(2)</span>
          </h2>
        </div>
        <div className="blankdiv"></div>
        <div className="cart-content">
          <ul className="cart-list">
            <li>
              <div className="item-image-box">
                <img src={clothes3} alt="" className="item-image" />
              </div>
              <div className="item-details">
                <div className="cart-item-info">
                  <h4>Black Floral Wrap Midi Skirt</h4>
                  <br />
                  <p>
                    Size:{" "}
                    <span>
                      <h5>M</h5>
                    </span>
                  </p>
                  <p>
                    Color:{" "}
                    <span>
                      <h5>Black</h5>
                    </span>
                  </p>
                  <br />
                  <div className="bin-and-heart">
                    <a>
                      <ion-icon
                        name="trash-outline"
                        className="bin-icon"
                      ></ion-icon>
                      <p>Remove</p>
                    </a>
                    <div className="vl"></div>
                    <a className="add-wishlist">
                      <ion-icon
                        name="heart-outline"
                        className="heart-icon"
                      ></ion-icon>
                      <p>Move to Wishlist</p>
                    </a>
                  </div>
                </div>
                <div className="item-quantity">
                  <p className="quantity">Quantity</p>
                  <div className="quantity-button">
                    <span className="signs">-</span>
                    <span>1</span>
                    <span className="signs">+</span>
                  </div>
                  <div className="price-box">
                    <p className="price">$45.00</p>
                    <del>$12.00</del>
                  </div>
                  <p className="saved">You saved 71%</p>
                </div>
              </div>
            </li>
            <div className="blankdiv"></div>
            <li>
              <div className="item-image-box">
                <img src={clothes3} alt="" className="item-image" />
              </div>
              <div className="item-details">
                <div className="cart-item-info">
                  <h4>Black Floral Wrap Midi Skirt</h4>
                  <br />
                  <p>
                    Size:{" "}
                    <span>
                      <h5>M</h5>
                    </span>
                  </p>
                  <p>
                    Color:{" "}
                    <span>
                      <h5>Black</h5>
                    </span>
                  </p>
                  <br />
                  <div className="bin-and-heart">
                    <a>
                      <ion-icon
                        name="trash-outline"
                        className="bin-icon"
                      ></ion-icon>
                      <p>Remove</p>
                    </a>
                    <div className="vl"></div>
                    <a className="add-wishlist">
                      <ion-icon
                        name="heart-outline"
                        className="heart-icon"
                      ></ion-icon>
                      <p>Move to Wishlist</p>
                    </a>
                  </div>
                </div>
                <div className="item-quantity">
                  <p className="quantity">Quantity</p>
                  <div className="quantity-button">
                    <span className="signs">-</span>
                    <span>1</span>
                    <span className="signs">+</span>
                  </div>
                  <div className="price-box">
                    <p className="price">$45.00</p>
                    <del>$12.00</del>
                  </div>
                  <p className="saved">You saved 71%</p>
                </div>
              </div>
            </li>
            <div className="blankdiv"></div>
          </ul>

          <div className="cart-amount">
            <h4>CART TOTAL</h4>
            <br />
            <table className="amount-table">
              <tr className="sub-row">
                <th>Sub-total:</th>
                <td>$50</td>
              </tr>
              <tr>
                <th>Total:</th>
                <td>$50</td>
              </tr>
            </table>
            <div className="blankdiv"></div>
            <br />
            <div className="total-head">
              <h4>The total amount(including GST)</h4>
              <h4 className="total-price">$50</h4>
            </div>
            <button className="checkout-btn">Go to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;