import React from "react";
import { Link } from "react-router-dom";
import AdminCards from "../AdminCards";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

// const product = {
//   name: "Butter",
//   price: 3.99,
//   image:
//     "https://images.pexels.com/photos/7965898/pexels-photo-7965898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// };

function Dashboard() {
  const userData = Auth.getProfile(localStorage.getItem("id_token"));

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.product || [];

  console.log(products);

  return (
    <div id="dashboard" className="container" style={{ textAlign: "center" }}>
      <h2>Admin Dashboard</h2>
      <h3>Welcome {userData.data.username}. Click on any card to edit</h3>
      <Link to="/dashboard/addProduct">
        <button>Add A Product</button>
      </Link>
      {loading ? (
        <>
          <div id="loader"></div>
          <div id="preloader"></div>
        </>
      ) : (
        <section className="flex">
          {products &&
            products.map((product) => (
              <AdminCards
                id={product.id}
                name={product.name}
                price={product.price}
              />
            ))}
        </section>
      )}
    </div>
  );
}

export default Dashboard;
