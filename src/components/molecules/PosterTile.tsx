type PosterTileProps = {
  title: string;
  promotion: string;
  accent: 'green' | 'purple' | 'blue';
};

export function PosterTile({ title, promotion, accent }: PosterTileProps) {
  const initials = promotion
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join('');

  return (
    <div className={`poster-tile poster-tile--${accent}`} aria-hidden="true">
      <span className="poster-tile__promotion">{initials}</span>
      <strong>{title}</strong>
    </div>
  );
}
