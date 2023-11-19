
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Category from "./Category";
import Cart from "./Cart";
import Singleproduct from "./Singleproduct";
import Errorpage from "./Errorpage";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Newsletter from "./components/Newsletter";

import AppContext from "./utils/context";

import Wishlist from "./Wishlist";

import Login from "./Login"
import Signup from "./Signup";



function App() {
  return (
    <BrowserRouter>
    <AppContext>
    <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Category" element={<Category />}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/Singleproduct" element={<Singleproduct />}/>
        <Route path="/Wishlist" element={<Wishlist />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Signup" element={<Signup />}/>

        <Route path="/*" element={<Errorpage />}/>
      </Routes>
     
      <Footer/>
    </AppContext>
      
    </BrowserRouter>
  );
}

export default App;
