// Getting elements

const primaryBtn = document.querySelector(".primary-btn");
const tooltip = document.querySelector(".tooltip");

// Open tooltip and change style of button on click

primaryBtn.addEventListener("click", () => {
  tooltip.classList.toggle("open");
  primaryBtn.classList.toggle("active");
});
