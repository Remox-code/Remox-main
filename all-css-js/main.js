document.addEventListener("DOMContentLoaded", async () => {
  const BASE = window.BASE_PATH || "";

  // لود کامپوننت‌ها
  await loadComponent("header", BASE + "components/header.html");
  await loadComponent("footer", BASE + "components/footer.html");

  // وضعیت همکاری (بعد از لود شدن هدر)
  setAvailability(1); // 0 = آزاد | 1 = مشغول

  // تصاویر
  document.querySelectorAll("[data-src]").forEach((img) => {
    img.src = BASE + img.dataset.src;
  });

  // مسیر صفحات
  const routes = {
    home: "index.html",
    about: "pages/about/about.html",
    contact: "pages/contact/contact.html",
    projects: "pages/projects/projects.html",
    skills: "pages/skills/skills.html",
  };

  // لینک‌ها
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

  // Fade Animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
    },
  );

  document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
});

// ------------------------
// Load HTML Component
// ------------------------
async function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Failed to load ${file}`);
    }

    element.innerHTML = await response.text();
  } catch (err) {
    console.error(err);
  }
}

// ------------------------
// Availability
// ------------------------
function setAvailability(status) {
  const activity = document.querySelector(".content h3");
  const availability = document.querySelector(".availability");
  const activityBtn = document.querySelector(".availability .btn");

  if (!activity || !availability || !activityBtn) return;

  let x = 1;
  if (x == 0) {
    availability.classList.add("available");
    availability.classList.remove("busy");
    activityBtn.innerHTML = "درخواست همکاری";
  } else if (x == 1) {
    availability.classList.add("busy");
    availability.classList.remove("available");
    activityBtn.innerHTML = "درخواست همکاری برای آینده";
  }
}
