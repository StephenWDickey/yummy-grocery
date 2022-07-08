import React, {useState} from "react";
import Card from "../Card";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";


const Display = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.product || [];
  console.log(products);

  
  return (
    <main className="container" style={{ minHeight: "60vh" }}>
      {loading ? (
        <>
          <div id="loader"></div>
          <div id="preloader"></div>
        </>
      ) : (
        <>
        <div className="hero">
          <h1 id="coolsign">Fresh Fruits Today!</h1>
          {/* <a id="shopbtn" href="/" className="btn btn-primary">
            Shop Now
          </a> */}
        </div>
        
        <div className="Login-flex">
          {products &&
            products.map((product) => (
              <Card name={product.name} price={product.price} /> 
            ))}
        </div>
       </>
       )};
    </main>
  );
};

export default Display;
