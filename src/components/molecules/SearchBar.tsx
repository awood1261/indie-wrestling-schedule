type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search-bar">
      <span className="search-bar__icon" aria-hidden="true">⌕</span>
      <span className="sr-only">Search events, promotions, or cities</span>
      <input
        type="search"
        placeholder="Search events, promotions, cities..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
