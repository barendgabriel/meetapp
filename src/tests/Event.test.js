const mockEvent = {
  summary: 'Tech Meetup',
  created: '2025-01-10T10:00:00Z',
  location: 'Berlin',
  details: 'Join us for a tech meetup in Berlin!',
};
import { render, screen } from '@testing-library/react';
import Event from './Event'; // Import Event component

test('renders event title, date, and location', () => {
  render(<Event event={mockEvent} />); // Show the event

  // Check if event title, date, and location appear on the screen
  expect(screen.getByText(mockEvent.summary)).toBeInTheDocument(); // Event title
  expect(screen.getByText('2025-01-10')).toBeInTheDocument(); // Event date
  expect(screen.getByText(mockEvent.location)).toBeInTheDocument(); // Event location
});
