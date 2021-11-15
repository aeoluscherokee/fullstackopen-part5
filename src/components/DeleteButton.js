import React from 'react';

const DeleteButton = ({ id, token, deleteBlog, title }) => {
  const handleOnClick = async () => {
    await deleteBlog(id, token, title);
  };
  return <button onClick={handleOnClick}>remove</button>;
};

export default DeleteButton;
