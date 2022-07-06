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
import Header from "./components/NavBar";
import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
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
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
