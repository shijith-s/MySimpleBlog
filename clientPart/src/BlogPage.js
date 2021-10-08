import React from 'react';

function BlogPage (props) {
  const blog = props.location.state;
  console.log (blog);
  return (
    <div className="blogpage">
      <div className="navBar"><h2>My Blogs</h2></div>
      {blog.image
        ? <div className="blogpage__blogImage">
            <img src={blog.image} alt="blog post" />
          </div>
        : ''}

      <h1>{blog.title}</h1>
      <div className="blogpage__blogDetails">
        <h3>{blog.createdBy}</h3>
        <h5>
          {new Date (blog.date).toLocaleTimeString ()}
          &nbsp; &nbsp; &nbsp; &nbsp;
          {new Date (blog.date).toDateString ()}
        </h5>
      </div>
      <p className="blogPage__content">
        {blog.content}
      </p>
    </div>
  );
}

export default BlogPage;
