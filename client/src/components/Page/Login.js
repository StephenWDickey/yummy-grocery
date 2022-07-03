import React from "react";
import "../../App.css";
import "../../styles/form.css";
import Pineapples from "../images/Pineapple.png";

function Login() {
  return (
    <div className="Login-flex">
      <div className="Login-img-size">
        {/* <img src={Pineapples} alt="Hero Image" className="Login-img" /> */}
        <a href="/">
          <h1 id="logo">Yummy!</h1>
        </a>
        <h2 id="slogan">We’ve Got You Coverd!</h2>
        <div className="text-container">
          <h2>Join Today in Choosing Hundreds of Healthy Products</h2>
        </div>
      </div>
      <div className="login-background">
        <h1>Welcome To Yummy! </h1>
        <h2>Login</h2>
        <form className="flex-display">
          <div>
            <label className="field field_v1">
              <input
                // value={}
                // onChange={}
                type="email"
                name="email"
                placeholder="email"
                className="field__input"
                required
              />
              <span className="field__label-wrap">
                <span className="field__label">Email</span>
              </span>
            </label>
          </div>
          <div>
            <label className="field field_v1">
              <input
                // value={}
                // onChange={}
                type="password"
                name="password"
                placeholder="password"
                className="field__input"
                required
              />
              <span className="field__label-wrap">
                <span className="field__label">Password</span>
              </span>
            </label>
          </div>
        </form>
        <div className="btn-flex ">
          <button id="btn-login">Login</button>
          <button id="btn-signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
