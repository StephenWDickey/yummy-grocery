import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function AddProduct() {
  return (
    <div id="addProduct" className="container" style={{ textAlign: "center" }}>
      <div style={{ margin: "0 auto 0 20%", width: "fit-content" }}>
        <Link to="/dashboard" style={{ color: "#000" }}>
          <MdOutlineKeyboardBackspace size={"3em"} />
        </Link>
      </div>
      <h2>Fill Out the Info Below to Add A Product</h2>
      <form className="flex-display">
        {/* onSubmit={handleFormSubmit} */}
        <label className="field field_v1">
          <input
            // onChange={handleChange}
            type="text"
            name="Name Of Product"
            placeholder="Name Of Product"
            className="field__input"
            // value={formState.email}
            required
          />
          <span className="field__label-wrap">
            <span className="field__label">Name Of Product</span>
          </span>
        </label>

        <label className="field field_v1">
          <input
            // onChange={handleChange}
            type="number"
            name="Price"
            placeholder="Price"
            // value={formState.password}
            className="field__input"
            required
          />
          <span className="field__label-wrap">
            <span className="field__label">Price</span>
          </span>
        </label>
        <label className="field field_v1">
          <textarea
            // onChange={handleChange}
            type="text"
            name="Description"
            placeholder="Description"
            cols={6}
            style={{ height: "75px" }}
            // value={formState.password}
            className="field__input"
            required
          ></textarea>
          <span className="field__label-wrap">
            <span className="field__label">Description</span>
          </span>
        </label>
        <label>
          <input type="file" name="Product-img" required />
        </label>
        {/* {error && <p>Login failed</p>} */}
        <div className="btn-flex ">
          <button id="btn-login" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
