export default function Services() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #000000; --bg2: #0a0a0a; --denim: #2a4a7f; --denim-bright: #3d6499;
          --denim-dim: #1a2e50; --slate: #4a5e7a; --slate-bright: #6b82a0;
          --border: rgba(42,74,127,0.2); --text: #e8edf5; --muted: #6b7a94;
          --silver: #c8d4e8; --silver-bright: #eef2f8; --silver-dim: #2a3448;
          --silver-line: rgba(176,188,208,0.15); --font: 'Syne', sans-serif; --mono: 'Space Mono', monospace;
        }
        body { background: var(--bg); color: var(--text); font-family: var(--font); font-size: 16px; line-height: 1.7; font-weight: 400; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 4rem; border-bottom: 1px solid var(--border); background: rgba(0,0,0,0.96); backdrop-filter: blur(18px); }
        .logo { font-size: 1rem; letter-spacing: 0.12em; color: var(--silver-bright); font-weight: 700; }
        nav ul { list-style: none; display: flex; gap: 2.5rem; }
        nav ul a { font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); transition: color 0.25s; font-weight: 500; }
        nav ul a:hover, nav ul a.active { color: var(--silver); }
        .page-hero { min-height: 44vh; display: flex; flex-direction: column; justify-content: flex-end; padding: 0 4rem 4rem; border-bottom: 1px solid var(--border); }
        .eyebrow { font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--denim-bright); margin-bottom: 1.5rem; }
        .page-hero h1 { font-size: clamp(3.5rem, 8vw, 8rem); line-height: 1.02; font-weight: 700; color: var(--silver-bright); }
        .cards-section { padding: 5rem 4rem; border-bottom: 1px solid var(--border); }
        .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1px; border: 1px solid var(--border); }
        .card { background: var(--bg2); border: 1px solid var(--border); transition: background 0.25s; }
        .card:hover { background: rgba(42,74,127,0.1); }
        .card-body { padding: 2rem; }
        .tag { display: inline-block; font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--slate-bright); border: 1px solid var(--denim-dim); padding: 0.2rem 0.6rem; margin-bottom: 1rem; background: rgba(42,74,127,0.1); }
        .card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.8rem; color: var(--silver); letter-spacing: 0.04em; }
        .card p { font-size: 0.95rem; color: var(--muted); margin-bottom: 1.5rem; line-height: 1.9; }
        .card-link { font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.16em; color: var(--denim-bright); text-transform: uppercase; transition: color 0.2s; }
        .card-link:hover { color: var(--silver); }
        footer { display: flex; justify-content: space-between; align-items: center; padding: 1.8rem 4rem; font-family: var(--mono); font-size: 0.65rem; color: var(--silver-dim); letter-spacing: 0.12em; }
        .socials { display: flex; gap: 2rem; }
        @media (max-width: 700px) {
          nav { padding: 1.2rem 1.5rem; } nav ul { gap: 1.5rem; }
          .page-hero, .cards-section, footer { padding-left: 1.5rem; padding-right: 1.5rem; }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&family=Space+Mono:ital@0;1&display=swap" rel="stylesheet" />
      <nav>
        <a href="/" className="logo">MyoMentia</a>
        <ul>
          <li><a href="/story">Story</a></li>
          <li><a href="/science">Science</a></li>
          <li><a href="/services" className="active">Services</a></li>
        </ul>
      </nav>
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>How we work together.</h1>
      </section>
      <section className="cards-section">
        <div className="cards">
          <div className="card">
            <div className="card-body">
              <span className="tag">1:1</span>
              <h3>Service One</h3>
              <p>Describe what this service is, who it&apos;s for, and what someone can expect.</p>
              <a href="mailto:you@email.com" className="card-link">Get in touch →</a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="tag">Program</span>
              <h3>Service Two</h3>
              <p>Describe what this service is, who it&apos;s for, and what someone can expect.</p>
              <a href="mailto:you@email.com" className="card-link">Get in touch →</a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="tag">Consult</span>
              <h3>Service Three</h3>
              <p>Describe what this service is, who it&apos;s for, and what someone can expect.</p>
              <a href="mailto:you@email.com" className="card-link">Get in touch →</a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <span>© 2026 MyoMentia</span>
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}
