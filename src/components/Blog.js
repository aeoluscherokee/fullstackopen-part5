import React from 'react';
import Togglable from './Togglable';
const Blog = ({ blog }) => (
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
);

export default Blog;
