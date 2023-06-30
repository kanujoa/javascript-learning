const bttn = document.querySelector("#bttn");
const nav = document.querySelector("#nav");

bttn.onclick = () => {
  bttn.classList.toggle("active");
  nav.classList.toggle("active");
}