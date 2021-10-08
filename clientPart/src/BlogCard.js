import React from 'react';

function BlogCard({blog}) {
  console.log ('reached blogcard');
  console.log (blog);
  console.log (typeof blog.date);
  return (
    <div className="blogCard">
      <h3>{blog.title}</h3>
      <div className="blogCard__image">
        {blog.image ? <img src={blog.image} alt="" /> : ''}
      </div>
      <div className="blogDetails">
        <h4>{blog.createdBy}</h4>
        <p>
          {new Date (blog.date).toDateString () +
            '\t\t\t\t\t\t' +
            new Date (blog.date).toLocaleTimeString ()}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
