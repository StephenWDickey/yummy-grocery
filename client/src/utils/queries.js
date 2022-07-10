import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query Product {
    product {
      _id
      name
      price
      image
    }
  }
`;

export const QUERY_USERS = gql`
  query User($id: ID!) {
    users (_id: $id) {
      username
    }
  }
`;

export const QUERY_CURRENT_ORDER = gql`
  query Order($id: ID!) {
    order(_id: $id) {
      _id
      address
      productOrders {
        productName
        quantity
        price
      }
      total
      createdAt
    }
  } 
`;


export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

