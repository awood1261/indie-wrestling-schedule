import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';

import { EventCard } from '../components/molecules/EventCard';
import { filterEventsBySearch, type FeaturedEvent } from '../data/schedule';

describe('App shell', () => {
  it('renders the header and weekly event section', () => {
    render(<App />);

    expect(screen.getByRole('img', { name: /grapsfinder/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /find wrestling events near you/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search events/i)).toBeInTheDocument();
    const firstEvent = screen.getByRole('article', { name: 'Rocky Mountain Pro' });

    expect(firstEvent).toBeInTheDocument();
    expect(within(firstEvent).getByText('CO')).toBeInTheDocument();
    expect(within(firstEvent).queryByText('Live Event')).not.toBeInTheDocument();
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

  it('filters selected week events by promotion, city, state, and venue', () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/search events/i);

    fireEvent.change(searchInput, { target: { value: 'Rocky Mountain' } });
    expect(screen.getByRole('article', { name: 'Rocky Mountain Pro' })).toBeInTheDocument();
    expect(screen.queryByRole('article', { name: 'Phoenix Wrestling Experience' })).not.toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'Augusta' } });
    expect(screen.getByRole('article', { name: 'Phoenix Wrestling Experience' })).toBeInTheDocument();
    expect(screen.queryByRole('article', { name: 'Rocky Mountain Pro' })).not.toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'GA' } });
    expect(screen.getByRole('article', { name: 'Phoenix Wrestling Experience' })).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'White Eagle' } });
    expect(screen.getByRole('article', { name: 'Wrestling Open' })).toBeInTheDocument();
  });

  it('filters selected week events by day of week and state', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Day'), { target: { value: 'Friday' } });
    expect(screen.getByRole('article', { name: 'ProSouth Wrestling' })).toBeInTheDocument();
    expect(screen.queryByRole('article', { name: 'Rocky Mountain Pro' })).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('State'), { target: { value: 'AL' } });
    expect(screen.getByRole('article', { name: 'ProSouth Wrestling' })).toBeInTheDocument();
    expect(screen.queryByRole('article', { name: 'Phoenix Wrestling Experience' })).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Day'), { target: { value: 'all' } });
    expect(screen.getByRole('article', { name: 'ProSouth Wrestling' })).toBeInTheDocument();
  });

  it('resets day and state filters when selecting a different week', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Day'), { target: { value: 'Friday' } });
    fireEvent.change(screen.getByLabelText('State'), { target: { value: 'AL' } });
    fireEvent.click(screen.getByRole('button', { name: /Week of Jun 14/i }));

    expect(screen.getByLabelText('Day')).toHaveValue('all');
    expect(screen.getByLabelText('State')).toHaveValue('all');
    expect(screen.getByRole('article', { name: 'Pro Championship Wrestling (PCW)' })).toBeInTheDocument();
  });

  it('shows an empty state when search has no selected week matches', () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText(/search events/i), {
      target: { value: 'no matching event' }
    });

    expect(screen.getByRole('heading', { name: /no events found/i })).toBeInTheDocument();
    expect(screen.getByText(/no events in jun 7 - jun 13 match/i)).toBeInTheDocument();
  });

  it('matches zip codes when events include postal code data', () => {
    const event: FeaturedEvent = {
      id: 'test-event',
      day: 'Friday',
      date: '6/12',
      promotion: 'Test Wrestling',
      location: 'Test Hall, 123 Main ST, Philadelphia, PA 19123',
      time: '8 PM',
      website: 'testwrestling.com',
      displayDate: 'Fri, Jun 12, 2026',
      displayTime: '8 PM',
      sortDate: new Date(2026, 5, 12),
      venueName: 'Test Hall, 123 Main ST',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19123',
      cityState: 'Philadelphia, PA 19123',
      websiteLabel: 'TESTWRESTLING.COM',
      websiteUrl: 'https://testwrestling.com',
      accent: 'green'
    };

    expect(filterEventsBySearch([event], '19123')).toEqual([event]);
  });

  it('shows a fallback time label when the schedule time is unavailable', () => {
    render(
      <EventCard
        accent="green"
        promotion="Test Promotion"
        websiteLabel="TESTPROMOTION.COM"
        websiteUrl="https://testpromotion.com"
        day="Thursday"
        state="PA"
        date="Thu, Jun 11, 2026"
        time="Time TBD"
        venue="Test Venue"
        cityState="Test City, PA"
      />
    );

    expect(screen.getAllByText(/Time TBD/i)).toHaveLength(2);
    expect(screen.getByText('PA')).toBeInTheDocument();
  });
});
