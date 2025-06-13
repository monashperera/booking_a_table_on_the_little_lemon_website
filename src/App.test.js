import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Home from './pages/Home';

test('renders Reserve table button', async  () => {
  render(<><BrowserRouter><Home /></BrowserRouter></>);
  const buttonElement = await screen.findByText(/Reserve a Table/i);
  expect(buttonElement).toBeInTheDocument();

});