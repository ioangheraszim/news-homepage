let openBtn = document.getElementById("button-open");
let closeBtn = document.getElementById("button-close");
let navMenu = document.querySelector(".nav__menu");
let navOverlay = document.querySelector(".nav__overlay");

openBtn.addEventListener("click", () => {
    navMenu.classList.add("nav__menu--show");
    navOverlay.classList.add("nav-overlay--active");
})

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--show");
    navOverlay.classList.remove("nav-overlay--active");
})