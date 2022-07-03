// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Query {
        helloWorld: String
        users: [User]
        orders: [Order]
        order(_id: ID!): Order
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Product {
        _id: ID
        name: String
        price: Float
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
    }

    type ProductOrder {
        name: String
        quantity: Int
        price: Float
    }

    type Order {
        _id: ID
        products: [ProductOrder]
        address: String
        total: String
        createdAt: String
    }

    type Mutation {
        addProductOrder(orderId: ID!, name: String!, quantity: Int!, price: Float!): Order
        createOrder(address: String!, total: Int!): Order
    }
`;


// export the typeDefs
module.exports = typeDefs;