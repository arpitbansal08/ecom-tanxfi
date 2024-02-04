import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import productsData from "./db.json";
import "./App.css";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Products products={productsData.products} />}
          />
          <Route
            path="/product/:productId"
            element={<ProductDetail products={productsData.products} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
