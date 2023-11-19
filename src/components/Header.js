import React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../utils/context";
import Cart from "../Cart";
import Search from "./search/Search";

//headerimages
import headerlogo from "../assets/images/logo/logo.svg";
import headphonebanner from "../assets/images/electronics-banner-1.jpg";
import mensbanner from "../assets/images/mens-banner.jpg";
import womensbanner from "../assets/images/womens-banner.jpg";
import mousebanner from "../assets/images/electronics-banner-2.jpg";
import Category from "../Category";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  
  const gotoWishlist = () => {
    navigate("/Wishlist")
  }
  const gotoCart = () => {
    navigate("/Cart")
  }
  const gotoCategory = () =>{
    navigate("/Category")
  }

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) =>{
      const results = json.filter((user) => {
        return 
        value &&
        user && 
        user.name && 
        user.name.toLowerCase().includes(value)
      })
      console.log(results);
    });
  };

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  
  return (
    <>
      {/*
    - HEADER
  */}
      <header>
        <div className="header-top">
          <div className="container">
            <ul className="header-social-container">
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
            <div className="header-alert-news">
              <p>
                <b>Free Shipping</b>
                This Week Order Over - $55
              </p>
            </div>
            <div className="header-top-actions">
              <select name="currency">
                <option value="usd">USD $</option>
                <option value="eur">EUR €</option>
              </select>
              <select name="language">
                <option value="en-US">English</option>
                <option value="es-ES">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <a href="index.html#" className="header-logo">
              <img src={headerlogo} alt="Anon's logo" width={120} height={36} />
            </a>
            <div className="header-search-container">
              
                <input
                  type="search"
                  name="search"
                  className="search-field"
                  placeholder="Enter your product name..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              <button className="search-btn">
                <ion-icon name="search-outline" />
              </button>
              
            </div>
            

            <div className="header-user-actions">
              <button className="action-btn">
                <ion-icon name="person-outline" />
              </button>
              <button className="action-btn" onClick={()=> gotoWishlist()}>
                <ion-icon name="heart-outline" />
                <span className="count">0</span>
              </button>
              <button className="action-btn" onClick={()=> gotoCart()}>
                <ion-icon name="bag-handle-outline" />
                <span className="count">0</span>
              </button>
            </div>
          </div>
        </div>
        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <a href="/" className="menu-title">
                  Home
                </a>
              </li>
              <li className="menu-category">
                <a href="index.html#" className="menu-title">
                  Categories
                </a>
                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/Category">Electronics</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Desktop</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Laptop</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Camera</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Tablet</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Headphone</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">
                        <img
                          src={headphonebanner}
                          alt="headphone collection"
                          width={250}
                          height={119}
                        />
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/Category">Men's</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Formal</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Casual</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Sports</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Jacket</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Sunglasses</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">
                        <img
                          src={mensbanner}
                          alt="men's fashion"
                          width={250}
                          height={119}
                        />
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/Category">Women's</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Formal</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Casual</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Perfume</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Cosmetics</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Bags</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">
                        <img
                          src={womensbanner}
                          alt="women's fashion"
                          width={250}
                          height={119}
                        />
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/Category">Electronics</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Smart Watch</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Smart TV</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Keyboard</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Mouse</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">Microphone</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/Category">
                        <img
                          src={mousebanner}
                          alt="mouse collection"
                          width={250}
                          height={119}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-category">
                <a href="/Category" className="menu-title">
                  Men's
                </a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/Category">Shirt</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Category">Shorts &amp; Jeans</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Category">Safety Shoes</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Category">Wallet</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="/Category" className="menu-title">
                  Women's
                </a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/Category">Dress &amp; Frock</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Category">Earrings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Category">Necklace</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Category">Makeup Kit</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="/Category" className="menu-title">
                  Jewelry
                </a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/Category">Earrings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Category">Couple Rings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Category">Necklace</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Category">Bracelets</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="/Category" className="menu-title">
                  Perfume
                </a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/Category">Clothes Perfume</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Category">Deodorant</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Category">Flower Fragrance</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="index.html#">Air Freshener</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="index.html#" className="menu-title">
                  Blog
                </a>
              </li>
              <li className="menu-category">
                <a href="index.html#" className="menu-title">
                  Hot Offers
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mobile-bottom-navigation">
          <button className="action-btn" data-mobile-menu-open-btn="">
            <ion-icon name="menu-outline" />
          </button>
          <button className="action-btn">
            <ion-icon
              name="bag-handle-outline"
              onClick={()=> gotoCart()}
            />
            <span className="count">0</span>
          </button>
          <button className="action-btn">
            <ion-icon name="home-outline" />
          </button>
          <button className="action-btn">
            <ion-icon name="heart-outline" />
            <span className="count">0</span>
          </button>
          <button className="action-btn" data-mobile-menu-open-btn="">
            <ion-icon name="grid-outline" />
          </button>
        </div>
        <nav
          className="mobile-navigation-menu  has-scrollbar"
          data-mobile-menu=""
        >
          <div className="menu-top">
            <h2 className="menu-title">Menu</h2>
            <button className="menu-close-btn" data-mobile-menu-close-btn="">
              <ion-icon name="close-outline" />
            </button>
          </div>
          <ul className="mobile-menu-category-list">
            <li className="menu-category">
              <a href="index.html#" className="menu-title">
                Home
              </a>
            </li>
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn="">
                <p className="menu-title">Men's</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon" />
                  <ion-icon name="remove-outline" className="remove-icon" />
                </div>
              </button>
              <ul className="submenu-category-list" data-accordion="">
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Shirt
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Shorts &amp; Jeans
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Safety Shoes
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Wallet
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn="">
                <p className="menu-title">Women's</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon" />
                  <ion-icon name="remove-outline" className="remove-icon" />
                </div>
              </button>
              <ul className="submenu-category-list" data-accordion="">
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Dress &amp; Frock
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Earrings
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Necklace
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Makeup Kit
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn="">
                <p className="menu-title">Jewelry</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon" />
                  <ion-icon name="remove-outline" className="remove-icon" />
                </div>
              </button>
              <ul className="submenu-category-list" data-accordion="">
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Earrings
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Couple Rings
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Necklace
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Bracelets
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn="">
                <p className="menu-title">Perfume</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon" />
                  <ion-icon name="remove-outline" className="remove-icon" />
                </div>
              </button>
              <ul className="submenu-category-list" data-accordion="">
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Clothes Perfume
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Deodorant
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Flower Fragrance
                  </a>
                </li>
                <li className="submenu-category">
                  <a href="index.html#" className="submenu-title">
                    Air Freshener
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="index.html#" className="menu-title">
                Blog
              </a>
            </li>
            <li className="menu-category">
              <a href="index.html#" className="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>
          <div className="menu-bottom">
            <ul className="menu-category-list">
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn="">
                  <p className="menu-title">Language</p>
                  <ion-icon name="caret-back-outline" className="caret-back" />
                </button>
                <ul className="submenu-category-list" data-accordion="">
                  <li className="submenu-category">
                    <a href="index.html#" className="submenu-title">
                      English
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="index.html#" className="submenu-title">
                      Español
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="index.html#" className="submenu-title">
                      Frençh
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn="">
                  <p className="menu-title">Currency</p>
                  <ion-icon name="caret-back-outline" className="caret-back" />
                </button>
                <ul className="submenu-category-list" data-accordion="">
                  <li className="submenu-category">
                    <a href="index.html#" className="submenu-title">
                      USD $
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="index.html#" className="submenu-title">
                      EUR €
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="menu-social-container">
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
        </nav>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};
export default Header;
