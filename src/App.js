import './App.css';
import React from 'react';
import Home from './Components/Home/home';
import Category from './Components/Category/category';
import Product from './product/product';
import Login from './Components/Login/login';
import Cart from './Components/Cart/cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="main">
      {console.log("App render is called")}
      <BrowserRouter>
      <Routes>
      <Route path="/*" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/category/:category" element={<Category/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/mycart" element={<Cart/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
