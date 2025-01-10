import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

// Mock fetch to simulate the authorization URL fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ authUrl: 'https://google.com/oauth' }),
  })
);

test('displays greeting based on time of day', () => {
  render(<App />);

  const greeting = screen.getByText(/Good (Morning|Afternoon|Evening)!/); // Check for greeting message

  expect(greeting).toBeInTheDocument(); // Verify that the greeting message is in the document
});

test('renders authorize button and handles click', async () => {
  render(<App />);

  const button = screen.getByText('Authorize with Google'); // Find the button

  expect(button).toBeInTheDocument(); // Ensure the button is in the document

  // Simulate clicking the button
  fireEvent.click(button);

  // Wait for the redirect to happen (simulated by setting authUrl)
  await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1)); // Ensure fetch is called once
  await waitFor(() =>
    expect(global.fetch).toHaveBeenCalledWith(
      'https://your-backend-url.com/get-auth-url'
    )
  ); // Check if fetch URL is correct
});
