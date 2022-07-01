const { Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      minlength: 1,
      maxlength: 280
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



const Comment = model('Comment', commentSchema);

module.exports = Comment;
