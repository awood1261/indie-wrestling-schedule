type AppView = 'discover' | 'calendar';

type BottomNavProps = {
  activeView: AppView;
  onSelectView: (view: AppView) => void;
};

const navItems: Array<{ icon: string; label: string; view: AppView }> = [
  { icon: '⌕', label: 'Discover', view: 'discover' },
  { icon: '▣', label: 'Calendar', view: 'calendar' },
];

const disabledNavItems = [
  { icon: '⌖', label: 'Map' }
];

export function BottomNav({ activeView, onSelectView }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {navItems.map((item) => (
        <button
          key={item.label}
          type="button"
          className={`bottom-nav__item${activeView === item.view ? ' bottom-nav__item--active' : ''}`}
          onClick={() => onSelectView(item.view)}
        >
          <span aria-hidden="true">{item.icon}</span>
          {item.label}
        </button>
      ))}
      {disabledNavItems.map((item) => (
        <button key={item.label} type="button" className="bottom-nav__item">
          <span aria-hidden="true">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  );
}
