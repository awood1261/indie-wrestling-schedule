import { Badge } from '../atoms/Badge';

type EventCardProps = {
  promotion: string;
  date: string;
  time: string | null;
  venue: string;
};

export function EventCard({ promotion, date, time, venue }: EventCardProps) {
  const displayTime = time && time.trim().length > 0 ? time : 'Time TBD';

  return (
    <article className="card event-card" aria-label={promotion}>
      <h3 className="event-name">{promotion}</h3>
      <p className="event-meta">{date} • {displayTime}</p>
      <p className="event-meta">{venue}</p>
      <div className="event-tag-row">
        <Badge label="Weekly schedule" />
        <Badge label="Mobile first" />
      </div>
    </article>
  );
}
