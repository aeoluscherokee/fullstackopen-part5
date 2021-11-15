import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Blog from './Blog';

test('renders content', () => {
  const blog = {
    id: '1',
    title: 'Test',
    url: 'Test',
    author: 'Test',
    likes: 'Test',
    user: {
      name: 'Test',
      username: 'Test',
    },
  };
  const userData = {
    name: 'Test',
    username: 'Test',
    token: '',
  };

  const component = render(
    <Blog
      blog={blog}
      updateLike={() => console.log('Test')}
      deleteBlog={() => console.log('Test')}
      user={userData}
    />
  );

  expect(component.container).toHaveTextContent('Test');
});
