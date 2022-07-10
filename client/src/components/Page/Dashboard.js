import React from "react";
import { Link } from "react-router-dom";
import AdminCards from "../AdminCards";

const product = {
  name: "Butter",
  price: 3.99,
  image:
    "https://images.pexels.com/photos/7965898/pexels-photo-7965898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

function Dashboard() {
  return (
    <div id="dashboard" className="container" style={{ textAlign: "center" }}>
      <h2>Admin Dashboard</h2>
      <h3>Welcome "Username". Click on any card to edit</h3>
      <Link to="/dashboard/addProduct">
        <button>Add A Product</button>
      </Link>
      <section className="flex">
        <AdminCards price={product.price} name={product.name} />
      </section>
    </div>
  );
}

export default Dashboard;
