import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders component with correct text', () => {
  const { getByText } = render(<MyComponent text="Hello World" />);
  const element = getByText(/Hello World/i);
  expect(element).toBeInTheDocument();
});
