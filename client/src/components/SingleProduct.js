import React from "react";

const product = {
  name: "Butter",
  price: 3.99,
  image:
    "https://images.pexels.com/photos/7965898/pexels-photo-7965898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const Error = () => {
  return (
    <>
      <h1>No Product</h1>
    </>
  );
};

const ProductPage = (product) => {
  return (
    <div className="container">
      <h1>Product Page</h1>
      <h2>{product.name}</h2>
      <h2>{product.price}</h2>
      <img src={`${product.image}`} alt="Hello" />
    </div>
  );
};

function SingleProduct() {
  console.log(product);

  return (
    <>
      {product ? (
        <ProductPage
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ) : (
        <Error />
      )}
    </>
  );
}

export default SingleProduct;
