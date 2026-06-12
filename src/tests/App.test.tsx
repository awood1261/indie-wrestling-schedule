import { render, screen } from '@testing-library/react';
import App from '../App';

import { EventCard } from '../components/molecules/EventCard';

describe('App shell', () => {
  it('renders the header and weekly event section', () => {
    render(<App />);

    expect(screen.getByText('Find your next show')).toBeInTheDocument();
    expect(screen.getByText('Find independent wrestling events')).toBeInTheDocument();
    expect(screen.getByText('Rocky Mountain Pro')).toBeInTheDocument();
  });

  it('shows a fallback time label when the schedule time is unavailable', () => {
    render(
      <EventCard
        promotion="Test Promotion"
        date="Thu, 6/11"
        time={null}
        venue="Test Venue"
      />
    );

    expect(screen.getByText(/Time TBD/i)).toBeInTheDocument();
  });
});
