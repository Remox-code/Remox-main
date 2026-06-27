// مدیریت فیلتر کردن دکمه‌ها و نمایش/پنهان‌سازی بخش‌ها
const buttons = document.querySelectorAll(".btn-filter");
const sections = document.querySelectorAll(".section");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active-btn"));
    btn.classList.add("active-btn");

    const target = btn.dataset.target;

    sections.forEach((sec) => {
      if (target === "all") {
        sec.classList.remove("hidden");
      } else {
        sec.classList.toggle("hidden", !sec.classList.contains(target));
      }
    });
  });
});

// تابع اصلی بارگذاری و رندر کردن تمام داده‌ها از فایل JSON
async function initPortfolio() {
  try {
    const response = await fetch("site.json");

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`خطا در بارگذاری فایل JSON: ${response.status}`);
    }

    const data = await response.json();

    // 1. بارگذاری پروژه‌ها (Websites)
    const projectsData =
      data.find((item) => item.category === "projects")?.items || [];
    const projectsContainer = document.getElementById("projects-container");

    if (projectsContainer) {
      const projectsHTML = projectsData
        .map((project) => {
          const tagsHTML = project.tags
            .map((tag) => `<li>${tag}</li>`)
            .join("");
          return `
            <article class="project-card fade">
              <div class="thumb">
                <iframe src="${project.iframeUrl}" loading="lazy"></iframe>
              </div>
              <div class="meta">
                <h2 class="title">${project.title}</h2>
                <p class="short">${project.description}</p>
                <ul class="tags">
                  ${tagsHTML}
                </ul>
              </div>
              <div class="actions">
                <a href="${project.githubUrl}" class="btn ghost" target="_blank">گیت هاب</a>
              </div>
            </article>
          `;
        })
        .join("");

      projectsContainer.innerHTML = projectsHTML;

      setTimeout(() => {
        document.querySelectorAll(".project-card").forEach((card) => {
          card.classList.add("show");
        });
      }, 100);
    }

    // 2. بارگذاری کارت‌های ویزیت (Business Cards)
    const cardsData =
      data.find((item) => item.category === "cards")?.items || [];
    const cartContainer = document.getElementById("cart");

    if (cartContainer) {
      const cardsHTML = cardsData
        .map(
          (card) => `
          <article class="cart-card fade">
            <img class="${card.layout}" src="${card.img1}" />
            <img class="${card.layout}" src="${card.img2}" />
          </article>
        `,
        )
        .join("");

      cartContainer.innerHTML = cardsHTML;
    }

    // 3. بارگذاری لوگوها (Logos)
    const logosData =
      data.find((item) => item.category === "logos")?.items || [];
    const logoContainer = document.querySelector(".flex-logos");

    if (logoContainer) {
      const logosHTML = logosData
        .map(
          (logo) => `
          <article class="cart-card fade">
            <img class="logo" src="${logo.img}" />
          </article>
        `,
        )
        .join("");

      logoContainer.innerHTML = logosHTML;
    }
  } catch (error) {
    console.error("خطا در بارگذاری اطلاعات پورتفولیو:", error);

    // نمایش پیام خطا به کاربر در صورت عدم بارگذاری
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
      projectsContainer.innerHTML =
        "<p>خطا در بارگذاری پروژه‌ها. لطفاً بعداً تلاش کنید.</p>";
    }
  }
}

// اجرای تابع پس از لود شدن کامل ساختار HTML صفحه
document.addEventListener("DOMContentLoaded", initPortfolio);
