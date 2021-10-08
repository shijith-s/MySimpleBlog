import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import BlogCard from './BlogCard';

import BlogContextProvider from './context/BlogContext';
import './css/blogs.css';


function HomePage () {
  const history = useHistory ();
  console.log ('hello guys');
  const [blogData, dispatch] = BlogContextProvider ();
  console.log (blogData.blogs);
  const blogs = blogData.blogs;

  const routeHandler = blog => {
    console.log ('going to blogpage');
    history.push ({pathname: `/blogpage`, state: blog});
  };

  return (
    <div className="homepage">
      <div className="navBar"><h2>My Blogs</h2></div>
      
      {blogs.length > 0
        ? <div className="homepage__blog">
            {blogs.map ((blog, index) => (
              <div
                className="homepage__blogDiv"
                onClick={() => {
                  routeHandler (blog);
                }}
              >
                <BlogCard key={index} blog={blog} />
              </div>
            ))}
          </div>
        : <div className="homepage__noblog">
            <h3>Sorry No blogs yet!</h3>
          </div>}
    </div>
  );
}

export default HomePage;
