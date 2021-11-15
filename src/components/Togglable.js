import React, { useState, useImperativeHandle } from 'react';

const Togglable = React.forwardRef(
  ({ children, showLabel, hideLabel }, ref) => {
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
            <button onClick={toggleVisibility}>{hideLabel}</button>
          </div>
        ) : (
          <button onClick={toggleVisibility}>{showLabel}</button>
        )}
      </div>
    );
  }
);

export default Togglable;
