import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from "../utils/mutations";

export default function Card(props) {
  return (
    <div className="AdminCard">
      <h3>{props.name}</h3>
      <h4> ${props.price}</h4>
    </div>
  );
}
