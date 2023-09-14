let a = document.querySelector("i");
a.addEventListener("click", navlink);
function navlink() {
  document.getElementById("navlinks").classList.toggle("change");
}
let nav = document.querySelector("nav");
window.addEventListener("scroll", border);
function border() {
  document.getElementById("nav").classList.toggle("sticky", scrollY > 300);
}
