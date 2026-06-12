import { IconButton } from '../atoms/IconButton';

export function Header() {
  return (
    <header className="site-header">
      <IconButton icon="☰" label="Open menu" />
      <div className="brand-row">
        <img src="/gf-horz-logo.png" alt="GrapsFinder" className="brand-logo" />
      </div>
      <IconButton icon="♢" label="View notifications" />
    </header>
  );
}
