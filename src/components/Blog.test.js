import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Blog from './Blog';

test('renders title and author as default', () => {
  const blog = {
    id: '1',
    title: 'Wonderful Story',
    url: 'http://wonderful.com/article/2536',
    author: 'Adam Tyrell',
    likes: 5,
    user: {
      name: 'Steve McLarof',
      username: 'steviemc',
    },
  };
  const userData = {
    name: 'Steve McLarof',
    username: 'steviemc',
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

  expect(component.container).toHaveTextContent('Wonderful Story Adam Tyrell');
  expect(component.container).not.toHaveTextContent(
    'http://wonderful.com/article/2536'
  );
  expect(component.container).not.toHaveTextContent('likes 5');
});

test('renders details after clicking view', () => {
  const blog = {
    id: '1',
    title: 'Wonderful Story',
    url: 'http://wonderful.com/article/2536',
    author: 'Adam Tyrell',
    likes: 5,
    user: {
      name: 'Steve McLarof',
      username: 'steviemc',
    },
  };
  const userData = {
    name: 'Steve McLarof',
    username: 'steviemc',
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

  const button = component.getByText('view');
  fireEvent.click(button);

  expect(component.container).toHaveTextContent('Wonderful Story Adam Tyrell');
  expect(component.container).toHaveTextContent(
    'http://wonderful.com/article/2536'
  );
  expect(component.container).toHaveTextContent('likes 5');
});
