import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './components/Blog';
import blogService from './services/blogs';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [userData, setUserData] = useState({
    token: '',
    username: '',
    name: '',
  });

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/users/login', loginData);
    if (response.status === 200) {
      setUserData(response.data);
    }
  };
  const handleOnChange = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleLogout = (e) => {
    setUserData({});
  };

  return (
    <div>
      {userData.username ? (
        <div>
          <h2>blogs</h2>
          <p>
            {userData.name} logged in{' '}
            <button onClick={handleLogout}>logout</button>
          </p>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div>
          <h1>log in to application</h1>
          <form onSubmit={handleSubmit}>
            username
            <input name="username" onChange={handleOnChange}></input>
            password
            <input
              type="password"
              name="password"
              onChange={handleOnChange}
            ></input>
            <button type="submit">submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
