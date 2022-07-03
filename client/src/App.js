import React from "react";
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
  );
}

export default App;
