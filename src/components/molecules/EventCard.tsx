import { Badge } from '../atoms/Badge';
import { EventMeta } from './EventMeta';
import { PosterTile } from './PosterTile';

type EventCardProps = {
  accent: 'green' | 'purple' | 'blue';
  promotion: string;
  websiteLabel: string;
  websiteUrl: string | null;
  date: string;
  time: string;
  venue: string;
  cityState: string;
  featureLabel?: string;
  matchCount: number;
};

export function EventCard({
  accent,
  promotion,
  websiteLabel,
  websiteUrl,
  date,
  time,
  venue,
  cityState,
  featureLabel = 'Live Event',
  matchCount
}: EventCardProps) {
  return (
    <article className={`event-card event-card--${accent}`} aria-label={promotion}>
      <PosterTile title={promotion} promotion={promotion} accent={accent} />

      <div className="event-card__body">
        <div className="event-card__topline">
          <Badge label={featureLabel} tone={accent} />
          <Badge label="Live Event" variant="outline" tone={accent} />
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
          <span className="match-note">🏆 {matchCount} schedule notes</span>
          <button type="button" className="detail-button">
            View Details
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </article>
  );
}
