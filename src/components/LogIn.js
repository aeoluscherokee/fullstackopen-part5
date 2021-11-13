import React from 'react';
import Notification from './Notification';

const Login = ({ notification, handleSubmit, handleOnChange, loginData }) => {
  return (
    <div>
      <h1>log in to application</h1>
      <Notification notification={notification} />
      <form onSubmit={handleSubmit}>
        username
        <input
          name="username"
          onChange={handleOnChange}
          value={loginData.username}
        ></input>
        password
        <input
          type="password"
          name="password"
          onChange={handleOnChange}
          value={loginData.password}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
