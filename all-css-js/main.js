document.addEventListener("DOMContentLoaded", async () => {
  window.BASE = window.BASE_PATH || "";

  await loadComponent("header", BASE + "components/header.html");
  await loadComponent("footer", BASE + "components/footer.html");

  initNavigation();
  setAvailability(1);
  loadImages();
  initFadeAnimation();
});

async function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error("Failed to load: " + file);
    }

    element.innerHTML = await response.text();
  } catch (err) {
    console.error(err);
  }
}

function initNavigation() {
  const routes = {
    home: "index.html",
    about: "pages/about/about.html",
    contact: "pages/contact/contact.html",
    projects: "pages/projects/projects.html",
    skills: "pages/skills/skills.html",
  };

  document.querySelectorAll("[data-page]").forEach((link) => {
    const page = link.dataset.page;

    if (routes[page]) {
      link.href = BASE + routes[page];
    }
  });

  const currentPage = document.body.dataset.page;

  document.querySelectorAll("[data-page]").forEach((link) => {
    link.classList.remove("active");

    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });
}

function loadImages() {
  document.querySelectorAll("[data-src]").forEach((img) => {
    img.src = BASE + img.dataset.src;
  });
}

function initFadeAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  document
    .querySelectorAll(".fade,.fade-hero")
    .forEach((el) => observer.observe(el));
}

function setAvailability(status) {
  const availability = document.querySelector(".availability");
  const button = document.querySelector(".availability .btn");

  if (!availability || !button) return;

  availability.classList.remove("available", "busy");

  if (status === 1) {
    availability.classList.add("available");
    button.textContent = "آماده همکاری - تماس";
  } else {
    availability.classList.add("busy");
    button.textContent = "مشغول پروژه";
  }
}
