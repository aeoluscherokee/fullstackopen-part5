import React from 'react';
import PropTypes from 'prop-types';

const LikeButton = ({ blog, updateLike }) => {
  const handleOnClick = async () => {
    await updateLike(blog);
  };
  return <button onClick={handleOnClick}>Like</button>;
};

LikeButton.propTypes = {
  blog: PropTypes.object.isRequired,
  updateLike: PropTypes.func.isRequired,
};

export default LikeButton;
