import React from "react";
import "../../App.css";

function Signup() {
  return (
    <>
      <h1 id="logo">Yummy!</h1>
      <h2 id="slogan">We’ve Got You Coverd!</h2>
      <h2>Fill in the Details Below</h2>
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
    </>
  );
}

export default Signup;
