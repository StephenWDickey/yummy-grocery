import React from "react";
import Home from "./components/Page/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Page/Login";
import Cart from "./components/Page/Cart";
import Signup from "./components/Page/Signup";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Auth from "./utils/auth";
import Success from "./components/Page/Success";
import SingleProduct from "./components/SingleProduct";
import Dashboard from "./components/Page/Dashboard";
import AddProduct from "./components/Page/AddProduct";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// now we will create middleware function to retrieve token
// then it will combine with httpLink
// we use imported setContext function
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const loggedIn = Auth.loggedIn();

  return (
    <ApolloProvider client={client}>
      <div>
        <>
          {!loggedIn ? (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          ) : (
            <div>
              <NavBar />
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/product/:id" element={<SingleProduct />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/dashboard/addProduct"
                    element={<AddProduct />}
                  />
                  <Route path="/dashboard/:id" element={<Dashboard />} />
                  <Route path="/success" element={<Success />} />
                </Routes>
              </div>
              <Footer />
            </div>
          )}
        </>
      </div>
    </ApolloProvider>
  );
}

export default App;
