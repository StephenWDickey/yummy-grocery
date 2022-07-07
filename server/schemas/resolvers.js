const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const {User, Order, Product } = require ('../models');

// import stripe
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
        
        return productData;
        
      },
      orders: async ()=> {
        return Order.find();
      },
      order: async (parent, { _id }) => {
        return Order.findOne({ _id });
      },
      checkout: async (parent, args, context) => {

        const order = new Order({ productOrders: args.productOrders });
        
        const {products} = await order.populate('productOrders');
  
        const line_items = [];
  
        const url = new URL(context.headers.referer).origin
  
        for (let i = 0; i < products.length; i++) {
          // generate product id
          const product = await stripe.products.create({
            name: products[i].name,
            description: products[i].description,
          });
  
          // generate price id using the product id
          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: products[i].price * 100,
            currency: 'usd',
          });
  
          // add price id to the line items array
          line_items.push({
            price: price.id,
            quantity: 1
          });

          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${url}/`
          });
          
        }
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