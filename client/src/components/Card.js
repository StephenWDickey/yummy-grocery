import React from "react";

// className="container"

export default function Card(props) {
  const cardStyle = {
    width: "15rem",
  };
  return (
    <div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          // src={require(`${props.src}`)}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Price: {props.price}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}
