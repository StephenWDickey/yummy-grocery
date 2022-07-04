const { Schema} = require('mongoose');

const productOrderSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      maxlength: 280
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);



module.exports = productOrderSchema;
