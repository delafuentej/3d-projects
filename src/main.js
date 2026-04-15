import projects from "./data.js";
import gsap from "gsap";

const app = document.querySelector("#app");

const year = new Date().getFullYear();

const allTags = [
  ...new Set(projects.flatMap((p) => (p.tags ? p.tags.split(" · ") : []))),
];

app.innerHTML = `
  <header>
    <h1>My Creative Projects</h1>
    <p class="subtitle">
      A collection of creative visual explorations using
      <strong>Three.js</strong>,
      <strong>React Three Fiber</strong>,
      <strong>GLSL</strong> & GSAP.
    </p>
  </header>

  <main class="scrollable">
   <div class="filters" id="filters"></div>
    <div class="projects-grid" id="projects"></div>
  </main>

  <footer>
    <p>delafuentej&copy;<span>${year}.</span> All rights reserved</p>
  </footer>
`;

const container = document.querySelector("#projects");

const filtersContainer = document.querySelector("#filters");
filtersContainer.innerHTML = `
  <button class="filter-btn active" data-tag="all">All</button>
  ${allTags.map((tag) => `<button  class="filter-btn" data-tag="${tag}">${tag}</button>`).join("")}
`;

const filterBtns = document.querySelectorAll(".filter-btn");
console.log(filterBtns);

const animateGrid = () => {
  const gridItems = document.querySelectorAll(".grid-item");

  gsap.from(gridItems, {
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.inOut",
  });
};

// 🔥 render dinámico de TODOS tus proyectos
function renderProjects(list) {
  container.innerHTML = list
    .map(
      (project) => `
        <a class="grid-item" href=${project.url} target="_blank">
          <div 
            class="grid-item-img"
            style="background-image: url(${project.img})"
          ></div>

          <div class="grid-item-content">
            <h3 class="grid-item-title">
              ${project.title}
              ${
                project.tags
                  ? `<span class="grid-item-tags">
                      ${project.tags
                        .split(" · ")
                        .map(
                          (tag) =>
                            `<span class="grid-item-tag">${tag === "State Manag." ? "SM" : tag}</span>`,
                        )
                        .join("")}
                    </span>`
                  : ""
              }
            </h3>
          </div>
        </a>
      `,
    )
    .join("");

  animateGrid();
}

renderProjects(projects);

filtersContainer.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName !== "BUTTON") return;

  const tagBtns = filtersContainer.querySelectorAll("button");

  tagBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  const activeTag = e.target;
  activeTag.classList.toggle("active");

  const tag = e.target.dataset.tag;
  console.log("tag", tag);

  if (tag === "all") {
    // e.target.classList.add("active");
    renderProjects(projects);
    return;
  }

  const filtered = projects.filter((project) =>
    project.tags?.split(" · ").includes(tag),
  );
  console.log("filtered", filtered);

  renderProjects(filtered);
});

// gsap
