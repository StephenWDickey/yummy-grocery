import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Cart from "./Page/Cart";
import { MdShoppingCart, MdAccountCircle } from "react-icons/md";
// import SearchBar from "../SearchBar/SearchBar";
// import ShoeData from "../../Data.json";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="headerNav" style={{ listStyle: "none" }}>
          <li className="mx-1">
            <Link to="/orderHistory" style={{ textDecoration: "none" }}>
              Order History
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              Proceed to checkout!
            </Link>
          </li>
          <li className="mx-1">
            <a
              href="/"
              onClick={() => Auth.logout()}
              style={{ textDecoration: "none" }}
            >
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="headerNav" style={{ listStyle: "none" }}>
          <li className="mx-1">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Sign-up
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="NavBar headerNav px-1">
      <h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          Yummy!
        </Link>
      </h1>
      <h2 id="slogan">We’ve Got You Coverd!</h2>
      <div className="flex" style={{ width: "100px" }}>
        <Link to="/cart">
          <MdShoppingCart size={"2em"} />
        </Link>
        <MdAccountCircle size={"2em"} />
      </div>
      {/* <SearchBar placeholder="Search..." data={ShoeData} /> */}
      {/* <div className="headerLinks">
        <nav>{showNavigation()}</nav>
      </div> */}
    </header>
  );
}

export default Nav;
