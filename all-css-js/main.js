document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  elements.forEach((el) => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileMenuItems = document.querySelectorAll(".mobile-menu a"); // برای بستن منو با کلیک روی آیتم

  if (hamburger && mobileMenuOverlay) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileMenuOverlay.classList.toggle("open");
    });

    // بستن منو با کلیک روی هر آیتم
    mobileMenuItems.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenuOverlay.classList.remove("open");
      });
    });

    // بستن منو با کلیک خارج از آن (روی اوورلی)
    mobileMenuOverlay.addEventListener("click", (event) => {
      // اگر روی خود اوورلی کلیک شد (نه روی آیتم‌های منو)
      if (event.target === mobileMenuOverlay) {
        hamburger.classList.remove("open");
        mobileMenuOverlay.classList.remove("open");
      }
    });
  }
});
