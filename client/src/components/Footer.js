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
        <div className="white-divider" style={{ opacity: "0.5" }} />
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
        <div>
          <h4>Work On By </h4>
          <div>
            <a href="https://github.com/StephenWDickey">
              <BsGithub />
              Stephen Dickey
            </a>
          </div>
          <div>
            <a href="https://github.com/drew990">
              <BsGithub />
              Andrew Banagas
            </a>
          </div>
          <div>
            <a href="https://github.com/GongTianchou">
              <BsGithub />
              Tianchou Gong
            </a>
          </div>
        </div>
      </section>
      <div className="container">&copy;2022 by Yummy Grocery Inc.</div>
    </footer>
  );
};

export default Footer;
