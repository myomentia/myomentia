export default function Story() {
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
          --silver-line: rgba(176,188,208,0.15);
          --font: 'Overpass Mono', 'Courier New', monospace;
        }
        html { font-size: 18px; }
        body { background: #05080f; color: #d0daea; font-family: var(--font); font-size: 1rem; line-height: 1.8; font-weight: 300; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 4rem; border-bottom: 1px solid var(--border); background: rgba(5,8,15,0.96); backdrop-filter: blur(18px); }
        .logo { font-size: 0.9rem; letter-spacing: 0.12em; color: var(--silver-bright); font-weight: 500; }
        nav ul { list-style: none; display: flex; gap: 2.5rem; }
        nav ul a { font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); transition: color 0.25s; }
        nav ul a:hover, nav ul a.active { color: var(--silver-bright); }
        .page-hero { min-height: 44vh; display: flex; flex-direction: column; justify-content: flex-end; padding: 0 4rem 4rem; border-bottom: 1px solid var(--border); }
        .eyebrow { font-size: 0.72rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--denim-bright); margin-bottom: 1.5rem; }
        .page-hero h1 { font-size: clamp(2.5rem, 5.5vw, 5rem); line-height: 1.05; font-weight: 700; color: #ffffff; }
        .prose-section { padding: 7rem 4rem; border-bottom: 1px solid var(--border); }
        .prose-inner { max-width: 68ch; margin: 0 auto; }
        .prose-inner p { font-size: 1rem; color: var(--silver-bright); margin-bottom: 1.8rem; line-height: 2; }
        .prose-inner h2 { font-size: 0.85rem; font-weight: 600; color: var(--silver-bright); margin: 3rem 0 1.2rem; letter-spacing: 0.12em; text-transform: uppercase; padding-bottom: 0.8rem; border-bottom: 1px solid var(--silver-line); }
        footer { display: flex; justify-content: space-between; align-items: center; padding: 2rem 4rem; font-size: 0.7rem; color: var(--muted); letter-spacing: 0.12em; border-top: 1px solid var(--border); }
        .socials { display: flex; gap: 2rem; }
        .socials a:hover { color: var(--silver-bright); }
        @media (max-width: 700px) {
          nav { padding: 1.2rem 1.5rem; }
          nav ul { gap: 1.5rem; }
          .page-hero, .prose-section, footer { padding-left: 1.5rem; padding-right: 1.5rem; }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
          <p>I was a biochemistry major and a collegiate pole vaulter, which put me in an interesting position. In the classroom I was learning how the body works at a molecular level. On the runway I was learning another side of that same system: that performance is as much about what happens in your head as what happens in your muscles. The neuromuscular system doesn&apos;t separate the two, and neither could I. That overlap between mental state, movement, and physical outcome became the thread I kept pulling on.</p>
          <p>That&apos;s what pushed me toward physical therapy. It&apos;s one of the few fields where you&apos;re actually trained to think about movement, cognition, and pain together. The nuance felt right. I wanted to work in a space where the answer to &quot;why does this person hurt&quot; wasn&apos;t always a prescription.</p>
          <p>That led me deeper into the neuroscience. The relationship between the brain and the body isn&apos;t one-directional. How you move shapes how you feel, and how you feel shapes how you move. That two-way street shows up everywhere in the research and almost nowhere in the conversation most people have about their own health.</p>
          <p>Men&apos;s pelvic health is where a lot of this converges. These are common, treatable problems, but most men never seek help for them and many don&apos;t even know help exists. That&apos;s not a coincidence. Men are socialized to ignore their bodies, push through pain, and not ask questions, and that pattern ends up hurting everyone. The same structure that tells men not to cry also tells them not to go to the doctor.</p>
          <p>I&apos;m a physical therapy student and researcher trying to do something about a small piece of that. This platform is educational content, not clinical care, and I&apos;m not a licensed provider yet. But I think giving men accurate, honest information about their own bodies is a reasonable place to start.</p>
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
