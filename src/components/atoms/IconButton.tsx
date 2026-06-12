type IconButtonProps = {
  icon: string;
  label: string;
};

export function IconButton({ icon, label }: IconButtonProps) {
  return (
    <button type="button" className="icon-button" aria-label={label}>
      <span aria-hidden="true">{icon}</span>
    </button>
  );
}
