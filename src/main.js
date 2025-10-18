import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

window.addEventListener("message", (event) => {
  // Verificar origen seguro
  if (event.origin !== "http://localhost:5174") return;

  const action = event.data.action;
  if (action === "back") {
    window.history.back();
  } else if (action === "forward") {
    window.history.forward();
  } else if (action === "reload") {
    window.location.reload();
  }
});

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
