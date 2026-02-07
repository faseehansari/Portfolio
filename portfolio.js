// console.log(Math.random() *10 + 1);
// let otp = Math.floor(Math.random() *10)

// console.log(otp);

// let onetp = Math.floor(1000 + Math.random() * 9000);

// console.log(onetp);

const openBtn = document.querySelector(".openbtn");
const navLinks = document.querySelector(".nav-links");

openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});
