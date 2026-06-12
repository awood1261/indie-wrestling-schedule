import { render, screen } from '@testing-library/react';
import App from '../App';

import { EventCard } from '../components/molecules/EventCard';

describe('App shell', () => {
  it('renders the header and weekly event section', () => {
    render(<App />);

    expect(screen.getByRole('img', { name: /grapsfinder/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /find wrestling events near you/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search events/i)).toBeInTheDocument();
    expect(screen.getByRole('article', { name: 'Rocky Mountain Pro' })).toBeInTheDocument();
  });

  it('shows a fallback time label when the schedule time is unavailable', () => {
    render(
      <EventCard
        accent="green"
        promotion="Test Promotion"
        websiteLabel="TESTPROMOTION.COM"
        date="Thu, Jun 11, 2026"
        time="Time TBD"
        venue="Test Venue"
        cityState="Test City, PA"
        matchCount={1}
      />
    );

    expect(screen.getByText(/Time TBD/i)).toBeInTheDocument();
  });
});
