type FilterChipProps = {
  icon: string;
  label: string;
  active?: boolean;
};

export function FilterChip({ icon, label, active = false }: FilterChipProps) {
  return (
    <button type="button" className={`filter-chip${active ? ' filter-chip--active' : ''}`}>
      <span aria-hidden="true">{icon}</span>
      {label}
    </button>
  );
}
