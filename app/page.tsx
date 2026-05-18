"use client";
import { useState } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --denim: #2a4a7f;
          --denim-bright: #3d6499;
          --border: rgba(42,74,127,0.25);
          --muted: #a0aec0;
          --silver: #d0dae8;
          --silver-bright: #eef2f8;
          --silver-dim: #2a3448;
          --slate-bright: #6b82a0;
          --font: 'Overpass Mono', 'Courier New', monospace;
          --mono: 'Overpass Mono', 'Courier New', monospace;
        }
        body { background: #05080f; color: #ccd6e8; font-family: var(--font); font-size: 18px; line-height: 1.8; font-weight: 300; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 4rem; border-bottom: 1px solid var(--border); background: rgba(5,8,15,0.95); backdrop-filter: blur(18px); }
        .logo { font-size: 1rem; letter-spacing: 0.12em; color: var(--silver-bright); font-weight: 500; }
        nav ul { list-style: none; display: flex; gap: 2.5rem; }
        nav ul a { font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); transition: color 0.25s; font-weight: 400; }
        nav ul a:hover { color: var(--silver); }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .hamburger span { display: block; width: 24px; height: 2px; background: var(--silver-bright); transition: all 0.3s; }
        .mobile-menu { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #05080f; z-index: 99; flex-direction: column; justify-content: center; align-items: center; gap: 3rem; }
        .mobile-menu.open { display: flex; }
        .mobile-menu a { font-size: 1.8rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); font-weight: 400; transition: color 0.25s; }
        .mobile-menu a:hover { color: var(--silver); }
        .mobile-close { position: absolute; top: 1.5rem; right: 1.5rem; background: none; border: none; color: var(--silver); font-size: 2rem; cursor: pointer; }
        .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-start; padding: 8rem 4rem 5rem; border-bottom: 1px solid var(--border); background: #05080f; }
        .eyebrow { font-family: var(--mono); font-size: 0.8rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--denim-bright); margin-bottom: 2.5rem; }
        .hero h1 { font-size: clamp(3rem, 6vw, 6rem); line-height: 1.05; font-weight: 500; margin-bottom: 2.5rem; color: var(--silver-bright); letter-spacing: 0.01em; }
        .hero h1 em { font-style: normal; color: var(--denim-bright); }
        .subhead { font-size: 1rem; color: var(--muted); max-width: 58ch; margin-bottom: 1rem; line-height: 1.9; font-weight: 300; }
        .btn { display: inline-block; margin-top: 2rem; padding: 0.9rem 2.2rem; border: 1px solid var(--denim); font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--silver); font-family: var(--mono); background: rgba(42,74,127,0.15); transition: all 0.25s; }
        .btn:hover { background: var(--denim); color: var(--silver-bright); border-color: var(--denim-bright); }
        .btn-outline { border-color: rgba(176,188,208,0.3); color: var(--muted); background: transparent; }
        .btn-outline:hover { border-color: var(--silver); color: #05080f; background: var(--silver); }
        .banner-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: #111; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .banner-strip img { width: 100%; height: auto; display: block; opacity: 0.88; transition: opacity 0.4s ease; }
        .banner-strip img:hover { opacity: 1; }
        .pillars { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid var(--border); background: #05080f; }
        .pillar { padding: 3.5rem 4rem; border-right: 1px solid var(--border); transition: background 0.3s; }
        .pillar:hover { background: rgba(42,74,127,0.08); }
        .pillar:last-child { border-right: none; }
        .pillar-num { display: block; font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.22em; color: var(--denim-bright); margin-bottom: 1.5rem; }
        .pillar h3 { font-size: 1rem; font-weight: 500; margin-bottom: 1rem; color: var(--silver); letter-spacing: 0.1em; text-transform: uppercase; }
        .pillar p { font-size: 0.95rem; color: var(--muted); margin-bottom: 2rem; line-height: 1.9; font-weight: 300; }
        .card-link { font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.16em; color: var(--denim-bright); text-transform: uppercase; transition: color 0.2s; }
        .card-link:hover { color: var(--silver); }
        .contact { padding: 9rem 4rem; text-align: center; border-bottom: 1px solid var(--border); background: #05080f; }
        .contact h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 400; margin-bottom: 3rem; color: var(--silver-bright); }
        .contact .eyebrow { margin-bottom: 1.2rem; }
        footer { display: flex; justify-content: space-between; align-items: center; padding: 1.8rem 4rem; font-family: var(--mono); font-size: 0.75rem; color: var(--muted); letter-spacing: 0.12em; background: #05080f; }
        .socials { display: flex; gap: 2rem; }
        .socials a:hover { color: var(--silver); }
        @media (max-width: 700px) {
          nav { padding: 1.2rem 1.5rem; }
          nav ul { display: none; }
          .hamburger { display: flex; }
          .hero { padding: 6rem 1.5rem 4rem; min-height: 100svh; }
          .hero h1 { font-size: clamp(2.5rem, 11vw, 4rem); margin-bottom: 1.5rem; }
          .eyebrow { font-size: 0.7rem; margin-bottom: 1.2rem; }
          .subhead { font-size: 0.95rem; max-width: 100%; }
          .banner-strip { grid-template-columns: 1fr; }
          .pillars { grid-template-columns: 1fr; }
          .pillar { border-right: none; border-bottom: 1px solid var(--border); padding: 2.5rem 1.5rem; }
          .contact { padding: 5rem 1.5rem; }
          footer { flex-direction: column; gap: 1.2rem; text-align: center; padding: 2rem 1.5rem; }
          .socials { justify-content: center; }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        <a href="/story" onClick={() => setMenuOpen(false)}>Story</a>
        <a href="/science" onClick={() => setMenuOpen(false)}>Science</a>
        <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
      </div>
      <nav>
        <a href="/" className="logo">MyoMentia</a>
        <ul>
          <li><a href="/story">Story</a></li>
          <li><a href="/science">Science</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(true)}>
          <span /><span /><span />
        </button>
      </nav>
      <section className="hero">
        <p className="eyebrow">Pelvic Health · Movement · Neuroscience</p>
        <h1>Myo<em>Mentia.</em></h1>
        <p className="subhead">MyoMentia sits at the intersection of movement science, men&apos;s pelvic health, and perception research. Movement is the intervention. Pelvic function is the outcome. Philosophy is the why underneath the why.</p>
        <p className="subhead">And placebo — the power of perception itself — is the thread connecting all three.</p>
        <a href="/story" className="btn">Read the Story</a>
      </section>
      <div className="banner-strip">
        <img src="/images/banner1.jpg" alt="Banner 1" />
        <img src="/images/banner2.jpg" alt="Banner 2" />
        <img src="/images/banner3.jpg" alt="Banner 3" />
      </div>
      <section id="pillars" className="pillars">
        <div className="pillar">
          <span className="pillar-num">01</span>
          <h3>Pelvic Health</h3>
          <p>The outcome. Men&apos;s pelvic function, understood through a new lens.</p>
          <a href="/services" className="card-link">View Services →</a>
        </div>
        <div className="pillar">
          <span className="pillar-num">02</span>
          <h3>Movement</h3>
          <p>The intervention. How the body moves shapes how it heals — and why.</p>
          <a href="/science" className="card-link">Explore the Science →</a>
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
        <a href="mailto:myomentia@gmail.com" className="btn btn-outline">Send a message</a>
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
