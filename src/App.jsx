import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ProductList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router >
  );
};

export default App;