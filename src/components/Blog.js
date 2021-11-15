import React from 'react';
import Togglable from './Togglable';
const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };
  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <Togglable showLabel="view" hideLabel="hide">
          <div>
            <p>{blog.url}</p>
            <p>likes {blog.likes}</p>
            <p>{blog.user.name}</p>
          </div>
        </Togglable>
      </div>
    </div>
  );
};

export default Blog;
