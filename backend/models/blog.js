const mongoose = require ('mongoose');

const BlogSchema = mongoose.Schema ({
  title: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now (),
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const Blog = mongoose.model ('blogs', BlogSchema);

module.exports = Blog;
