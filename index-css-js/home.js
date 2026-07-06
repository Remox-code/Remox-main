let activity = document.querySelector(".content h3");
let availability = document.querySelector(".availability");
let activityBtn = document.querySelector(".availability .btn");

let x = 0;

if (x == 0) {
  activity.innerHTML = "✅ درود - الان کاملا آزادم و آماده همکاری هستم";
  availability.classList.add("available");
  availability.classList.remove("busy");
} else if (x == 1) {
  activity.innerHTML = "❌ درود - الان مشغولم و یکم بعد آماده همکاری میشم";
  availability.classList.add("busy");
  availability.classList.remove("available");
  activityBtn.innerHTML = "درخواست همکاری برای آینده";
}
