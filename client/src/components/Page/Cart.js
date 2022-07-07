import React, {useEffect} from "react";
import Card from "../Card";
import { useQuery } from "@apollo/client";
import { QUERY_CURRENT_ORDER } from "../../utils/queries";
import { Link } from "react-router-dom";

function EmptyCartDisplay() {
  return (
    <div
      id="emptyCart"
      className="container"
      style={{ height: "50vh", textAlign: "center" }}
    >
      <h2>Oh No! You have an empty cart!</h2>
      <h3>Add produce to it</h3>
      <Link to="/">
        <button>Back to Menu</button>
      </Link>
    </div>
  );
}

function FillCartDisplay() {
  var currentCartCount = localStorage.getItem("currentCartCount");
  var orderId = localStorage.getItem("orderId");
  const { data } = useQuery(QUERY_CURRENT_ORDER, {
    variables: { id: orderId },
  });
  const cart_items = data?.order.productOrders || [];
  const total = data?.order.total || 0;
  const totalNumber = parseFloat(total);
  const tax = totalNumber/10;
  const totalAfterTax = totalNumber + tax;
  return (
    <div className="flex container">
      <section id="cart-summary" className="cart-summary">
        <h3>Cart Summary</h3>
        <div className="text-container">
          <div>
            <div className="cart-flex">
              <p>{currentCartCount} Items </p>
              <p>${total}</p>
            </div>
            <div className="cart-flex">
              <p>Sales Tax: </p>
              <p>${tax}</p>
            </div>
          </div>
          <div className="white-divider" />
          <div className="cart-flex">
            <p>Total </p>
            <p>${totalAfterTax}</p>
          </div>
          <button id="checkout">Checkout</button>
        </div>
      </section>

      <div className="cart-items">
        <h2 style={{ textAlign: "center" }}>Items In Cart</h2>
        <section className="cart-flex">
          {cart_items &&
            cart_items.map((product) => (
              <Card name={product.productName} price={product.price} />
            ))}
        </section>
      </div>
    </div>
  );
}

export default function Cart() {
  var orderId = localStorage.getItem("orderId");
  const { data } = useQuery(QUERY_CURRENT_ORDER, {
    variables: { id: orderId },
  });
  console.log(orderId);
  console.log(data);
  return <>{data === null ? <EmptyCartDisplay /> : <FillCartDisplay />}</>;
}
