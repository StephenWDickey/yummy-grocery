import React, { useState } from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { MdShoppingCart, MdAccountCircle } from "react-icons/md";
import CustomPopup from "./CustumPopup";

import { QUERY_USERS } from "../utils/queries";

function Nav() {
  const userData = AuthService.getProfile(localStorage.getItem("id_token"));

  console.log(userData.data);

  // Profile Popup
  // const [open, setOpen] = useState(false);

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };
  // const [fade, setFade] = useState(false);

  return (
    <header className="NavBar headerNav px-1">
      <h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          Yummy!
        </Link>
      </h1>
      <h2 id="slogan">We’ve Got You Coverd!</h2>
      <>
        <div className="flex" style={{ width: "100px" }}>
          <Link to="/cart">
            <MdShoppingCart size={"2em"} />
          </Link>
          <div id="open">
            <MdAccountCircle
              style={{ cursor: "pointer" }}
              onClick={() => setVisibility(true)}
              size={"2em"}
            />
          </div>
        </div>
        <CustomPopup
          title="Settings"
          onClose={popupCloseHandler}
          show={visibility}
        >
          <h4>Username: {userData.data.username}</h4>
          <h4>Email: {userData.data.email}</h4>
          <Link to="/dashboard">
            <button id="dashboard-btn">Dashboard</button>
          </Link>
          <button
            id="logout"
            className="logoutButton"
            onClick={() => AuthService.logout()}
          >
            Logout
          </button>
        </CustomPopup>
      </>
    </header>
  );
}

export default Nav;

{
  /* <SearchBar placeholder="Search..." data={ShoeData} /> */
}
{
  /* <div className="headerLinks">
        <nav>{showNavigation()}</nav>
      </div> */
}
