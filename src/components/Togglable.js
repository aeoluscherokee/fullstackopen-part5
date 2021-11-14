import React, { useState } from 'react';

const Togglable = ({ children, buttonLabel }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {isVisible ? (
        <div>
          {children}
          <button onClick={toggleVisibility}>cancel</button>
        </div>
      ) : (
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      )}
    </div>
  );
};

export default Togglable;
