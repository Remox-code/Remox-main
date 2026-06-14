// مثال ساده برای انیمیشن هنگام اسکرول (با استفاده از Intersection Observer)
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // وقتی 10% عنصر دیده شود، انیمیشن اجرا شود
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // فقط یک بار انیمیشن اجرا شود
      }
    });
  }, observerOptions);

  // اعمال observer به تمام کارت‌ها و بخش‌های FAQ
  document
    .querySelectorAll(".about-card, .faq-section details")
    .forEach((element) => {
      observer.observe(element);
    });

  // افزودن کلاس 'visible' برای فعال کردن انیمیشن CSS
  // این کلاس باید در CSS تعریف شود
  const style = document.createElement("style");
  style.innerHTML = `
        .about-card.visible, .faq-section details.visible {
            animation: elementFadeIn 0.8s forwards ease-out;
        }
    `;
  document.head.appendChild(style);
});

// در CSS، انیمیشن elementFadeIn را برای کلاس .visible تعریف کنید (که در بالا تعریف شده است)
