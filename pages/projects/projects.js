// کدهای مربوط به فیلتر دکمه‌ها (اگر جدا هستند)
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

// تابع برای دریافت داده‌ها و نمایش آن‌ها
async function loadProjects() {
  const container = document.getElementById("projects-container");

  try {
    // 1. دریافت فایل JSON - تغییر احتمالی مسیر
    // اگر لوکال یا در GitHub Pages، مسیر 'site.json' یا './site.json' باید درست باشد.
    // در صورت نیاز، این مسیر را به مسیر صحیح تغییر دهید.
    const response = await fetch("site.json");

    if (!response.ok) {
      // بررسی خطای HTTP (مثلاً 404 Not Found)
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`خطا در بارگذاری فایل JSON: ${response.status}`);
    }

    const projects = await response.json();

    // 2. ساختن HTML برای هر پروژه
    const projectsHTML = projects
      .map((project) => {
        const tagsHTML = project.tags.map((tag) => `<li>${tag}</li>`).join("");

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

    // 3. تزریق HTML نهایی به صفحه
    container.innerHTML = projectsHTML;
  } catch (error) {
    console.error("خطا در loadProjects:", error);
    if (container) {
      container.innerHTML = `<p>خطا در بارگذاری پروژه‌ها. لطفاً بعداً تلاش کنید.</p>`;
    } else {
      console.error("عنصر 'projects-container' پیدا نشد!");
    }
  }
}

// اجرای تابع هنگام لود شدن صفحه
document.addEventListener("DOMContentLoaded", loadProjects);
