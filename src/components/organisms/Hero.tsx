import { FilterChip } from '../atoms/FilterChip';
import { SearchBar } from '../molecules/SearchBar';

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="home-title">
      <div className="hero-section__art" />
      <div className="hero-section__content">
        <h1 id="home-title" className="hero-title">
          Find wrestling events <span>near you</span>
        </h1>
        <SearchBar />
        <div className="filter-row" aria-label="Event filters">
          <FilterChip icon="⚡" label="All Events" active />
          <FilterChip icon="▣" label="This Week" />
          <FilterChip icon="▣" label="This Month" />
          <FilterChip icon="⌖" label="Near Me" />
          <FilterChip icon="☷" label="Filters" />
        </div>
      </div>
    </section>
  );
}
