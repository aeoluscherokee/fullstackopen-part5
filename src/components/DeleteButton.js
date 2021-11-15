import React from 'react';

const DeleteButton = ({ id, token, deleteBlog }) => {
  const handleOnClick = async () => {
    await deleteBlog(id, token);
  };
  return <button onClick={handleOnClick}>remove</button>;
};

export default DeleteButton;
