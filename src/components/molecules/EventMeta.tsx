import type { ReactNode } from 'react';

type EventMetaProps = {
  icon: string;
  children: ReactNode;
};

export function EventMeta({ icon, children }: EventMetaProps) {
  return (
    <p className="event-meta">
      <span aria-hidden="true">{icon}</span>
      <span className="event-meta__content">{children}</span>
    </p>
  );
}
