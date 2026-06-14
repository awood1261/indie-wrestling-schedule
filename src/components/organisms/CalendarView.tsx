import { useMemo, useState } from 'react';
import type { FeaturedEvent } from '../../data/schedule';

type CalendarViewProps = {
  events: FeaturedEvent[];
  onSelectEvent: (event: FeaturedEvent) => void;
};

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function toDateId(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function formatMonth(date: Date) {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function formatSelectedDay(date: Date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

function buildCalendarDays(monthDate: Date) {
  const firstOfMonth = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const gridStart = new Date(firstOfMonth);
  gridStart.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    return date;
  });
}

export function CalendarView({ events, onSelectEvent }: CalendarViewProps) {
  const firstEventDate = events[0]?.sortDate ?? new Date();
  const [visibleMonth, setVisibleMonth] = useState(
    new Date(firstEventDate.getFullYear(), firstEventDate.getMonth(), 1)
  );
  const [selectedDateId, setSelectedDateId] = useState(toDateId(firstEventDate));

  const eventsByDate = useMemo(
    () =>
      events.reduce((groupedEvents, event) => {
        const dateId = toDateId(event.sortDate);
        const dateEvents = groupedEvents.get(dateId) ?? [];
        dateEvents.push(event);
        groupedEvents.set(dateId, dateEvents);
        return groupedEvents;
      }, new Map<string, FeaturedEvent[]>()),
    [events]
  );
  const calendarDays = useMemo(() => buildCalendarDays(visibleMonth), [visibleMonth]);
  const selectedDate = new Date(`${selectedDateId}T00:00:00`);
  const selectedEvents = eventsByDate.get(selectedDateId) ?? [];

  const handleMonthChange = (direction: -1 | 1) => {
    const nextMonth = new Date(visibleMonth);
    nextMonth.setMonth(visibleMonth.getMonth() + direction);
    setVisibleMonth(nextMonth);

    const firstEventInMonth = events.find(
      (event) =>
        event.sortDate.getFullYear() === nextMonth.getFullYear() &&
        event.sortDate.getMonth() === nextMonth.getMonth()
    );
    setSelectedDateId(toDateId(firstEventInMonth?.sortDate ?? nextMonth));
  };

  return (
    <section className="calendar-view" aria-labelledby="calendar-title">
      <div className="calendar-heading">
        <p className="eyebrow">Never miss a show</p>
        <h1 id="calendar-title">Calendar</h1>
      </div>

      <div className="calendar-month-bar">
        <button type="button" aria-label="Previous month" onClick={() => handleMonthChange(-1)}>
          ←
        </button>
        <h2>{formatMonth(visibleMonth)}</h2>
        <button type="button" aria-label="Next month" onClick={() => handleMonthChange(1)}>
          →
        </button>
      </div>

      <div className="calendar-grid" aria-label={`${formatMonth(visibleMonth)} event calendar`}>
        {weekDays.map((day) => (
          <span key={day} className="calendar-weekday">
            {day}
          </span>
        ))}
        {calendarDays.map((date) => {
          const dateId = toDateId(date);
          const dateEvents = eventsByDate.get(dateId) ?? [];
          const isSelected = dateId === selectedDateId;
          const isCurrentMonth = date.getMonth() === visibleMonth.getMonth();
          const dotCount = Math.min(dateEvents.length, 3);

          return (
            <button
              key={dateId}
              type="button"
              className={`calendar-day${isSelected ? ' calendar-day--selected' : ''}${isCurrentMonth ? '' : ' calendar-day--muted'}`}
              aria-label={`Select ${date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}, ${dateEvents.length} events`}
              onClick={() => setSelectedDateId(dateId)}
            >
              <span>{date.getDate()}</span>
              {dotCount > 0 ? (
                <span className="calendar-day__dots" aria-hidden="true">
                  {Array.from({ length: dotCount }, (_, dotIndex) => (
                    <span key={dotIndex} />
                  ))}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <section className="calendar-agenda" aria-label={`Events on ${formatSelectedDay(selectedDate)}`}>
        <div className="calendar-agenda__heading">
          <h2>{formatSelectedDay(selectedDate)}</h2>
          <span>{selectedEvents.length} events</span>
        </div>

        {selectedEvents.length > 0 ? (
          <div className="calendar-event-list">
            {selectedEvents.map((event) => (
              <article
                key={event.id}
                className={`calendar-event calendar-event--${event.accent}`}
                aria-label={event.promotion}
              >
                <div className="calendar-event__time">
                  <strong>{event.displayTime}</strong>
                </div>
                <div className="calendar-event__body">
                  <h3>{event.promotion}</h3>
                  <p>{event.websiteLabel}</p>
                  <span>{event.venueName}</span>
                  <span>{event.cityState}</span>
                </div>
                <button
                  type="button"
                  aria-label={`View details for ${event.promotion}`}
                  onClick={() => onSelectEvent(event)}
                >
                  →
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No events found</h3>
            <p>No events are listed for this date.</p>
          </div>
        )}
      </section>
    </section>
  );
}
