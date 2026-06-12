export function SearchBar() {
  return (
    <label className="search-bar">
      <span className="search-bar__icon" aria-hidden="true">⌕</span>
      <span className="sr-only">Search events, promotions, or cities</span>
      <input type="search" placeholder="Search events, promotions, cities..." />
    </label>
  );
}
