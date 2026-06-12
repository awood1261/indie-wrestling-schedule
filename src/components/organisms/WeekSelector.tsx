import type { ScheduleWeek } from '../../data/schedule';

type WeekSelectorProps = {
  weeks: ScheduleWeek[];
  selectedWeekId: string;
  onSelectWeek: (weekId: string) => void;
};

export function WeekSelector({ weeks, selectedWeekId, onSelectWeek }: WeekSelectorProps) {
  return (
    <div className="week-selector" aria-label="Select event week">
      {weeks.map((week) => (
        <button
          key={week.id}
          type="button"
          className={`week-selector__item${week.id === selectedWeekId ? ' week-selector__item--active' : ''}`}
          aria-pressed={week.id === selectedWeekId}
          onClick={() => onSelectWeek(week.id)}
        >
          <span>{week.label}</span>
          <strong>{week.events.length} events</strong>
        </button>
      ))}
    </div>
  );
}
