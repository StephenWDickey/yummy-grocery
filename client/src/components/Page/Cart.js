import React, { useEffect } from "react";
import Card from "../Card";
import { useQuery } from "@apollo/client";
import { QUERY_CURRENT_ORDER } from "../../utils/queries";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// we need to update global state data when we remove item from cart
import { useStoreContext } from "../../utils/GlobalState";

// import indexedDB helper function
import { idbPromise } from "../../utils/helpers";

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

function FillCartDisplay(props) {
  var currentCartCount = localStorage.getItem("currentCartCount");
  var orderId = localStorage.getItem("orderId");
  const { data } = useQuery(QUERY_CURRENT_ORDER, {
    variables: { id: orderId },
  });
  const cart_items = data?.order.productOrders || [];
  const total = data?.order.total || 0;
  const totalNumber = parseFloat(total);
  const tax = totalNumber / 10;
  const totalAfterTax = totalNumber + tax;

  async function handleToken() {
    const response = await axios.post(
      "http://localhost:3001/checkout",
      orderId
    );
  }

  return (
    // Will either display the cart if the cart is filled or show and empty cart component when the cart is empty
    <>
      {cart_items != null ? (
        <div className="flex container">
          <section id="cart-summary" className="cart-summary">
            <h3>Cart Summary</h3>
            <div className="text-container">
              <div>
                <div className="cart-flex">
                  {cart_items &&
                    cart_items.map((product) => (
                      <>
                        <p>{currentCartCount} Items </p>
                        <p>${total}</p>
                      </>
                    ))}
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
                <StripeCheckout
                  stripeKey="pk_test_51LJ0bKHO9kGri03OalRFlToYllIFut2WG5k2Cu9cLFgufJLwdAxQIUbDJor9glMQxyUcfolXmlLPIbqTpcDhSckY00G3PygrSE"
                  token={handleToken}
                  name={"Checkout your items!"}
                  amount={totalAfterTax * 100}
                  id="checkout"
                  //onClick= {stripeHandler}
                />
              </div>
            </div>
          </section>

          <div className="cart-items">
            <h2 style={{ textAlign: "center" }}>Items In Cart</h2>
            <section className="cart-flex">
              {cart_items &&
                cart_items.map((product) => (
                  <>
                    <Card name={product.productName} price={product.price} image={localStorage.getItem(product.productName)}/>
                    <span role="img" aria-label="trash">
                      🗑️
                    </span>
                  </>
                ))}
            </section>
          </div>
        </div>
      ) : (
        <EmptyCartDisplay />
      )}
    </>
  );
}

export default function Cart() {
  var orderId = localStorage.getItem("orderId");
  const { data } = useQuery(QUERY_CURRENT_ORDER, {
    variables: { id: orderId },
  });
  console.log("checking if current order is empty:")
  console.log(orderId);
  console.log(data);

  return <>{orderId === null ? <EmptyCartDisplay /> : <FillCartDisplay />}</>;
}
