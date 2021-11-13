import React from 'react';

const Notification = ({ notification }) => {
  const errorStyle = {
    color: 'red',
    border: '2px solid red',
    borderRadius: 5,
    padding: '5px',
    fontSize: '20px',
    backgroundColor: 'lightgrey',
  };
  const successStyle = {
    color: 'green',
    border: '2px solid green',
    borderRadius: 5,
    padding: '5px',
    fontSize: '20px',
    backgroundColor: 'lightgrey',
  };
  return (
    <div>
      {notification.type ? (
        <p style={notification.type === 'error' ? errorStyle : successStyle}>
          {notification.message}
        </p>
      ) : null}
    </div>
  );
};
export default Notification;
