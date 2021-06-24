// date setup
const date = (document.getElementById(
 "date"
).innerHTML = new Date().getFullYear());

// setup navbar
const navbtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navclose = document.getElementById("nav-close-btn");

// show navbar
navbtn.addEventListener("click", () => {
 navbar.classList.add("showNav");
});

// close navbar
navclose.addEventListener("click", () => {
 navbar.classList.remove("showNav");
});