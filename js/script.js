// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menutab di click
document.querySelector("#menu-tab").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk hilang

const menu = document.querySelector("#menu-tab");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
