import React from "react";
import "../../App.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <div className="container ">
        <div>
          <Link to="/">
            <MdOutlineKeyboardBackspace size={"3em"} />
          </Link>
        </div>
        <h2>Fill in the Details Below</h2>
        <form className="flex-display">
          <label className="field field_v1">
            <input
              // value={}
              // onChange={}
              type="text"
              name="username"
              placeholder="username"
              className="field__input"
              required
            />
            <span className="field__label-wrap">
              <span className="field__label">Username</span>
            </span>
          </label>
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
          <button
            type="submit"
            style={{ margin: "5rem auto 0 auto", background: "" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
