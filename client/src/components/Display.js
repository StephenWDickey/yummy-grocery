import React from "react";
import Card from "./Card";
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';


import Image from "../assets/images/blueberry.jpg";

const Display = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.product || [];
    return (
      <main>
        <div>
            {/* src={product.src} */}
            {products && products.map(product => (
                <Card name={product.name} price={product.price} />
            ))} 
        </div>
      </main>
    );
  };

  export default Display;


