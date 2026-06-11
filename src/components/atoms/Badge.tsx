type BadgeProps = {
  label: string;
};

export function Badge({ label }: BadgeProps) {
  return <span className="tag">{label}</span>;
}
