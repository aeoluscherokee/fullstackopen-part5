import React from 'react';

const LikeButton = ({ blog, updateLike }) => {
  const handleOnClick = async () => {
    await updateLike(blog);
  };
  return <button onClick={handleOnClick}>Like</button>;
};
export default LikeButton;
