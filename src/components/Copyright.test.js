import React from 'react';
import { render } from '@testing-library/react';
import Copyright from './Copyright';

test('renders copyright properly', () => {
  const { getByText } = render(<Copyright />);
  const linkElement = getByText(/Your Website/i);
  expect(linkElement).toBeInTheDocument();
});
