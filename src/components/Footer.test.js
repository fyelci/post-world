import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders copyright properly', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/Something here to give the footer a purpose/i);
  expect(linkElement).toBeInTheDocument();
});
