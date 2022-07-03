const { Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

const productOrderSchema = require('./ProductOrder');

const orderSchema = new Schema(
    {
      products: [productOrderSchema],
      address: {
          type: String,
          required: true,
      },
      total: {
          type: String,
          required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      }
      
    },
    {
      toJSON: {
        getters: true,
        virtuals: true
      }
    }
  );
  
  
  
  const Order = model('Order', orderSchema);
  
  module.exports = Order;