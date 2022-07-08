import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from  "../utils/mutations";





export default function Card(props) {
  const [addProduct, { error }] = useMutation(ADD_TO_CART);
  const addToCart = async (event) => {
    event.preventDefault();
    var orderId = localStorage.getItem("orderId");
    var productName = event.target.getAttribute("data-name");
    var productPrice = event.target.getAttribute("data-price");
    localStorage.setItem("currentCartCount", parseInt(localStorage.getItem("currentCartCount"))+ 1);
    window.alert(`${productName} added to cart`);
    try {
      const { data } = await addProduct({
        variables: { orderId: orderId, productName: productName, quantity: 1, price:parseInt(productPrice) },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  const cardStyle = {
    width: "15rem",
  };

  const removeItem = async (event) => {
    event.preventDefault();
    localStorage.removeItem("orderId")
    localStorage.setItem("currentCartCount", parseInt(localStorage.getItem("currentCartCount"))- 1);
  }

  console.log(props.image);
  return (
    <div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          // src={`../../public/images/${props.image}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5>Name: {props.name}</h5>
          <p >Price: {props.price}</p>
          <p className="card-quantity">Quantity: 1</p>
          <a onClick={addToCart} href="/" className="btn background-primary btn-primary" data-name = {props.name} data-price = {props.price}>
            Add to Cart
          </a>
          {props.length && (
            <a onClick={removeItem} className="btn background-danger btn-danger">
              Remove from Cart
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
