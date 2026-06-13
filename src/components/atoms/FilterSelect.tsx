type FilterSelectOption = {
  label: string;
  value: string;
};

type FilterSelectProps = {
  id: string;
  label: string;
  value: string;
  options: FilterSelectOption[];
  onChange: (value: string) => void;
};

export function FilterSelect({ id, label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="filter-select" htmlFor={id}>
      <span className="filter-select__label">{label}</span>
      <span className="filter-select__control">
        <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </span>
    </label>
  );
}
