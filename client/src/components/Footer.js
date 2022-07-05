import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="logo-div">
        <h4 id="logo" style={{ paddingBottom: "1.5rem" }}>
          Yummy!
        </h4>
      </div>
      <section className="container flex" style={{ width: "100%" }}>
        <div>
          <h4>Navigation</h4>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/cart">
            <p>Cart</p>
          </Link>
        </div>
        <div className="flex-column">
          <h4>Work On By </h4>

          <a href="https://github.com/StephenWDickey">
            {/* <BsGithub /> */}
            Stephen Dickey
          </a>

          <a href="https://github.com/drew990">
            {/* <BsGithub /> */}
            Andrew Banagas
          </a>

          <a href="https://github.com/GongTianchou">
            {/* <BsGithub /> */}
            Tianchou Gong
          </a>
        </div>
      </section>
      <div className="white-divider" style={{ opacity: "0.5" }} />
      <div className="container" style={{ textAlign: "center" }}>
        &copy;2022 by Yummy Grocery Inc.
      </div>
    </footer>
  );
};

export default Footer;
