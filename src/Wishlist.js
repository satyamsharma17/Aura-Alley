
import clothes3 from './assets/images/products/clothes-3.jpg';
import {useState} from "react";

import "./css/WishList.css"

const Wishlist = () => {
  const [wishOpen, setWish] = useState(true);

  return (
     
    <div className="wishpage">
      
      <div className="wlheading">
      <ion-icon name="heart"></ion-icon>
        <h2>My Wishlist</h2>
      </div>

      <ul className="cart-list">
        {wishOpen && (<li>
          <div className="item-image-box">
            <img src={clothes3} alt="" className="item-image" />
          </div>
          <div className="wlitem-details">
          <div className="instockbox">
              <span className="in-stock-btn"><b>In Stock</b></span>
            </div>
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
            <div className="price-box">
              <p className="price">$45.00</p>
              <del>$12.00</del>
              <p className="saved">71% off</p>
            </div>
           
          </div>
          <div className="closeandadd">
              <button onClick={()=>setWish(false)}>
                <ion-icon name="trash-outline" className="bin-icon"></ion-icon>
              </button>  
           
            <button className="checkout-btn">Add to Cart</button>
          </div>
        </li>) }
        
        <li>
          <div className="item-image-box">
            <img src={clothes3} alt="" className="item-image" />
          </div>
          <div className="wlitem-details">
          <div className="instockbox">
              <span className="in-stock-btn" id='oos'><b>Out of Stock</b></span>
            </div>
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
            <div className="price-box">
              <p className="price">$45.00</p>
              <del>$12.00</del>
              <p className="saved">71% off</p>
            </div>
          </div>
          <div className="closeandadd">
              <button>
                <ion-icon name="trash-outline" className="bin-icon"></ion-icon>
              </button>  
           
            <button className="checkout-btn">Add to Cart</button>
          </div>
        </li>
        <li>
          <div className="item-image-box">
            <img src={clothes3} alt="" className="item-image" />
          </div>
          <div className="wlitem-details">
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
            <div className="price-box">
              <p className="price">$45.00</p>
              <del>$12.00</del>
              <p className="saved">71% off</p>
            </div>
          </div>
          <div className="closeandadd">
              <button className='removewish'>
                <ion-icon name="trash-outline" className="bin-icon"></ion-icon>
              </button>  
           
            <button className="checkout-btn">Add to Cart</button>
          </div>
        </li>
      </ul>

    </div>
  );
};

export default Wishlist;
