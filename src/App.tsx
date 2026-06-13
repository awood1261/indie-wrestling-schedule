import { useMemo, useState } from 'react';
import { BottomNav } from './components/organisms/BottomNav';
import { EventDetailView } from './components/organisms/EventDetailView';
import { EventFilters } from './components/organisms/EventFilters';
import { Header } from './components/organisms/Header';
import { Hero } from './components/organisms/Hero';
import { WeekSelector } from './components/organisms/WeekSelector';
import { WeeklyEventList } from './components/organisms/WeeklyEventList';
import {
  filterEventsByDayAndState,
  filterEventsBySearch,
  getEventFilterOptions,
  scheduleWeeks,
  type FeaturedEvent
} from './data/schedule';

export default function App() {
  const [selectedWeekId, setSelectedWeekId] = useState(scheduleWeeks[0]?.id ?? '');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDay, setSelectedDay] = useState('all');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState<FeaturedEvent | null>(null);
  const selectedWeek = useMemo(
    () => scheduleWeeks.find((week) => week.id === selectedWeekId) ?? scheduleWeeks[0],
    [selectedWeekId]
  );
  const filterOptions = useMemo(
    () => getEventFilterOptions(selectedWeek?.events ?? []),
    [selectedWeek]
  );
  const filteredEvents = useMemo(
    () =>
      filterEventsByDayAndState(
        filterEventsBySearch(selectedWeek?.events ?? [], searchQuery),
        selectedDay,
        selectedState
      ),
    [searchQuery, selectedDay, selectedState, selectedWeek]
  );
  const handleSelectWeek = (weekId: string) => {
    setSelectedWeekId(weekId);
    setSelectedDay('all');
    setSelectedState('all');
    setSelectedEvent(null);
  };

  return (
    <div className="app-shell">
      <Header />
      <main>
        {selectedEvent ? (
          <EventDetailView event={selectedEvent} onBack={() => setSelectedEvent(null)} />
        ) : (
          <>
            <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

            <section className="section-heading">
              <div>
                <p className="eyebrow">Selected week</p>
                <h2>{selectedWeek?.rangeLabel ?? 'No events available'}</h2>
              </div>
              <button type="button" className="calendar-link">
                View Calendar <span aria-hidden="true">-&gt;</span>
              </button>
            </section>

            <WeekSelector
              weeks={scheduleWeeks}
              selectedWeekId={selectedWeek?.id ?? ''}
              onSelectWeek={handleSelectWeek}
            />

            <EventFilters
              dayOptions={filterOptions.dayOptions}
              stateOptions={filterOptions.stateOptions}
              selectedDay={selectedDay}
              selectedState={selectedState}
              onSelectDay={setSelectedDay}
              onSelectState={setSelectedState}
            />

            <WeeklyEventList
              events={filteredEvents}
              weekLabel={selectedWeek?.rangeLabel ?? 'the selected week'}
              searchQuery={searchQuery}
              onSelectEvent={setSelectedEvent}
            />
          </>
        )}
      </main>
      <BottomNav />
    </div>
  );
}
