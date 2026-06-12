import rawScheduleData from '../../Indies-schedule-6-11-2026.json';

export type ScheduleEvent = {
  day: string;
  date: string;
  promotion: string;
  location: string;
  time: string | null;
  website: string | null;
};

export type FeaturedEvent = ScheduleEvent & {
  id: string;
  displayDate: string;
  displayTime: string;
  sortDate: Date;
  venueName: string;
  cityState: string;
  websiteLabel: string;
  websiteUrl: string | null;
  accent: 'green' | 'purple' | 'blue';
};

export type ScheduleWeek = {
  id: string;
  label: string;
  rangeLabel: string;
  events: FeaturedEvent[];
};

const scheduleData = rawScheduleData as ScheduleEvent[];

const SCHEDULE_YEAR = 2026;
const accentCycle: FeaturedEvent['accent'][] = ['green', 'purple', 'blue'];

function parseScheduleDate(date: string) {
  const [month, day] = date.split('/');

  return new Date(SCHEDULE_YEAR, Number(month) - 1, Number(day));
}

function toDisplayDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function toShortDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

function toWebsiteLabel(website: string | null) {
  if (!website) {
    return 'Website TBD';
  }

  return website
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0]
    .toUpperCase();
}

function toWebsiteUrl(website: string | null) {
  if (!website) {
    return null;
  }

  return /^https?:\/\//i.test(website) ? website : `https://${website}`;
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

function getWeekStart(date: Date) {
  const weekStart = new Date(date);
  weekStart.setDate(date.getDate() - date.getDay());
  weekStart.setHours(0, 0, 0, 0);

  return weekStart;
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + days);

  return nextDate;
}

function toWeekId(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function toFeaturedEvent(event: ScheduleEvent, index: number): FeaturedEvent {
  const location = splitLocation(event.location);
  const sortDate = parseScheduleDate(event.date);

  return {
    ...event,
    ...location,
    id: `${event.promotion}-${event.day}-${event.date}-${event.location}`,
    displayDate: toDisplayDate(sortDate),
    displayTime: event.time && event.time.trim().length > 0 ? event.time : 'Time TBD',
    sortDate,
    websiteLabel: toWebsiteLabel(event.website),
    websiteUrl: toWebsiteUrl(event.website),
    accent: accentCycle[index % accentCycle.length]
  };
}

export const allEvents = scheduleData;

export const featuredEvents: FeaturedEvent[] = scheduleData.map(toFeaturedEvent);

export const scheduleWeeks: ScheduleWeek[] = Array.from(
  featuredEvents.reduce((weeks, event) => {
    const weekStart = getWeekStart(event.sortDate);
    const weekId = toWeekId(weekStart);
    const weekEnd = addDays(weekStart, 6);
    const week = weeks.get(weekId) ?? {
      id: weekId,
      label: `Week of ${toShortDate(weekStart)}`,
      rangeLabel: `${toShortDate(weekStart)} - ${toShortDate(weekEnd)}`,
      events: []
    };

    week.events.push(event);
    weeks.set(weekId, week);

    return weeks;
  }, new Map<string, ScheduleWeek>()).values()
);

export const upcomingEvents: FeaturedEvent[] = scheduleWeeks[0]?.events ?? [];

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
