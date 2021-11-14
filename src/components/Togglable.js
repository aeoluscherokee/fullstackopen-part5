import React, { useState, useImperativeHandle } from 'react';

const Togglable = React.forwardRef(({ children, buttonLabel }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  useImperativeHandle(ref, () => {
    return { toggleVisibility };
  });
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
});

export default Togglable;
