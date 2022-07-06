import React from "react";
import Card from "../Card";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

const Display = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.product || [];
  return (
    <main className="container" style={{ minHeight: "60vh" }}>
      {loading ? (
        <>
          <div id="loader"></div>
          <div id="preloader"></div>
        </>
      ) : (
        <div>
          {/* src={product.src} */}
          {products &&
            products.map((product) => (
              <Card name={product.name} price={product.price} />
            ))}
        </div>
      )}
    </main>
  );
};

export default Display;
