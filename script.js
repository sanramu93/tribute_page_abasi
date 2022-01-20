// Enable hidden nav bar

const nav = document.querySelector("nav");
const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".nav-bar");
const anchors = document.querySelectorAll(".anchor");

console.log(anchors);

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;
});

navToggle.addEventListener("click", () => {
  navBar.classList.toggle("nav-bar--active");
});

anchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    navBar.classList.remove("nav-bar--active");
  });
});
