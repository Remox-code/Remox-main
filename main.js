document.addEventListener("DOMContentLoaded", () => {
  const allEls = Array.from(document.querySelectorAll("body *"));

  const elements = allEls.filter(el => {
    return !el.closest(".short-info") && !el.closest(".container-header");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});

if (!sessionStorage.getItem("firstVisitDone")) {

    sessionStorage.setItem("firstVisitDone", "true");

    let savedName = localStorage.getItem("username");

    if (!savedName) {
        const fname = prompt("اسمتو بزن:");

        if (!fname || fname.trim() === "") {
            alert("به سایت من خوش اومدی امیدوارم لذت ببری");
        } else {
            localStorage.setItem("username", fname.trim());
            alert("سلام " + fname.trim() + " به سایت من خوش اومدی امیدوارم لذت ببری");
        }

    } else {
        alert("به سایت من خوش اومدی امیدوارم لذت ببری");
    }
}








// const hour = new Date().getHours();
// const greetingEl = document.getElementById("greeting");
// const imgEl = document.getElementById("greeting-img");

// let greetingText = "";
// let imgSrc = "";

// if (hour >= 5 && hour < 12) {
//   greetingText = "صبح بخیر!";
//   imgSrc = "image/sunrise.png";
// }
// else if (hour >= 12 && hour < 16) {
//   greetingText = "عصر بخیر!";
//   imgSrc = "image/sun.png";
// }
// else if (hour >= 16 && hour < 19) {
//   greetingText = "عصر بخیر!";
//   imgSrc = "image/sunset.png";
// }
// else {
//   greetingText = "شب بخیر";
//   imgSrc = "image/moon.png";



