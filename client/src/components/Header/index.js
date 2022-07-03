import React from 'react';
import Navbar from '../../navigation/Navbar';



const Header = () => {


  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <Navbar />
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>Yummy Grocery</h1>
        <nav className="text-center">
        </nav>
      </div>
    </header>
  );
};

export default Header;