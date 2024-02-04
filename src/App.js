import React from "react";
import Products from "./components/Products";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import productsData from "./db.json";
import "./App.css";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Products products={productsData.products} />} />
      <Route
        path="product"
        element={<Products products={productsData.products} />}
      />
      <Route
        path="product/:productId"
        element={<ProductDetail products={productsData.products} />}
      />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
