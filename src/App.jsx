import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Basket from "./pages/Basket";
import Wishlist from "./pages/Wishlist";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
        {/* <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } /> */}
      </Routes>
    </BrowserRouter>
  )
}