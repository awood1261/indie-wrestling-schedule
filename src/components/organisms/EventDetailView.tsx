import { Badge } from '../atoms/Badge';
import { EventMeta } from '../molecules/EventMeta';
import { PosterTile } from '../molecules/PosterTile';
import type { FeaturedEvent } from '../../data/schedule';

type EventDetailViewProps = {
  event: FeaturedEvent;
  onBack: () => void;
};

function toMapUrl(location: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
}

export function EventDetailView({ event, onBack }: EventDetailViewProps) {
  const isWeekend = ['Friday', 'Saturday', 'Sunday'].includes(event.day);
  const shouldShowTimeTbd = event.displayTime === 'Time TBD';

  return (
    <article className={`event-detail event-detail--${event.accent}`} aria-labelledby="event-detail-title">
      <button type="button" className="detail-back-button" onClick={onBack}>
        <span aria-hidden="true">←</span>
        Back to events
      </button>

      <section className="event-detail__hero">
        <PosterTile title={event.promotion} promotion={event.promotion} accent={event.accent} />
        <div className="event-detail__hero-copy">
          <div className="event-card__badges" aria-label="Event tags">
            {shouldShowTimeTbd ? <Badge label="Time TBD" tone={event.accent} /> : null}
            {isWeekend ? <Badge label="Weekend" tone={event.accent} /> : null}
            {event.state ? <Badge label={event.state} variant="outline" tone={event.accent} /> : null}
          </div>
          <h1 id="event-detail-title">{event.promotion}</h1>
          <p>{event.websiteLabel}</p>
        </div>
      </section>

      <section className="event-detail__panel" aria-label="Event information">
        <EventMeta icon="▣">{event.displayDate}</EventMeta>
        <EventMeta icon="◷">{event.displayTime}</EventMeta>
        <EventMeta icon="●">
          <span>{event.venueName}</span>
          <span className="event-meta__subtext">{event.cityState}</span>
        </EventMeta>
        <EventMeta icon="⌁">{event.location}</EventMeta>
      </section>

      <div className="event-detail__actions">
        {event.websiteUrl ? (
          <a className="detail-primary-link" href={event.websiteUrl} target="_blank" rel="noreferrer">
            Open Website <span aria-hidden="true">→</span>
          </a>
        ) : (
          <span className="detail-primary-link detail-primary-link--disabled">Website TBD</span>
        )}
        <a className="detail-secondary-link" href={toMapUrl(event.location)} target="_blank" rel="noreferrer">
          View on Map <span aria-hidden="true">→</span>
        </a>
      </div>

      <section className="event-detail__section">
        <p className="eyebrow">Schedule source</p>
        <h2>Complete event information</h2>
        <dl className="detail-list">
          <div>
            <dt>Promotion</dt>
            <dd>{event.promotion}</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>{event.displayDate}</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{event.displayTime}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{event.location}</dd>
          </div>
          <div>
            <dt>Website</dt>
            <dd>{event.websiteUrl ? event.websiteLabel : 'Website TBD'}</dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
