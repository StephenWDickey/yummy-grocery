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
    <div id="single-product" className="container flex">
      <div className="product-image">
        <img src={`${product.image}`} alt="Hello" />
      </div>
      <div className="text-container">
        <h2>{product.name}</h2>
        <div className="black-divider" />
        <h3>${product.price}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis
          tellus id interdum velit laoreet id donec ultrices.
        </p>
        <button>Add to Cart</button>
      </div>
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
