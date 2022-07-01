const { Schema, model } = require('mongoose');


const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    
    price: {
      type: Number,
      required: true,
      minlength: 5
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);





const Product = model('Product', productSchema);

module.exports = Product;
