"use-strict";
const progressBar = document.querySelector(".progress-bar");
const numbers = document.querySelectorAll(".circle");
const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");
let activeCount = 1;
nextButton.addEventListener("click", (e) => {
  activeCount++;

  if (activeCount > numbers.length) {
    activeCount = 4;
  }
  // activeCount += 1;
  console.log(activeCount, numbers.length);
  updateProgress();
});

prevButton.addEventListener("click", () => {
  activeCount--;
  if (activeCount < 1) {
    activeCount = 1;
  }
  console.log(activeCount, numbers.length);
  updateProgress();
});

function updateProgress() {
  numbers.forEach((val, i) => {
    if (i < activeCount) val.classList.add("active");
    if (i >= activeCount) val.classList.remove("active");
    // console.log(i, activeCount);
  });
  progressBar.style.width =
    ((activeCount - 1) / (numbers.length - 1)) * 100 + "%";
  console.log((activeCount / numbers.length) * 100);

  if (activeCount == 1) {
    prevButton.disabled = "disabled";
    console.log("inside if");
    console.log(prevButton.disabled);
  }
  if (activeCount == 4) {
    nextButton.disabled = "disabled";
    console.log("inside if");
    console.log(nextButton.disabled);
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}
