import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout>
          <Home />
        </Layout>} />
        <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  )
}