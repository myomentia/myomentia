export default function Story() {
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
        .prose-section { padding: 7rem 4rem; border-bottom: 1px solid var(--border); }
        .prose-inner { max-width: 64ch; margin: 0 auto; }
        .prose-inner p { font-size: 0.9rem; color: var(--muted); margin-bottom: 1.8rem; line-height: 2; }
        .prose-inner h2 { font-size: 0.88rem; font-weight: 500; color: var(--silver); margin: 3rem 0 1.2rem; letter-spacing: 0.12em; text-transform: uppercase; padding-bottom: 0.8rem; border-bottom: 1px solid var(--silver-line); }
        footer { display: flex; justify-content: space-between; align-items: center; padding: 1.8rem 4rem; font-size: 0.65rem; color: var(--silver-dim); letter-spacing: 0.12em; }
        .socials { display: flex; gap: 2rem; }
        @media (max-width: 700px) {
          nav { padding: 1.2rem 1.5rem; }
          nav ul { gap: 1.5rem; }
          .page-hero, .prose-section, footer { padding-left: 1.5rem; padding-right: 1.5rem; }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      <nav>
        <a href="/" className="logo">MyoMentia</a>
        <ul>
          <li><a href="/story" className="active">Story</a></li>
          <li><a href="/science">Science</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
      </nav>
      <section className="page-hero">
        <p className="eyebrow">The Story</p>
        <h1>Why this exists.</h1>
      </section>
      <section className="prose-section">
        <div className="prose-inner">
          <p>This is where your story goes. Talk about who you are, what led you to physical therapy, what you&apos;re researching in the placebo lab, and why men&apos;s pelvic health matters to you.</p>
          <p>Be personal. Be direct. People come here because they want to understand — give them something real.</p>
          <p>Add as many paragraphs as you need. You can also add subheadings below using an h2 tag.</p>
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
