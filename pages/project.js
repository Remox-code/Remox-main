// function myFunction() {
//   const x = document.getElementById("panel");
//   x.style.display = (x.style.display === "block") ? "none" : "block";
// }

// وقتی صفحه لود میشه تم ذخیره‌شده رو اجرا کن
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
};

// وقتی دکمه زده میشه تم عوض میشه
document.getElementById("theme-toggle").onclick = function () {
  document.body.classList.toggle("dark-theme");

  // ذخیره تم در localStorage
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

