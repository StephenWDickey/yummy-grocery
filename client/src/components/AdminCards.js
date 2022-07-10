import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from "../utils/mutations";

export default function Card(props) {
  return (
    <div className="AdminCard">
      <p>{props.name}</p>
      <p> ${props.price}</p>
    </div>
  );
}
