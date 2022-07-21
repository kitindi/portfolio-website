// changing navdbar gackground color on scroll

window.addEventListener("scroll", () => {
  let header = document.querySelector("header");

  header.classList.toggle("gb-white", window.scrollY > 0);
});
