import rawScheduleData from '../../Indies-schedule-6-11-2026.json';

export type ScheduleEvent = {
  day: string;
  date: string;
  promotion: string;
  location: string;
  time: string | null;
  website: string;
};

export type FeaturedEvent = ScheduleEvent & {
  id: string;
  displayDate: string;
  displayTime: string;
  venueName: string;
  cityState: string;
  websiteLabel: string;
  accent: 'green' | 'purple' | 'blue';
};

const scheduleData = rawScheduleData as ScheduleEvent[];

const accentCycle: FeaturedEvent['accent'][] = ['green', 'purple', 'blue'];

function toDisplayDate(date: string) {
  const [month, day] = date.split('/');
  const parsed = new Date(2026, Number(month) - 1, Number(day));

  return parsed.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function toWebsiteLabel(website: string) {
  return website
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0]
    .toUpperCase();
}

function splitLocation(location: string) {
  const parts = location.split(',').map((part) => part.trim()).filter(Boolean);
  const city = parts.length >= 2 ? parts[parts.length - 2] : parts[parts.length - 1];
  const state = parts[parts.length - 1];
  const venueName = parts.length > 2 ? parts.slice(0, -2).join(', ') : parts[0];

  return {
    venueName: venueName || location,
    cityState: city && state ? `${city}, ${state}` : location
  };
}

export const allEvents = scheduleData;

export const upcomingEvents: FeaturedEvent[] = scheduleData.slice(0, 8).map((event, index) => {
  const location = splitLocation(event.location);

  return {
    ...event,
    ...location,
    id: `${event.promotion}-${event.day}-${event.date}-${event.location}`,
    displayDate: toDisplayDate(event.date),
    displayTime: event.time && event.time.trim().length > 0 ? event.time : 'Time TBD',
    websiteLabel: toWebsiteLabel(event.website),
    accent: accentCycle[index % accentCycle.length]
  };
});

export const eventStats = {
  listedEvents: allEvents.length,
  promotions: new Set(allEvents.map((event) => event.promotion)).size,
  states: new Set(
    allEvents
      .map((event) => {
        const parts = event.location.split(',');
        return parts[parts.length - 1]?.trim();
      })
      .filter(Boolean)
  ).size
};
