import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';

import { EventCard } from '../components/molecules/EventCard';

describe('App shell', () => {
  it('renders the header and weekly event section', () => {
    render(<App />);

    expect(screen.getByRole('img', { name: /grapsfinder/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /find wrestling events near you/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search events/i)).toBeInTheDocument();
    const firstEvent = screen.getByRole('article', { name: 'Rocky Mountain Pro' });

    expect(firstEvent).toBeInTheDocument();
    expect(within(firstEvent).getByRole('link', { name: 'FACEBOOK.COM' })).toHaveAttribute(
      'href',
      'https://facebook.com/TheRockyMtnPro'
    );
  });

  it('renders events for the selected week', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Jun 7 - Jun 13' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Week of Jun 14/i }));

    expect(screen.getByRole('heading', { name: 'Jun 14 - Jun 20' })).toBeInTheDocument();
    expect(screen.getByRole('article', { name: 'Pro Championship Wrestling (PCW)' })).toBeInTheDocument();
  });

  it('shows a fallback time label when the schedule time is unavailable', () => {
    render(
      <EventCard
        accent="green"
        promotion="Test Promotion"
        websiteLabel="TESTPROMOTION.COM"
        websiteUrl="https://testpromotion.com"
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
