import projects from "./data.js";

const app = document.querySelector("#app");

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
    <div class="projects-grid" id="projects"></div>
  </main>

  <footer>
    <p>Made by Jesús de la Fuente</p>
    <p>&copy; 2025 All rights reserved.</p>
  </footer>
`;

const container = document.querySelector("#projects");

// 🔥 render dinámico de TODOS tus proyectos
container.innerHTML = projects
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
              .map((tag) => `<span class="grid-item-tag">${tag}</span>`)
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
