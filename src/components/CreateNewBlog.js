import React from 'react';

const CreateNewBlog = ({ handleCreateSubmit, handleOnChange }) => {
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleCreateSubmit}>
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
