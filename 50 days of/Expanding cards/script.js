"use strict";

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", (val) => {
    removeActive();
    val.target.classList.add("active");
  });
});
function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
