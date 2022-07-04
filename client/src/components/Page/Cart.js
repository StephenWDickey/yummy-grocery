import React from "react";
import Card from "../Card";

const product = {
  name: "Banana",
  price: "$2.99",
  // src: '../assets/images/blueberry.jpg'
};

function Cart() {
  return (
    <>
      <div>
        <h1>Cart Nav Goes Here</h1>
      </div>
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
            <Card name={product.name} price={product.price} />
            <Card name={product.name} price={product.price} />
            <Card name={product.name} price={product.price} />
            <Card name={product.name} price={product.price} />
          </section>
        </div>
      </div>
    </>
  );
}

export default Cart;
