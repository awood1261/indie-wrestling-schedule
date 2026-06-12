import { Header } from './components/organisms/Header';
import { WeeklyEventList } from './components/organisms/WeeklyEventList';

export default function App() {
  return (
    <main className="app-shell">
      <Header />

      <section className="page-section hero-panel card">
        <div className="hero-copy">
          <p className="eyebrow">Featured this week</p>
          <h2 className="page-title">Find independent wrestling events</h2>
          <p className="page-copy">
            Discover the next show, scan tonight&apos;s lineup, and keep your weekend wrestling plan in one place.
          </p>
        </div>

        <div className="hero-badges" aria-label="Quick filters">
          <span className="chip chip--active">This week</span>
          <span className="chip">Live tonight</span>
          <span className="chip">Near you</span>
        </div>

        <div className="hero-stats" aria-label="Highlights">
          <article className="stat-card">
            <strong>12+</strong>
            <span>promotions listed</span>
          </article>
          <article className="stat-card">
            <strong>Quick scan</strong>
            <span>mobile-first event cards</span>
          </article>
          <article className="stat-card">
            <strong>Fresh feed</strong>
            <span>built from the current schedule</span>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Upcoming week</p>
            <h3 className="section-title">Tonight&apos;s independent wrestling lineup</h3>
          </div>
          <button type="button" className="ghost-button">View all →</button>
        </div>
      </section>

      <WeeklyEventList />
    </main>
  );
}
