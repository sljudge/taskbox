import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a page', () => {
  const { container } = render(<App />);

  expect(
    container.querySelector('.page')
  ).not.toBe(null)

});
