const searchContainer = document.querySelector(".search");
const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");
button.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
  input.focus();
});

console.log(searchContainer);
