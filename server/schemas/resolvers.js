const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const {User, Order, Product } = require ('../models');

const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      },
      users: async () => {
        
        const userData = await User.find();

        return userData;
        
      },
      product: async () => {
        
        const productData = await Product.find();
        console.log (productData);
        return productData;
        
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
      addProductOrder: async (parent, {orderId, productName, quantity, price }) => {
        const currentOrder = await Order.findOne({_id: orderId});
        var newTotal = parseInt(currentOrder.total) + price;
        const updatedOrder = await Order.findOneAndUpdate(
          { _id: orderId },
          { $set: {total: newTotal}, $push: { productOrders: { productName: productName, quantity: quantity, price: price } } },
          { new: true, runValidators: true }
        );
        updatedOrder.total = newTotal;
        return updatedOrder;
      },
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
      
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const token = signToken(user);
        return { token, user };

      }
    }
  };
  
  module.exports = resolvers;