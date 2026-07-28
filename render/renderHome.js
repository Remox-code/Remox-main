import { about, skills } from "../data/about.js";
import { services } from "../data/services.js";
import { why } from "../data/why.js";
import { advantages } from "../data/advantages.js";
import { projects } from "../data/projects.js";

/* ===========================
        ABOUT
=========================== */

function renderAbout() {
  const skillsGrid = document.querySelector(".skills-grid");
  const aboutContent = document.querySelector(".about-content");

  if (!skillsGrid || !aboutContent) return;

  skillsGrid.innerHTML = skills
    .map((skill) => `<i class="${skill}"></i>`)
    .join("");

  aboutContent.innerHTML = about.map((text) => `<p>${text}</p>`).join("");
}

/* ===========================
        SERVICES
=========================== */

function renderServices() {
  const container = document.querySelector(".services-grid");

  if (!container) return;

  container.innerHTML = services
    .map(
      (service) => `
      <article class="service-card fade">

        <i class="${service.icon}"></i>

        <h3>${service.title}</h3>

        <p>${service.text}</p>

      </article>
    `,
    )
    .join("");
}

/* ===========================
        WHY
=========================== */

function renderWhy() {
  const container = document.querySelector(".why-grid");

  if (!container) return;

  container.innerHTML = why
    .map(
      (item) => `
      <div class="why-card fade">

        <i class="${item.icon}"></i>

        <h3>${item.title}</h3>

        <p>${item.text}</p>

      </div>
    `,
    )
    .join("");
}

/* ===========================
      ADVANTAGES
=========================== */

function renderAdvantages() {
  const container = document.querySelector(".advantages");

  if (!container) return;

  container.innerHTML = advantages
    .map(
      (item) => `
      <div class="adv-item fade">

        <i class="${item.icon}"></i>

        <div>

          <h3>${item.title}</h3>

          <p>${item.text}</p>

        </div>

      </div>
    `,
    )
    .join("");
}

/* ===========================
        PROJECTS
=========================== */

function renderProjects() {
  const container = document.querySelector(".projects-grid");

  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card fade">

        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>

        <div class="project-content">

          <h3>${project.title}</h3>

          <p>${project.description}</p>

          <div class="project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>

          <a
            href="${project.url}"
            target="_blank"
            class="project-btn"
          >
            مشاهده پروژه
          </a>

        </div>

      </article>
    `,
    )
    .join("");
}

/* ===========================
        EXPORT
=========================== */

export function renderHome() {
  renderAbout();
  renderServices();
  renderWhy();
  renderAdvantages();
  renderProjects();
}
