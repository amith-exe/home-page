// alert("error check")
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
function showDemo(event) {
  event.preventDefault();
  alert("This is a Demo site");
}
