import React from 'react';
import Togglable from './Togglable';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';

const Blog = ({ blog, updateLike, deleteBlog, token, user }) => {
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
            <p>
              likes {blog.likes}
              <LikeButton blog={blog} updateLike={updateLike} />
            </p>
            <p>{blog.user.name}</p>
            {user.name === blog.user.name ? (
              <DeleteButton
                id={blog.id}
                token={user.token}
                deleteBlog={deleteBlog}
                title={blog.title}
              />
            ) : null}
          </div>
        </Togglable>
      </div>
    </div>
  );
};

export default Blog;
