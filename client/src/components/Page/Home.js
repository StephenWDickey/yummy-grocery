import React, { useState } from "react";
import Card from "../Card";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

const Display = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.product || [];

  return (
    <>
      {loading ? (
        <>
          <div id="loader"></div>
          <div id="preloader"></div>
        </>
      ) : (
        <main>
          <div className="hero">
            <h1>Fresh Fruits Grown Locally</h1>
            <h2>Checkout Out Our Products Below</h2>
            <a href="#products">
              <button>Shop Now</button>
            </a>
            {/* <a id="shopbtn" href=".card" className="btn btn-primary">
              Shop Now
            </a> */}
          </div>

          <div id="products" className="flex container">
            {products &&
              products.map((product) => (
                <Card
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
          </div>
        </main>
      )}
      ;
    </>
  );
};

export default Display;
