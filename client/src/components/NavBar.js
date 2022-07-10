import React, { useState } from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Cart from "./Page/Cart";
import {
  MdShoppingCart,
  MdAccountCircle,
  MdOutlineKeyboardBackspace,
} from "react-icons/md";
// import SearchBar from "../SearchBar/SearchBar";
// import ShoeData from "../../Data.json";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <MdOutlineKeyboardBackspace
          size={"3em"}
          onClick={() => props.setTrigger(false)}
          style={{ cursor: "pointer" }}
        />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

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

  // Profile Popup
  const [open, setOpen] = useState(false);
  // const [fade, setFade] = useState(false);

  return (
    <>
      {Auth.loggedIn() ? (
        <header className="NavBar headerNav px-1">
          {Auth.loggedIn() ? (
            <h1>
              <Link to="/" style={{ textDecoration: "none" }}>
                Yummy!
              </Link>
            </h1>
          ) : (
            <h1>Yummy!</h1>
          )}

          <h2 id="slogan">We’ve Got You Coverd!</h2>
          {Auth.loggedIn() ? (
            <>
              <div className="flex" style={{ width: "100px" }}>
                <Link to="/cart">
                  <MdShoppingCart size={"2em"} />
                </Link>
                <div id="open">
                  <MdAccountCircle
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpen(true)}
                    size={"2em"}
                  />
                </div>
              </div>
              <Popup trigger={open} setTrigger={setOpen}>
                <h3>{Auth.username}</h3>
                <button className="logoutButton" onClick={() => Auth.logout()}>
                  Logout
                </button>
              </Popup>
            </>
          ) : (
            ""
          )}

          {/* <SearchBar placeholder="Search..." data={ShoeData} /> */}
          {/* <div className="headerLinks">
        <nav>{showNavigation()}</nav>
      </div> */}
        </header>
      ) : (
        ""
      )}
    </>
  );
}

export default Nav;
