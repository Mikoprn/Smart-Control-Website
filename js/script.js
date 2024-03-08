// Navigation
const navMenuButton = document.querySelector(".nav__menu-button");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");

navMenuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);

// click outside
document.addEventListener("click", (e) => {
  if (!navMenuButton.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
