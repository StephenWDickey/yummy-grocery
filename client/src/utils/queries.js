import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query Product {
    product {
      _id
      name
      price
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

