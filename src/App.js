import './App.css';
import React from 'react';
import Nav from './Components/Navbar/nav';
import Home from './Components/Home/home';
import Category from './Components/Category/category';
import Product from './product/product';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:category" element={<Category/>} />
        <Route path="/product/:id" element={<Product/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
