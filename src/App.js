import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Products/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
