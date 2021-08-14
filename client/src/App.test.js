import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // why commenting? because when this test runs It will try rednering Fib component
  // which will make a call to express server  which might not be running at the moment.
});
