import React from 'react';
import { render } from '@testing-library/react';
import { BasicPost, PostWithoutDetailAndAuthorPicture } from './PostCard.stories';

test('renders simple post component properly', () => {
  const { getByText } = render(<BasicPost />);
  const titleElement = getByText(/The Hitchhiker's Guide to the Galaxy/i);
  const authorElement = getByText(/Douglas Adams/i);
  const detailElement = getByText(/Lorem Ipsum/i);
  expect(titleElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();
  expect(detailElement).toBeInTheDocument();
});


test('renders simple post component properly', () => {
  const { getByText, queryByText } = render(<PostWithoutDetailAndAuthorPicture />);
  expect(getByText(/The Hitchhiker's Guide to the Galaxy/i)).toBeTruthy();
  expect(queryByText(/Douglas Adams/i)).toBeTruthy();
  expect(queryByText(/Lorem Ipsum/i)).toBeNull();
});
