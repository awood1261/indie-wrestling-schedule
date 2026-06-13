import { Badge } from '../atoms/Badge';
import { EventMeta } from './EventMeta';
import { PosterTile } from './PosterTile';

type EventCardProps = {
  accent: 'green' | 'purple' | 'blue';
  promotion: string;
  websiteLabel: string;
  websiteUrl: string | null;
  day: string;
  state: string;
  date: string;
  time: string;
  venue: string;
  cityState: string;
  onViewDetails: () => void;
};

export function EventCard({
  accent,
  promotion,
  websiteLabel,
  websiteUrl,
  day,
  state,
  date,
  time,
  venue,
  cityState,
  onViewDetails
}: EventCardProps) {
  const isWeekend = ['Friday', 'Saturday', 'Sunday'].includes(day);
  const shouldShowTimeTbd = time === 'Time TBD';

  return (
    <article className={`event-card event-card--${accent}`} aria-label={promotion}>
      <PosterTile title={promotion} promotion={promotion} accent={accent} />

      <div className="event-card__body">
        <div className="event-card__topline">
          <div className="event-card__badges" aria-label="Event tags">
            {shouldShowTimeTbd ? <Badge label="Time TBD" tone={accent} /> : null}
            {isWeekend ? <Badge label="Weekend" tone={accent} /> : null}
            {state ? <Badge label={state} variant="outline" tone={accent} /> : null}
          </div>
        </div>

        <h2 className="event-name">{promotion}</h2>
        {websiteUrl ? (
          <a
            className={`event-promotion event-promotion--${accent}`}
            href={websiteUrl}
            target="_blank"
            rel="noreferrer"
          >
            {websiteLabel}
          </a>
        ) : (
          <span className={`event-promotion event-promotion--${accent}`}>{websiteLabel}</span>
        )}

        <div className="event-card__details">
          <EventMeta icon="▣">{date}</EventMeta>
          <EventMeta icon="◷">{time}</EventMeta>
          <EventMeta icon="●">
            <span>{venue}</span>
            <span className="event-meta__subtext">{cityState}</span>
          </EventMeta>
        </div>

        <div className="event-card__action-row">
          <button
            type="button"
            className="detail-button"
            aria-label={`View details for ${promotion}`}
            onClick={onViewDetails}
          >
            View Details
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </article>
  );
}
