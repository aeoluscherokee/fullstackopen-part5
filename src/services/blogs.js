import axios from 'axios';
const baseUrl = '/api/blogs';

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const createNewBlog = async (createDate, token) => {
  const request = await axios.post('/api/blogs', createDate, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return request.data;
};

const blogService = {
  getAll: getAll,
  createNewBlog: createNewBlog,
};

export default blogService;
