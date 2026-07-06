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

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
});

async function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  const response = await fetch(file);
  element.innerHTML = await response.text();
}

document.addEventListener("DOMContentLoaded", async () => {
  const BASE = window.BASE_PATH || "";

  await loadComponent("header", BASE + "components/header.html");
  await loadComponent("footer", BASE + "components/footer.html");

  // مسیر تصاویر
  document.querySelectorAll("[data-src]").forEach((img) => {
    img.src = BASE + img.dataset.src;
  });

  // لینک صفحات
  const routes = {
    home: "index.html",
    about: "pages/about/about.html",
    contact: "pages/contact/contact.html",
    projects: "pages/projects/projects.html",
    skills: "pages/skills/skills.html",
  };

  document.querySelectorAll("[data-page]").forEach((link) => {
    link.href = BASE + routes[link.dataset.page];
  });

  // Active Link
  const current = location.pathname;

  document.querySelectorAll("[data-page]").forEach((link) => {
    const route = routes[link.dataset.page];

    if (current.endsWith(route)) {
      link.classList.add("active");
    }
  });
});
