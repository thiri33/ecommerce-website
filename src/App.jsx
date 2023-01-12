import React from "react";
import Navbar from "./Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} /> 
          <Route exact path="/blog" element={<Blog/>} /> 
          <Route exact path="/about" element={<About />} /> 
          <Route exact path="/contact" element={<Contact />} /> 
          <Route exact path="/cart" element={<Cart />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App