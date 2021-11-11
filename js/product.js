var ham = document.querySelector(".hamburger");
function stickyElement(e) {
  var mainNav = document.querySelector(".mainNav");
  var mainNavHeight = getComputedStyle(mainNav).height.split("px")[0];
  var navbar = document.querySelector(".nav");
  var scrollValue = window.scrollY;
  if (scrollValue > 150) {
    navbar.classList.add("is-fixed");
    ham.classList.remove("disable");
    ham.classList.remove("active");
    document.querySelector(".goToTop").classList.remove("goToTop-block");
    document.querySelector(".bottomNav").classList.add("bottomNav-block");
    document.querySelector(".bottomNav").classList.remove("sideNav");
    document.querySelector(".navOrder").classList.add("navOrder-block");
  } else if (scrollValue < 150) {
    navbar.classList.remove("is-fixed");
    ham.classList.add("disable");
    document.querySelector(".goToTop").classList.add("goToTop-block");
    document.querySelector(".bottomNav").classList.add("bottomNav-block");
    document.querySelector(".bottomNav").classList.remove("sideNav");
    document.querySelector(".navOrder").classList.add("navOrder-block");
    ham.classList.remove("active");
  }
}
window.addEventListener("scroll", stickyElement);
ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  document.querySelector(".bottomNav").classList.toggle("bottomNav-block");
  document.querySelector(".bottomNav").classList.toggle("sideNav");
  document.querySelector(".navOrder").classList.toggle("navOrder-block");
});
var search = document.querySelector(".sm-search");
search.addEventListener("click", function () {
  document.querySelector(".big-search").classList.toggle("big-search-flex");
});
document.querySelector(".filter-toggle").addEventListener("click", function () {
  document
    .querySelector(".left-navgitaion")
    .classList.add("left-navgitaion-toggle");
});
document
  .querySelector(".remove-filter-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".left-navgitaion")
      .classList.remove("left-navgitaion-toggle");
  });

/////////////////////////
// product page

document.querySelector(".f1").addEventListener("click", function () {
  document.querySelector(".l1").classList.toggle("filter-lists-block");
  document.querySelector(".c1").classList.toggle("icon-chevron-up-rotate");
});
document.querySelector(".f2").addEventListener("click", function () {
  document.querySelector(".l2").classList.toggle("filter-lists-block");
  document.querySelector(".c2").classList.toggle("icon-chevron-up-rotate");
});
document.querySelector(".f3").addEventListener("click", function () {
  document.querySelector(".l3").classList.toggle("filter-lists-block");
  document.querySelector(".c3").classList.toggle("icon-chevron-up-rotate");
});
document.querySelector(".f4").addEventListener("click", function () {
  document.querySelector(".l4").classList.toggle("filter-lists-block");
  document.querySelector(".c4").classList.toggle("icon-chevron-up-rotate");
});
document.querySelector(".login-btn").addEventListener("click", function () {
  document
    .querySelector(".login-window")
    .classList.toggle("login-window-block");
});
document.querySelector(".remove-log").addEventListener("click", function () {
  document.querySelector(".login-window").classList.add("login-window-block");
});
cartCountDisplay();
function cartCountDisplay() {
  document.querySelector(".cartCount").textContent =
    JSON.parse(localStorage.getItem("cartCount")) || 0;
}
