import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from "../utils/mutations";

export default function Card(props) {
  const [addProduct, { error }] = useMutation(ADD_TO_CART);
  const addToCart = async (event) => {
    event.preventDefault();
    var orderId = localStorage.getItem("orderId");
    var productName = event.target.getAttribute("data-name");
    var productPrice = event.target.getAttribute("data-price");
    localStorage.setItem(
      "currentCartCount",
      parseInt(localStorage.getItem("currentCartCount")) + 1
    );

    try {
      const { data } = await addProduct({
        variables: {
          orderId: orderId,
          productName: productName,
          quantity: 1,
          price: parseInt(productPrice),
        },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  const cardStyle = {
    width: "15rem",
  };

  console.log(props);

  return (
    <div className="card">
      {/* <a href={`/product/${props.id}`}></a> */}
      <div className="card-img">
        <img style={{ width: "100%" }} src={`${props.image}`} alt="Card cap" />
      </div>

      <div className="card-body">
        <h5>{props.name}</h5>
        <p> ${props.price}</p>
        <p>{props.id}</p>

        <a
          onClick={addToCart}
          href="/"
          data-name={props.name}
          data-price={props.price}
        >
          <button>Add to Cart</button>
        </a>
      </div>
    </div>
  );
}
