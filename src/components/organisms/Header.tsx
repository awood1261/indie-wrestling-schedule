export function Header() {
  return (
    <header className="card header-card">
      <div className="brand-row">
        <img src="/gf-logo.png" alt="GrapsFinder logo" className="brand-logo" />
        <div>
          <p className="eyebrow">Indie Wrestling Schedule</p>
          <h1 className="header-title">Find your next show</h1>
        </div>
      </div>
      <p className="header-subtitle">A mobile-first schedule app built from the current wrestling data feed.</p>
    </header>
  );
}
