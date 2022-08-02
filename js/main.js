// changing navdbar gackground color on scroll

window.addEventListener("scroll", () => {
  let header = document.querySelector("header");

  header.classList.toggle("gb-white", window.scrollY > 0);
});

let day = new Date().getFullYear();
document.querySelector(".showDate").textContent = day;

function toggleMenu(e) {
  let mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("hidden");
}

function toggleMobileMenu(e) {
  let mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("hidden");
}
