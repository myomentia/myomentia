const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.15 }
);

document.querySelectorAll('.card, .contact h2, .pillar')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });