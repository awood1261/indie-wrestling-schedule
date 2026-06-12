const navItems = [
  { icon: '⌕', label: 'Discover', active: true },
  { icon: '▣', label: 'Calendar' },
  { icon: '⌖', label: 'Map' },
  { icon: '☆', label: 'Favorites' }
];

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {navItems.map((item) => (
        <button
          key={item.label}
          type="button"
          className={`bottom-nav__item${item.active ? ' bottom-nav__item--active' : ''}`}
        >
          <span aria-hidden="true">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  );
}
