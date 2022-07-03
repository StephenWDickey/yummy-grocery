import React from "react";
<<<<<<< HEAD
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div>
      <Header />
    
      <div>
        <Home />
      </div>
      <Footer />
    </div>
    </>
=======
import Display from "./components/Display";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Page/Login";

function App() {
  return (
    <Routes>
      {/* <Switch>      </Switch> */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Display />} />
    </Routes>
    // <Display />
>>>>>>> 767458b (Updated src)
  );
}

export default App;
