import { render, screen } from '@testing-library/react';
import Event from './Event.js'; // Import Event component
import { fireEvent } from '@testing-library/react';

const mockEvent = {
  summary: 'Tech Meetup',
  created: '2025-01-10T10:00:00Z',
  location: 'Berlin',
  details: 'Join us for a tech meetup in Berlin!',
};

test('renders event title, date, and location', () => {
  render(<Event event={mockEvent} />); // Show the event

  // Check if event title, date, and location appear on the screen
  expect(screen.getByText(mockEvent.summary)).toBeInTheDocument(); // Event title
  expect(screen.getByText('2025-01-10')).toBeInTheDocument(); // Event date
  expect(screen.getByText(mockEvent.location)).toBeInTheDocument(); // Event location
});

test('toggles event details visibility on button click', async () => {
  render(<Event event={mockEvent} />); // Show the event

  const showDetailsButton = screen.getByText('Show Details'); // Find the button

  // Check that event details are NOT visible at first
  expect(screen.queryByText(mockEvent.details)).not.toBeInTheDocument();

  // Click the button to show event details
  fireEvent.click(showDetailsButton);

  // Wait for the details to appear
  const eventDetails = await screen.findByText(mockEvent.details);

  // Check that event details are visible now
  expect(eventDetails).toBeInTheDocument();

  // Click the button again to hide event details
  fireEvent.click(screen.getByText('Hide Details'));

  // Ensure the event details are no longer visible
  expect(screen.queryByText(mockEvent.details)).not.toBeInTheDocument();
});

test('button text changes based on event details visibility', () => {
  render(<Event event={mockEvent} />); // Show the event

  const showDetailsButton = screen.getByText('Show Details'); // Find the button

  // Ensure the button text is 'Show Details' at first
  expect(showDetailsButton).toBeInTheDocument();

  // Click the button to show event details
  fireEvent.click(showDetailsButton);

  // Ensure the button text changes to 'Hide Details'
  expect(screen.getByText('Hide Details')).toBeInTheDocument();

  // Click the button again to hide event details
  fireEvent.click(screen.getByText('Hide Details'));

  // Ensure the button text changes back to 'Show Details'
  expect(screen.getByText('Show Details')).toBeInTheDocument();
});
