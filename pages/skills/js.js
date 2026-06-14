document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".progress-bar");
        bars.forEach((bar) => {
          bar.style.width = bar.getAttribute("data-width");
        });
      }
    });
  });

  document.querySelectorAll(".fade").forEach((el) => observer.observe(el));

  document.querySelectorAll(".progress-bar").forEach(bar => {
    bar.style.width = "0";
  });
});
