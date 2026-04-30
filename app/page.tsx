export default function Home() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #000000;
          --bg2: #0a0a0a;
          --denim: #2a4a7f;
          --denim-bright: #3d6499;
          --denim-dim: #1a2e50;
          --slate: #4a5e7a;
          --slate-bright: #6b82a0;
          --border: rgba(42,74,127,0.25);
          --text: #e8edf5;
          --muted: #8a96aa;
          --silver: #c8d4e8;
          --silver-bright: #eef2f8;
          --silver-dim: #2a3448;
          --silver-line: rgba(176,188,208,0.15);
          --font: 'Syne', sans-serif;
          --mono: 'Space Mono', monospace;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: var(--font); font-size: 18px; line-height: 1.7; font-weight: 400; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 4rem; border-bottom: 1px solid var(--border); background: rgba(0,0,0,0.96); backdrop-filter: blur(18px); }
        .logo { font-size: 1.1rem; letter-spacing: 0.12em; color: var(--silver-bright); font-weight: 700; }
        nav ul { list-style: none; display: flex; gap: 2.5rem; }
        nav ul a { font-size: 0.85rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); transition: color 0.25s; font-weight: 600; }
        nav ul a:hover { color: var(--silver); }
        .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; padding: 0 4rem 6rem; border-bottom: 1px solid var(--border); }
        .eyebrow { font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--denim-bright); margin-bottom: 1.5rem; }
        .hero h1 { font-size: clamp(3.5rem, 8vw, 8rem); line-height: 1.02; font-weight: 700; margin-bottom: 2rem; color: var(--silver-bright); letter-spacing: -0.01em; }
        .hero h1 em { font-style: normal; color: var(--denim-bright); }
        .subhead { font-size: 1.15rem; color: var(--muted); max-width: 60ch; margin-bottom: 1rem; line-height: 1.9; font-weight: 400; }
        .btn { display: inline-block; margin-top: 1.5rem; padding: 0.85rem 2rem; border: 1px solid var(--denim); font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--silver); font-family: var(--mono); background: rgba(42,74,127,0.12); transition: all 0.25s; }
        .btn:hover { background: var(--denim); color: var(--silver-bright); border-color: var(--denim-bright); }
        .btn-outline { border-color: var(--silver-dim); color: var(--slate-bright); background: transparent; }
        .btn-outline:hover { border-color: var(--silver); color: var(--bg); background: var(--silver); }
        .pillars { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid var(--border); }
        .pillar { padding: 3.5rem 4rem; border-right: 1px solid var(--border); transition: background 0.3s; }
        .pillar:hover { background: rgba(42,74,127,0.08); }
        .pillar:last-child { border-right: none; }
        .pillar-num { display: block; font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.22em; color: var(--denim-bright); margin-bottom: 1.5rem; }
        .pillar h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 0.8rem; color: var(--silver); letter-spacing: 0.05em; text-transform: uppercase; }
        .pillar p { font-size: 1rem; color: var(--muted); margin-bottom: 1.5rem; line-height: 1.9; }
        .card-link { font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.16em; color: var(--denim-bright); text-transform: uppercase; transition: color 0.2s; }
        .card-link:hover { color: var(--silver); }
        .contact { padding: 9rem 4rem; text-align: center; border-bottom: 1px solid var(--border); }
        .contact h2 { font-size: clamp(1.8rem, 4vw, 3.2rem); font-weight: 700; margin-bottom: 3rem; color: var(--silver-bright); letter-spacing: 0.02em; }
        .contact .eyebrow { margin-bottom: 1.2rem; }
        footer { display: flex; justify-content: space-between; align-items: center; padding: 1.8rem 4rem; font-family: var(--mono); font-size: 0.75rem; color: var(--muted); letter-spacing: 0.12em; }
        .socials { display: flex; gap: 2rem; }
        .socials a:hover { color: var(--silver); }
        @media (max-width: 700px) {
          nav { padding: 1.2rem 1.5rem; }
          nav ul { gap: 1.5rem; }
          .hero, .pillars, .contact, footer { padding-left: 1.5rem; padding-right: 1.5rem; }
          .pillars { grid-template-columns: 1fr; }
          .pillar { border-right: none; border-bottom: 1px solid var(--border); padding: 2.5rem 1.5rem; }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&family=Space+Mono:ital@0;1&display=swap" rel="stylesheet" />
      <nav>
        <a href="/" className="logo">MyoMentia</a>
        <ul>
          <li><a href="/story">Story</a></li>
          <li><a href="/science">Science</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
      </nav>
      <section className="hero">
        <p className="eyebrow">Movement · Pelvic Health · Neuroscience</p>
        <h1>Myo<em>Mentia.</em></h1>
        <p className="subhead">MyoMentia sits at the intersection of movement science, men&apos;s pelvic health, and perception research. Movement is the intervention. Pelvic function is the outcome. Philosophy is the why underneath the why.</p>
        <p className="subhead">And placebo — the power of perception itself — is the thread connecting all three.</p>
        <a href="/story" className="btn">Read the Story</a>
      </section>
      <section id="pillars" className="pillars">
        <div className="pillar">
          <span className="pillar-num">01</span>
          <h3>Movement</h3>
          <p>The intervention. How the body moves shapes how it heals — and why.</p>
          <a href="/science" className="card-link">Explore the Science →</a>
        </div>
        <div className="pillar">
          <span className="pillar-num">02</span>
          <h3>Pelvic Health</h3>
          <p>The outcome. Men&apos;s pelvic function, understood through a new lens.</p>
          <a href="/services" className="card-link">View Services →</a>
        </div>
        <div className="pillar">
          <span className="pillar-num">03</span>
          <h3>Neuroscience</h3>
          <p>The thread. Placebo, belief, and the power of the mind-body connection.</p>
          <a href="/story" className="card-link">The Philosophy →</a>
        </div>
      </section>
      <section className="contact">
        <p className="eyebrow">Get in touch</p>
        <h2>Want to work together?</h2>
        <a href="mailto:you@email.com" className="btn btn-outline">Send a message</a>
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
