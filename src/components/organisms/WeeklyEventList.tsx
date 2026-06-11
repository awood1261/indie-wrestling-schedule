import { EventCard } from '../molecules/EventCard';

const sampleEvents = [
  { promotion: 'Rocky Mountain Pro', date: 'Thu, 6/11', time: '7 PM', venue: '15200 W 6th Ave, Golden, CO' },
  { promotion: 'Ohio Valley Wrestling', date: 'Thu, 6/11', time: '6:30 PM', venue: '4400 Shepherdsville RD, Louisville, KY' },
  { promotion: 'Little Mania', date: 'Fri, 6/12', time: '7:30 PM', venue: 'Tiki Bar, Conneaut Lake, PA' }
];

export function WeeklyEventList() {
  return (
    <section className="event-list" aria-label="Weekly events">
      {sampleEvents.map((event) => (
        <EventCard
          key={`${event.promotion}-${event.date}`}
          promotion={event.promotion}
          date={event.date}
          time={event.time}
          venue={event.venue}
        />
      ))}
    </section>
  );
}
