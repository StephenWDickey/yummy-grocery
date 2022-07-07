import React from "react";
import Card from "../Card";
import { useQuery } from "@apollo/client";
import { QUERY_CURRENT_ORDER } from "../../utils/queries";

const Cart = () => {
  const { data } = useQuery(QUERY_CURRENT_ORDER, {
    variables: { id: "62c38e3ff5378518f35f210d" },
  });

  const cart_items = data?.order.productOrders || [];

  if (!cart_items) {
    return (
      <>
        <p>Nothing in here</p>
      </>
    );
  }

  return (
    <div className="flex container">
      <section id="cart-summary" className="cart-summary">
        <h3>Cart Summary</h3>
        <div className="text-container">
          <div>
            <div className="cart-flex">
              <p>15 Items </p>
              <p>$34.59</p>
            </div>
            <div className="cart-flex">
              <p>15 Items </p>
              <p>$34.59</p>
            </div>
          </div>
          <div className="white-divider" />
          <div className="cart-flex">
            <p>Total </p>
            <p>$34.59</p>
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
};

export default Cart;
