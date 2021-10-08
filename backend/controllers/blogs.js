const Blogs = require ('../models/blog');

exports.allBlogs = async (req, res) => {
  try {
    console.log ('all blogs request recieved');
    const blogs = await Blogs.find ({});
    console.log (blogs);
    res.status (200).json (blogs);
  } catch (err) {
    console.log (err.message);
    res.status (400).json ({error: err.message});
  }
};

exports.giveBlogData = async (req, res) => {
  try {
    const _id = res.blogID;
    const blogs = await Blogs.findOne ({_id});
    res.status (200).json (blogs);
  } catch (err) {
    res.status (400).json ({error: err.message});
  }
};
