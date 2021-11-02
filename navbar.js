var ham = document.querySelector(".hamburger");
function stickyElement(e) {
  var mainNav = document.querySelector(".mainNav");
  var mainNavHeight = getComputedStyle(mainNav).height.split("px")[0];
  var navbar = document.querySelector(".nav");
  var scrollValue = window.scrollY;
  console.log(mainNavHeight);
  if (scrollValue > 150) {
    navbar.classList.add("is-fixed");
    ham.classList.remove("disable");
    ham.classList.remove("active");
    document.querySelector(".bottomNav").classList.add("bottomNav-block");
    document.querySelector(".bottomNav").classList.remove("sideNav");
    document.querySelector(".navOrder").classList.add("navOrder-block");
  } else if (scrollValue < 150) {
    navbar.classList.remove("is-fixed");
    ham.classList.add("disable");
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
