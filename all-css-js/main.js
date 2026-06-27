document.addEventListener("DOMContentLoaded", () => {
  // تنظیمات Observer
  const observerOptions = {
    root: null, // یعنی کل صفحه (viewport) را بررسی کن
    threshold: 0.15, // یعنی وقتی ۱۵٪ از المان وارد دید شد، انیمیشن شروع شود
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // اگر المان وارد دید شد
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // کلاس visible را اضافه کن
        // اگر می‌خواهید انیمیشن فقط یک بار اجرا شود، خط زیر را فعال کنید:
        // observer.unobserve(entry.target);
      } else {
        // اگر می‌خواهید وقتی کاربر به بالا اسکرول کرد دوباره مخفی شود، خط زیر را فعال کنید:
        // entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  // پیدا کردن تمام المان‌هایی که کلاس fade دارند و دادن آن‌ها به Observer
  const fadeElements = document.querySelectorAll(".fade");
  fadeElements.forEach((el) => observer.observe(el));
});
