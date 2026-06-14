
const buttons = document.querySelectorAll(".btn-filter");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active-btn"));
        btn.classList.add("active-btn");

        const target = btn.dataset.target;

        sections.forEach(sec => {
            if(target === "all"){
                sec.classList.remove("hidden");
            } else {
                sec.classList.toggle("hidden", !sec.classList.contains(target));
            }
        });

    });
});
