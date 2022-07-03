const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const {User, Order} = require ('../models');

const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      },
      users: async () => {
        return User.find();
      },
      orders: async ()=> {
        return Order.find();
      },
      order: async (parent, { _id }) => {
        return Order.findOne({ _id });
      }
    },
    Mutation: {
      createOrder: async (parent, args) => {
        const order = await Order.create(args);  
        return order;
      },
      addProductOrder: async (parent, {orderId, name, quantity, price }) => {
        const currentOrder = await Order.findOne({_id: orderId});
        var newTotal = parseInt(currentOrder.total) + price;
        const updatedOrder = await Order.findOneAndUpdate(
          { _id: orderId },
          { $set: {total: newTotal}, $push: { products: { name: name, quantity: quantity, price: price } } },
          { new: true, runValidators: true }
        );
        updatedOrder.total = newTotal;
        return updatedOrder;
      }
    }
  };
  
  module.exports = resolvers;