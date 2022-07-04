import React from "react";
import Card from "./Card";

import Image from "../assets/images/blueberry.jpg";

const product = {
  name: "Banana",
  price: "$2.99",
  // src: '../assets/images/blueberry.jpg'
};

export default function display() {
  return (
    <div>
      {/* src={product.src} */}
      <Card name={product.name} price={product.price} />
    </div>
  );
}
