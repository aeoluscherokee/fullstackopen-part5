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
  const [createData, setCreateData] = useState({
    title: '',
    author: '',
    url: '',
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
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/blogs', createData, {
      headers: {
        Authorization: 'Bearer ' + userData.token,
      },
    });
    if (response.status === 201) {
      setBlogs((prev) => {
        return [...prev, response.data];
      });
    }
  };
  const handleOnChange = (e) => {
    const isLoginForm =
      e.target.name === 'username' || e.target.name === 'password';
    const isCreateForm =
      e.target.name === 'title' ||
      e.target.name === 'author' ||
      e.target.name === 'url';
    if (isLoginForm) {
      setLoginData((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    } else if (isCreateForm)
      setCreateData((prev) => {
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
          <div>
            <h2>create new</h2>
            <form onSubmit={handleCreateSubmit}>
              title
              <input name="title" onChange={handleOnChange}></input>
              author
              <input name="author" onChange={handleOnChange}></input>
              url
              <input name="url" onChange={handleOnChange}></input>
              <button type="submit">submit</button>
            </form>
          </div>
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
