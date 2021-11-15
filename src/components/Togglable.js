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
      <>
        {isVisible ? (
          <>
            {hideLabel ? (
              <button onClick={toggleVisibility}>{hideLabel}</button>
            ) : null}
            {children}
          </>
        ) : (
          <button onClick={toggleVisibility}>{showLabel}</button>
        )}
      </>
    );
  }
);

export default Togglable;
