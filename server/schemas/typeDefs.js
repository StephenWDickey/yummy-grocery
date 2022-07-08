// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type Checkout {
        session: ID
    }


    type Query {
        helloWorld: String
        users: [User]
        orders: [Order]
        order(_id: ID!): Order
        product: [Product]
        checkout(products: [ID]!): Checkout
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
        image: String
    
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
    }

    type Order {
        _id: ID
        productOrders: [ProductOrder]
        address: String
        total: String
        createdAt: String
    }

    type ProductOrder {
        productName: String 
        price: Float
        quantity: Int
    }

    type Mutation {
        addProductOrder(orderId: ID!, productName: String!, quantity: Int!, price: Float!): Order
        createOrder(address: String!, total: Int!): Order
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }

    
`;


// export the typeDefs
module.exports = typeDefs;