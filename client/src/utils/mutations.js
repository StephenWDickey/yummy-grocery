import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation CreateOrder($address: String!, $total: Int!) {
    createOrder(address: $address, total: $total) {
      _id
      address
      total
      createdAt
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation AddProductOrder($orderId: ID!, $productName: String!, $quantity: Int!, $price: Float!) {
    addProductOrder(orderId: $orderId, productName: $productName, quantity: $quantity, price: $price) {
      _id
      total
      productOrders {
        productName
        price
        quantity
      }
    }
  }
`;