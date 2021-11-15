import React, { useState } from 'react';

const CreateNewBlog = ({ addBlog }) => {
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: '',
  });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    addBlog(newBlog);
    setNewBlog({
      title: '',
      author: '',
      url: '',
    });
  };
  const handleOnChange = (e) => {
    setNewBlog((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleOnSubmit}>
        title
        <input name="title" onChange={handleOnChange}></input>
        author
        <input name="author" onChange={handleOnChange}></input>
        url
        <input name="url" onChange={handleOnChange}></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CreateNewBlog;
