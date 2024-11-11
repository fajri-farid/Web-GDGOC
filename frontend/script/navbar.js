document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

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
    if (window.scrollY > 50 || hamburger.classList.contains("active")) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
