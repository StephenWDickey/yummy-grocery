import React from "react";
import Display from "./components/Display";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Page/Login";
import Cart from "./components/Page/Cart";
// import Footer from "./components/Footer";
import Header from "./components/Header/index";
import Signup from "./components/Page/Signup";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Display />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Footer /> */}
      </Routes>
    </ApolloProvider>
  );
}

export default App;
