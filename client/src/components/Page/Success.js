import React from "react";
import "../../styles/checkmark.css";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="container">
      <div class="success-animation">
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <div
        id="success-message"
        className="text-container"
        style={{ textAlign: "center" }}
      >
        <h3>Thank You For Shopping At Yummy!</h3>
        <h4>Your Payment Was a Success</h4>
        <Link to="/">
          <button>Back to Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
