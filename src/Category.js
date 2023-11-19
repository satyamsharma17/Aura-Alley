import React from 'react'
import clothes3 from './assets/images/products/clothes-3.jpg';
import clothes4 from './assets/images/products/clothes-4.jpg'

import Showcase from './components/Showcase';

const Category = ({categories}) => {
  return (
    <>
    {/*
      - HEADER
    */}
   
    {/* end of header */}
    {/* Products */}
    <div className="product-container">
      <div className="container">
        {/*
    - SIDEBAR
  */}
        <div className="sidebar  has-scrollbar" data-mobile-menu="">
          <div className="sidebar-category">
            <div className="sidebar-top">
              <h2 className="sidebar-title">Sort</h2>
              <button className="sidebar-close-btn" data-mobile-menu-close-btn="">
                <ion-icon name="close-outline" />
              </button>
            </div>
            <ul className="sidebar-menu-category-list">
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    <p className="menu-title">Popularity</p>
                  </div>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Shirt</p>
                      <data value={300} className="stock" title="Available Stock">
                        300
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">shorts &amp; jeans</p>
                      <data value={60} className="stock" title="Available Stock">
                        60
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">jacket</p>
                      <data value={50} className="stock" title="Available Stock">
                        50
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">dress &amp; frock</p>
                      <data value={87} className="stock" title="Available Stock">
                        87
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    <p className="menu-title">Newness</p>
                  </div>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Sports</p>
                      <data value={45} className="stock" title="Available Stock">
                        45
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Formal</p>
                      <data value={75} className="stock" title="Available Stock">
                        75
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Casual</p>
                      <data value={35} className="stock" title="Available Stock">
                        35
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Safety Shoes</p>
                      <data value={26} className="stock" title="Available Stock">
                        26
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    <p className="menu-title">Price:High to Low</p>
                  </div>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Earrings</p>
                      <data value={46} className="stock" title="Available Stock">
                        46
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Couple Rings</p>
                      <data value={73} className="stock" title="Available Stock">
                        73
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Necklace</p>
                      <data value={61} className="stock" title="Available Stock">
                        61
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    <p className="menu-title">Price:Low to High</p>
                  </div>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Clothes Perfume</p>
                      <data value={12} className="stock" title="Available Stock">
                        12 pcs
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Deodorant</p>
                      <data value={60} className="stock" title="Available Stock">
                        60 pcs
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">jacket</p>
                      <data value={50} className="stock" title="Available Stock">
                        50 pcs
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">dress &amp; frock</p>
                      <data value={87} className="stock" title="Available Stock">
                        87 pcs
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    {/* image */}
                    <p className="menu-title" />
                  </div>
                  {/* <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div> */}
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Shampoo</p>
                      <data value={68} className="stock" title="Available Stock">
                        68
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Sunscreen</p>
                      <data value={46} className="stock" title="Available Stock">
                        46
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Body Wash</p>
                      <data value={79} className="stock" title="Available Stock">
                        79
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Makeup Kit</p>
                      <data value={23} className="stock" title="Available Stock">
                        23
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    {/* image */}
                    <p className="menu-title" />
                  </div>
                  {/* <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div> */}
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Sunglasses</p>
                      <data value={50} className="stock" title="Available Stock">
                        50
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Lenses</p>
                      <data value={48} className="stock" title="Available Stock">
                        48
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    {/* image */}
                    <p className="menu-title" />
                  </div>
                  {/* <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div> */}
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Shopping Bag</p>
                      <data value={62} className="stock" title="Available Stock">
                        62
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Gym Backpack</p>
                      <data value={35} className="stock" title="Available Stock">
                        35
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Purse</p>
                      <data value={80} className="stock" title="Available Stock">
                        80
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Wallet</p>
                      <data value={75} className="stock" title="Available Stock">
                        75
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/*silver line */}
            <div className="silver-line" />
            {/* for sizes */}
            <div className="sidebar-top">
              <h2 className="sidebar-title">Size</h2>
              <button className="sidebar-close-btn" data-mobile-menu-close-btn="">
                <ion-icon name="close-outline" />
              </button>
            </div>
            <ul />
          </div>
        </div>
        {/* end of sidebar */}
        {/* product-box */}
        <div className="product-box">
          {/*
      - PRODUCT GRID
    */}
          <div className="product-main">
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
            </ul>
            <div className="product-grid">
            <Showcase/>
            <Showcase/>
            <Showcase/>
            <Showcase/>
              

            </div>
          </div>
        </div>
        {/* end of product-box */}
      </div>
    </div>
    {/* end of products */}
  </>
  
  );
}
export default Category;