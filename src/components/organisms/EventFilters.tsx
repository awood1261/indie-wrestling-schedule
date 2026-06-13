import { FilterSelect } from '../atoms/FilterSelect';

type EventFiltersProps = {
  dayOptions: string[];
  stateOptions: string[];
  selectedDay: string;
  selectedState: string;
  onSelectDay: (day: string) => void;
  onSelectState: (state: string) => void;
};

export function EventFilters({
  dayOptions,
  stateOptions,
  selectedDay,
  selectedState,
  onSelectDay,
  onSelectState
}: EventFiltersProps) {
  const daySelectOptions = [
    { label: 'All days', value: 'all' },
    ...dayOptions.map((day) => ({ label: day, value: day }))
  ];
  const stateSelectOptions = [
    { label: 'All states', value: 'all' },
    ...stateOptions.map((state) => ({ label: state, value: state }))
  ];

  return (
    <section className="filter-panel" aria-label="Event filters">
      <FilterSelect
        id="day-filter"
        label="Day"
        value={selectedDay}
        options={daySelectOptions}
        onChange={onSelectDay}
      />
      <FilterSelect
        id="state-filter"
        label="State"
        value={selectedState}
        options={stateSelectOptions}
        onChange={onSelectState}
      />
    </section>
  );
}
