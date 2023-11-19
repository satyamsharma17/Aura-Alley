import React from "react";

import clothes3 from "../assets/images/products/clothes-3.jpg";
import clothes4 from "../assets/images/products/clothes-4.jpg";

const Showcase = () => {
  return (
    <>
      <div className="showcase">
        <div className="showcase-banner">
          <img
            src={clothes3}
            alt="Black Floral Wrap Midi Skirt"
            className="product-img default"
            width={300}
          />
          <img
            src={clothes4}
            alt="Black Floral Wrap Midi Skirt"
            className="product-img hover"
            width={300}
          />
          <p className="showcase-badge angle pink">new</p>
          <div className="showcase-actions">
            <button className="btn-action">
              <ion-icon name="heart-outline" />
            </button>
            <button className="btn-action">
              <ion-icon name="eye-outline" />
            </button>
            <button className="btn-action">
              <ion-icon name="repeat-outline" />
            </button>
            <button className="btn-action">
              <ion-icon name="bag-add-outline" />
            </button>
          </div>
        </div>
        <div className="showcase-content">
          <a href="/Singleproduct" className="showcase-category">
            skirt
          </a>
          <h3>
            <a href="/Singleproduct" className="showcase-title">
              Black Floral Wrap Midi Skirt
            </a>
          </h3>
          <div className="showcase-rating">
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
          </div>
          <div className="price-box">
            <p className="price">$25.00</p>
            <del>$35.00</del>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
