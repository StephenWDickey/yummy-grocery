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
    },

    // comments: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Comment'
    //   }
    // ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);



// productSchema.virtual('commentCount').get(function() {
//   return this.comments.length;
// });





const Product = model('Product', productSchema);

module.exports = Product;
