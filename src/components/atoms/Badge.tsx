type BadgeProps = {
  label: string;
  tone?: 'green' | 'purple' | 'blue';
  variant?: 'solid' | 'outline';
};

export function Badge({ label, tone = 'green', variant = 'solid' }: BadgeProps) {
  return <span className={`badge badge--${tone} badge--${variant}`}>{label}</span>;
}
