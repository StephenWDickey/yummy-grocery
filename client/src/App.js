import React from "react";
import Display from "./components/Display";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Page/Login";
import Cart from "./components/Page/Cart";
// import Footer from "./components/Footer";
import Header from "./components/Header/index";
import Signup from "./components/Page/Signup";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Display />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Footer /> */}
    </Routes>
  );
}

export default App;
