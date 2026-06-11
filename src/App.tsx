import { Header } from './components/organisms/Header';
import { WeeklyEventList } from './components/organisms/WeeklyEventList';

export default function App() {
  return (
    <main className="app-shell">
      <Header />
      <section className="page-section">
        <p className="eyebrow">Upcoming week</p>
        <h2 className="page-title">Find independent wrestling events</h2>
        <p className="page-copy">
          Browse the current schedule in a mobile-first layout designed for quick scanning.
        </p>
      </section>
      <WeeklyEventList />
    </main>
  );
}
