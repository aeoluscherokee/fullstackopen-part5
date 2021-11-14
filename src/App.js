import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import userService from './services/users';
import Notification from './components/Notification';
import LogIn from './components/LogIn';
import CreateNewBlog from './components/CreateNewBlog';

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
  const [notification, setNotification] = useState({ type: '', message: '' });
  const [createVisible, setCreateVisible] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await blogService.getAll();
      setBlogs(blogs);
    };
    getBlogs();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.logIn(loginData);
      setUserData(response);
      setLoginData({ username: '', password: '' });
    } catch (error) {
      setNotification({ type: 'error', message: error.response.data.error });
      setTimeout(() => setNotification({ type: '', message: '' }), 3000);
      setLoginData({ username: '', password: '' });
    }
  };
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await blogService.createNewBlog(
        createData,
        userData.token
      );
      setBlogs((prev) => {
        return [...prev, response];
      });
      setNotification({
        type: 'success',
        message: ` an new blog ${response.title} by ${response.author} added`,
      });
      setTimeout(() => setNotification({ type: '', message: '' }), 3000);
    } catch (error) {
      setNotification({ type: 'error', message: error.response.data.error });
      setTimeout(() => setNotification({ type: '', message: '' }), 3000);
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
          <div>
            <Notification notification={notification} />
          </div>
          <p>
            {userData.name} logged in{' '}
            <button onClick={handleLogout}>logout</button>
          </p>
          {createVisible ? (
            <div>
              <CreateNewBlog
                handleCreateSubmit={handleCreateSubmit}
                handleOnChange={handleOnChange}
              />
              <button onClick={() => setCreateVisible(false)}>cancel</button>
            </div>
          ) : (
            <button onClick={() => setCreateVisible(true)}>
              create new blog
            </button>
          )}
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <LogIn
          notification={notification}
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          loginData={loginData}
        />
      )}
    </div>
  );
};

export default App;
