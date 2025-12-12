document.addEventListener("DOMContentLoaded", () => {
  const targets = Array.from(document.querySelectorAll('.fade-target'));

  if (targets.length === 0) {
    return;
  }

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });

  targets.forEach(t => obs.observe(t));


  targets.forEach(t => {
    const rect = t.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      t.classList.add('show');
      obs.unobserve(t);
    }
  });

});
