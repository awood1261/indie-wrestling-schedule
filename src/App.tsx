import { BottomNav } from './components/organisms/BottomNav';
import { Header } from './components/organisms/Header';
import { Hero } from './components/organisms/Hero';
import { WeeklyEventList } from './components/organisms/WeeklyEventList';
import { eventStats } from './data/schedule';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />

        <section className="stats-grid" aria-label="Schedule highlights">
          <article>
            <strong>{eventStats.listedEvents}</strong>
            <span>events tracked</span>
          </article>
          <article>
            <strong>{eventStats.promotions}</strong>
            <span>promotions</span>
          </article>
          <article>
            <strong>{eventStats.states}</strong>
            <span>regions</span>
          </article>
        </section>

        <section className="section-heading">
          <div>
            <p className="eyebrow">Upcoming events</p>
            <h2>Fresh from the wrestling schedule</h2>
          </div>
          <button type="button" className="calendar-link">
            View Calendar <span aria-hidden="true">-&gt;</span>
          </button>
        </section>

        <WeeklyEventList />
      </main>
      <BottomNav />
    </div>
  );
}
