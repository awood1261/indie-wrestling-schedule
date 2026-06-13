import { SearchBar } from '../molecules/SearchBar';

type HeroProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export function Hero({ searchQuery, onSearchChange }: HeroProps) {
  return (
    <section className="hero-section" aria-labelledby="home-title">
      <div className="hero-section__art" />
      <div className="hero-section__content">
        <h1 id="home-title" className="hero-title">
          wrestling events <span>near you</span>
        </h1>
        <SearchBar value={searchQuery} onChange={onSearchChange} />
      </div>
    </section>
  );
}
