import React from "react";
import Card from "./Card";
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';


const Display = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.product || [];
    return (
      <main>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {/* src={product.src} */}
              {products && products.map(product => (
                  <Card name={product.name} price={product.price} />
              ))} 
            </div>
          )}
        </div>
      </main>
    );
  };

  export default Display;


