import React from "react";
import Card from "../Card";
import { useQuery } from "@apollo/client";
import { QUERY_CURRENT_ORDER } from "../../utils/queries";

// import useLazyQuery hook
import { useLazyQuery } from '@apollo/client';


import { QUERY_CHECKOUT } from '../../utils/queries'; 

import { loadStripe } from '@stripe/stripe-js';

import { useStoreContext } from '../../utils/GlobalState';

const Cart = () => {
  const { data } = useQuery(QUERY_CURRENT_ORDER, {
    variables: { id: "62c38e3ff5378518f35f210d" },
  });
  const cart_items = data?.order.productOrders || [];

  // for lazyQuery
  const [getCheckout] = useLazyQuery(QUERY_CHECKOUT);


  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i=0; i< item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds }
    });

    // use useEffect hook to retrieve data from cache for cart
    useEffect(() => {

      async function getCart() {
        const cart = await idbPromise('cart', 'get');
        dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
      };
    
      // if cart is empty we will check if cart data has been cached
      // then getCart() function will retrieve it
      if (!state.cart.length) {
        getCart();
      }
    }, [state.cart.length, dispatch]);
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
