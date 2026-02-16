const openBtn = document.querySelector(".openbtn");
const navLinks = document.querySelector(".nav-links");

openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});
