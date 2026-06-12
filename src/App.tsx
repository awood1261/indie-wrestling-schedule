import { useMemo, useState } from 'react';
import { BottomNav } from './components/organisms/BottomNav';
import { Header } from './components/organisms/Header';
import { Hero } from './components/organisms/Hero';
import { WeekSelector } from './components/organisms/WeekSelector';
import { WeeklyEventList } from './components/organisms/WeeklyEventList';
import { filterEventsBySearch, scheduleWeeks } from './data/schedule';

export default function App() {
  const [selectedWeekId, setSelectedWeekId] = useState(scheduleWeeks[0]?.id ?? '');
  const [searchQuery, setSearchQuery] = useState('');
  const selectedWeek = useMemo(
    () => scheduleWeeks.find((week) => week.id === selectedWeekId) ?? scheduleWeeks[0],
    [selectedWeekId]
  );
  const filteredEvents = useMemo(
    () => filterEventsBySearch(selectedWeek?.events ?? [], searchQuery),
    [searchQuery, selectedWeek]
  );

  return (
    <div className="app-shell">
      <Header />
      <main>
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
          onSelectWeek={setSelectedWeekId}
        />

        <WeeklyEventList
          events={filteredEvents}
          weekLabel={selectedWeek?.rangeLabel ?? 'the selected week'}
          searchQuery={searchQuery}
        />
      </main>
      <BottomNav />
    </div>
  );
}
