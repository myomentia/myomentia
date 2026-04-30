import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyoMentia",
};

export default function Home() {
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
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: var(--font); font-size: 13px; line-height: 1.8; font-weight: 300; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 4rem; border-bottom: 1px solid var(--border); background: rgba(8,12,18,0.96); backdrop-filter: blur(18px); }
        .logo { font-size: 0.85rem; letter-spacing: 0.12em; color: var(--silver-bright); font-weight: 500; text-shadow: 0 0 20px rgba(176,188,208,0.3); }
        nav ul { list-style: none; display: flex; gap: 2.5rem; }
        nav ul a { font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); transition: color 0.25s; }
        nav ul a:hover { color: var(--silver); }
        .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; padding: 0 4rem 6rem; border-bottom: 1px solid var(--border); }
        .eyebrow { font-size: 0.65rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--denim-bright); margin-bottom: 1.5rem; }
        .hero h1 { font-size: clamp(2.2rem, 5.5vw, 5rem); line-height: 1.08; font-weight: 500; margin-bottom: 2rem; color: var(--silver-bright); letter-spacing: 0.01em; }
        .hero h1 em { font-style: normal; color: var(--denim-bright); }
        .subhead { font-size: 0.85rem; color: var(--muted); max-width: 60ch; margin-bottom: 1rem; line-height: 2; }
        .btn { display: inline-block; margin-top: 1.5rem; padding: 0.7rem 1.8rem; border: 1px solid var(--denim); font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--silver); background: rgba(42,74,127,0.12); transition: all 0.25s; }
        .btn:hover { background: var(--denim); color: var(--silver-bright); border-color: var(--denim-bright); }
        .btn-outline { border-color: var(--silver-dim); color: var(--slate-bright); background: transparent; }
        .btn-outline:hover { border-color: var(--silver); color: var(--bg); background: var(--silver); }
        .pillars { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid var(--border); }
        .pillar { padding: 3.5rem 4rem; border-right: 1px solid var(--border); transition: background 0.3s; }
        .pillar:hover { background: rgba(42,74,127,0.08); }
        .pillar:last-child { border-right: none; }
        .pillar-num { display: block; font-size: 0.6rem; letter-spacing: 0.22em; color: var(--denim-bright); margin-bottom: 1.5rem; }
        .pillar h3 { font-size: 0.88rem; font-weight: 500; margin-bottom: 0.8rem; color: var(--silver); letter-spacing: 0.1em; text-transform: uppercase; }
        .pillar p { font-size: 0.8rem; color: var(--muted); margin-bottom: 1.5rem; line-height: 1.9; }
        .card-link { font-size: 0.62rem; letter-spacing: 0.16em; color: var(--denim-bright); text-transform: uppercase; transition: color 0.2s; }
        .card-link:hover { color: var(--silver); }
        .contact { padding: 9rem 4rem; text-align: center; border-bottom: 1px solid var(--border); }
        .contact h2 { font-size: clamp(1.3rem, 3vw, 2.4rem); font-weight: 400; margin-bottom: 3rem; color: var(--silver-bright); letter-spacing: 0.02em; }
        .contact .eyebrow { margin-bottom: 1.2rem; }
        footer { display: flex; justify-content: space-between; align-items: center; padding: 1.8rem 4rem; font-size: 0.65rem; color: var(--silver-dim); letter-spacing: 0.12em; }
        .socials { display: flex; gap: 2rem; }
        .socials a:hover { color: var(--silver); }
        .fade-in { opacity: 0; transform: translateY(12px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 700px) {
          nav { padding: 1.2rem 1.5rem; }
          nav ul { gap: 1.5rem; }
          .hero, .pillars, .contact, footer { padding-left: 1.5rem; padding-right: 1.5rem; }
          .pillars { grid-template-columns: 1fr; }
          .pillar { border-right: none; border-bottom: 1px solid var(--border); padding: 2.5rem 1.5rem; }
        }
      `}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
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
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}
