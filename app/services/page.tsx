export default function Services() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #080c12; --bg2: #0c111a; --denim: #2a4a7f; --denim-bright: #3d6499;
          --denim-dim: #1a2e50; --slate: #4a5e7a; --slate-bright: #6b82a0;
          --border: rgba(42,74,127,0.2); --text: #c8d0e0; --muted: #4e5e78;
          --silver: #b0bcd0; --silver-bright: #d0dae8; --silver-dim: #2a3448;
          --silver-line: rgba(176,188,208,0.15); --font: 'Overpass Mono', monospace;
        }
        body { background: var(--bg); color: var(--text); font-family: var(--font); font-size: 13px; line-height: 1.8; font-weight: 300; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 4rem; border-bottom: 1px solid var(--border); background: rgba(8,12,18,0.96); backdrop-filter: blur(18px); }
        .logo { font-size: 0.85rem; letter-spacing: 0.12em; color: var(--silver-bright); font-weight: 500; }
        nav ul { list-style: none; display: flex; gap: 2.5rem; }
        nav ul a { font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); transition: color 0.25s; }
        nav ul a:hover, nav ul a.active { color: var(--silver); }
        .page-hero { min-height: 44vh; display: flex; flex-direction: column; justify-content: flex-end; padding: 0 4rem 4rem; border-bottom: 1px solid var(--border); }
        .eyebrow { font-size: 0.65rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--denim-bright); margin-bottom: 1.5rem; }
        .page-hero h1 { font-size: clamp(2.2rem, 5.5vw, 5rem); line-height: 1.08; font-weight: 500; color: var(--silver-bright); }
        .cards-section { padding: 5rem 4rem; border-bottom: 1px solid var(--border); }
        .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1px; border: 1px solid var(--border); }
        .card { background: var(--bg2); border: 1px solid var(--border); transition: background 0.25s; }
        .card:hover { background: rgba(42,74,127,0.1); }
        .card-body { padding: 2rem; }
        .tag { display: inline-block; font-size: 0.58rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--slate-bright); border: 1px solid var(--denim-dim); padding: 0.2rem 0.6rem; margin-bottom: 1rem; background: rgba(42,74,127,0.1); }
        .card h3 { font-size: 0.9rem; font-weight: 500; margin-bottom: 0.8rem; color: var(--silver); letter-spacing: 0.06em; }
        .card p { font-size: 0.82rem; color: var(--muted); margin-bottom: 1.5rem; line-height: 1.9; }
        .card-link { font-size: 0.62rem; letter-spacing: 0.16em; color: var(--denim-bright); text-transform: uppercase; transition: color 0.2s; }
        .card-link:hover { color: var(--silver); }
        footer { display: flex; justify-content: space-between; align-items: center; padding: 1.8rem 4rem; font-size: 0.65rem; color: var(--silver-dim); letter-spacing: 0.12em; }
        .socials { display: flex; gap: 2rem; }
        @media (max-width: 700px) {
          nav { padding: 1.2rem 1.5rem; }
          nav ul { gap: 1.5rem; }
          .page-hero, .cards-section, footer { padding-left: 1.5rem; padding-right: 1.5rem; }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
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
              <a href="mailto:myomentia@gmail.com" className="card-link">Get in touch →</a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="tag">Program</span>
              <h3>Service Two</h3>
              <p>Describe what this service is, who it&apos;s for, and what someone can expect.</p>
              <a href="mailto:myomentia@gmail.com" className="card-link">Get in touch →</a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="tag">Consult</span>
              <h3>Service Three</h3>
              <p>Describe what this service is, who it&apos;s for, and what someone can expect.</p>
              <a href="mailto:myomentia@gmail.com" className="card-link">Get in touch →</a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <span>© 2026 MyoMentia</span>
        <div className="socials">
          <a href="https://instagram.com/myomentia" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com/@myomentia" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://linkedin.com/in/myomentia" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}
