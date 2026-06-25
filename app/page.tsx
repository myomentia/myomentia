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
          --denim-bright: #4a7abf;
          --border: rgba(42,74,127,0.25);
          --muted: #b0bece;
          --silver: #d8e2f0;
          --silver-bright: #f0f4fa;
          --silver-dim: #2a3448;
          --slate-bright: #6b82a0;
          --font: 'Overpass Mono', 'Courier New', monospace;
          --mono: 'Overpass Mono', 'Courier New', monospace;
        }
        html { font-size: 18px; }
        body { background: #05080f; color: #d0daea; font-family: var(--font); font-size: 1rem; line-height: 1.8; font-weight: 300; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 4rem; border-bottom: 1px solid var(--border); background: rgba(5,8,15,0.96); backdrop-filter: blur(18px); }
        .logo { font-size: 0.9rem; letter-spacing: 0.12em; color: var(--silver-bright); font-weight: 500; }
        nav ul { list-style: none; display: flex; gap: 2.5rem; }
        nav ul a { font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); transition: color 0.25s; font-weight: 400; }
        nav ul a:hover { color: var(--silver-bright); }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .hamburger span { display: block; width: 24px; height: 2px; background: var(--silver-bright); transition: all 0.3s; }
        .mobile-menu { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #05080f; z-index: 99; flex-direction: column; justify-content: center; align-items: center; gap: 3rem; }
        .mobile-menu.open { display: flex; }
        .mobile-menu a { font-size: 1.8rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); font-weight: 400; transition: color 0.25s; }
        .mobile-menu a:hover { color: var(--silver); }
        .mobile-close { position: absolute; top: 1.5rem; right: 1.5rem; background: none; border: none; color: var(--silver); font-size: 2rem; cursor: pointer; }
        .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-start; padding: 8rem 4rem 5rem; border-bottom: 1px solid var(--border); background: #05080f; }
        .eyebrow { font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--denim-bright); margin-bottom: 2.5rem; }
        .hero h1 { font-size: clamp(3.5rem, 7vw, 7rem); line-height: 1.02; font-weight: 700; margin-bottom: 2.5rem; color: #ffffff; letter-spacing: -0.01em; }
        .hero h1 em { font-style: normal; color: var(--denim-bright); }
        .subhead { font-size: 1rem; color: var(--muted); max-width: 100%; margin-bottom: 1rem; line-height: 1.9; font-weight: 300; }
        .btn { display: inline-block; width: fit-content; margin-top: 2.5rem; padding: 1rem 2.5rem; border: 1px solid var(--denim-bright); font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--silver-bright); font-family: var(--mono); background: rgba(42,74,127,0.2); transition: all 0.25s; }
        .btn:hover { background: var(--denim-bright); color: #fff; border-color: var(--denim-bright); }
        .btn-outline { border-color: rgba(176,188,208,0.35); color: var(--muted); background: transparent; }
        .btn-outline:hover { border-color: var(--silver); color: #05080f; background: var(--silver); }
        .banner-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: #111; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .banner-strip img { width: 100%; height: 260px; object-fit: cover; display: block; opacity: 0.85; transition: opacity 0.4s ease; }
        .banner-strip img:hover { opacity: 1; }
        .pillars { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid var(--border); background: #05080f; }
        .pillar { padding: 4rem; border-right: 1px solid var(--border); transition: background 0.3s; }
        .pillar:hover { background: rgba(42,74,127,0.1); }
        .pillar:last-child { border-right: none; }
        .pillar-num { display: block; font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.25em; color: var(--denim-bright); margin-bottom: 1.5rem; }
        .pillar h3 { font-size: 1rem; font-weight: 600; margin-bottom: 1rem; color: var(--silver-bright); letter-spacing: 0.08em; text-transform: uppercase; }
        .pillar p { font-size: 0.9rem; color: var(--muted); margin-bottom: 2rem; line-height: 1.9; font-weight: 300; }
        .card-link { font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.16em; color: var(--denim-bright); text-transform: uppercase; transition: color 0.2s; }
        .card-link:hover { color: var(--silver-bright); }
        .contact { padding: 10rem 4rem; text-align: center; border-bottom: 1px solid var(--border); background: #05080f; }
        .contact h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 500; margin-bottom: 3rem; color: var(--silver-bright); }
        .contact .eyebrow { margin-bottom: 1.5rem; }
        footer { display: flex; justify-content: space-between; align-items: center; padding: 2rem 4rem; font-family: var(--mono); font-size: 0.7rem; color: var(--muted); letter-spacing: 0.12em; background: #05080f; border-top: 1px solid var(--border); }
        .socials { display: flex; gap: 2rem; }
        .socials a:hover { color: var(--silver-bright); }
        @media (max-width: 700px) {
          html { font-size: 16px; }
          nav { padding: 1.2rem 1.5rem; }
          nav ul { display: none; }
          .hamburger { display: flex; }
          .hero { padding: 6rem 1.5rem 4rem; min-height: 100svh; }
          .hero h1 { font-size: clamp(2.8rem, 12vw, 5rem); margin-bottom: 1.5rem; }
          .eyebrow { font-size: 0.65rem; margin-bottom: 1.2rem; }
          .subhead { font-size: 0.95rem; }
          .banner-strip { grid-template-columns: 1fr; }
          .banner-strip img { height: 200px; }
          .pillars { grid-template-columns: 1fr; }
          .pillar { border-right: none; border-bottom: 1px solid var(--border); padding: 2.5rem 1.5rem; }
          .contact { padding: 5rem 1.5rem; }
          footer { flex-direction: column; gap: 1.2rem; text-align: center; padding: 2rem 1.5rem; }
          .socials { justify-content: center; }
        }
      `}</style>
<link href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
<p className="subhead">Pelvic health issues affect millions of men, yet almost no one talks about it. Pain, leakage, post-surgery recovery, and sexual dysfunction are real, treatable problems that too many men silently struggle with. MyoMentia is an educational content platform built by a physical therapy student, combining movement, physical therapy principles, and neuroscience to help men better understand their bodies. This is not a clinical service, and nothing here is medical advice.</p>
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
<p>The topic. An area of men&apos;s health that&apos;s widely misunderstood, rarely discussed, and more common than most people realize.</p>
<a href="/services" className="card-link">View Services →</a>
</div>
<div className="pillar">
<span className="pillar-num">02</span>
<h3>Movement</h3>
<p>The lens. Movement isn&apos;t just exercise. Physical therapy has spent decades studying how the body adapts, compensates, and heals. That&apos;s what this draws from.</p>
<a href="/science" className="card-link">Explore the Science →</a>
</div>
<div className="pillar">
<span className="pillar-num">03</span>
<h3>Neuroscience</h3>
<p>The thread. Pain and recovery aren&apos;t purely mechanical. The brain is involved in both, and that changes how you approach treatment.</p>
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
