import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the NavBar title', () => {
  render(<App />);
  const titleElement = screen.getByText(/MyApp/i);
  expect(titleElement).toBeInTheDocument();
});
