document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll(".fade");
  fadeElements.forEach((el) => observer.observe(el));
});
