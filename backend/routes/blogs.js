const express = require ('express');
const router = express.Router ();
const blogController = require ('../controllers/blogs');

router.get ('/allblogs', blogController.allBlogs);
router.get ('/blog', blogController.giveBlogData);

module.exports = router;
