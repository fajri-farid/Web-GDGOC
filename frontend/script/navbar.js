window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50 || hamburger.classList.contains("active")) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const navbar = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

// Hamburger menu toggle
hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  if (this.classList.contains("active")) {
    navbar.classList.add("scrolled");
  } else if (window.scrollY <= 50) {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 0 || hamburger.classList.contains("active")) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});