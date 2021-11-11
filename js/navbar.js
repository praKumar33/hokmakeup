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
document.querySelector(".login-btn").addEventListener("click", function () {
  document
    .querySelector(".login-window")
    .classList.toggle("login-window-block");
});
document.querySelector(".remove-log").addEventListener("click", function () {
  document.querySelector(".login-window").classList.add("login-window-block");
});
////////////////////////////////////
// slider
var slide = document.querySelector(".slides");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var btn5 = document.querySelector(".btn5");
var btn6 = document.querySelector(".btn6");
var btn7 = document.querySelector(".btn7");
btn1.addEventListener("click", function () {
  slide.style.transform = "translateX(0px)";
  btn1.classList.add("btn-active");
  btn2.classList.remove("btn-active");
  btn3.classList.remove("btn-active");
  btn4.classList.remove("btn-active");
  btn5.classList.remove("btn-active");
  btn6.classList.remove("btn-active");
  btn7.classList.remove("btn-active");
});
btn2.addEventListener("click", function () {
  slide.style.transform = "translateX(-100%)";
  btn1.classList.remove("btn-active");
  btn2.classList.add("btn-active");
  btn3.classList.remove("btn-active");
  btn4.classList.remove("btn-active");
  btn5.classList.remove("btn-active");
  btn6.classList.remove("btn-active");
  btn7.classList.remove("btn-active");
});
btn3.addEventListener("click", function () {
  slide.style.transform = "translateX(-200%)";
  btn1.classList.remove("btn-active");
  btn2.classList.remove("btn-active");
  btn3.classList.add("btn-active");
  btn4.classList.remove("btn-active");
  btn5.classList.remove("btn-active");
  btn6.classList.remove("btn-active");
  btn7.classList.remove("btn-active");
});
btn4.addEventListener("click", function () {
  slide.style.transform = "translateX(-300%)";
  btn1.classList.remove("btn-active");
  btn2.classList.remove("btn-active");
  btn3.classList.remove("btn-active");
  btn4.classList.add("btn-active");
  btn5.classList.remove("btn-active");
  btn6.classList.remove("btn-active");
  btn7.classList.remove("btn-active");
});
btn5.addEventListener("click", function () {
  slide.style.transform = "translateX(-400%)";
  btn1.classList.remove("btn-active");
  btn2.classList.remove("btn-active");
  btn3.classList.remove("btn-active");
  btn4.classList.remove("btn-active");
  btn5.classList.add("btn-active");
  btn6.classList.remove("btn-active");
  btn7.classList.remove("btn-active");
});
btn6.addEventListener("click", function () {
  slide.style.transform = "translateX(-500%)";
  btn1.classList.remove("btn-active");
  btn2.classList.remove("btn-active");
  btn3.classList.remove("btn-active");
  btn4.classList.remove("btn-active");
  btn5.classList.remove("btn-active");
  btn6.classList.add("btn-active");
  btn7.classList.remove("btn-active");
});
btn7.addEventListener("click", function () {
  slide.style.transform = "translateX(-600%)";
  btn1.classList.remove("btn-active");
  btn2.classList.remove("btn-active");
  btn3.classList.remove("btn-active");
  btn4.classList.remove("btn-active");
  btn5.classList.remove("btn-active");
  btn6.classList.remove("btn-active");
  btn7.classList.add("btn-active");
});
var trans = ["0px", "-100%", "-200%", "-300%", "-400%", "-500%", "-600%"];
var btnArr = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7"];
var count = 0;
setInterval(function () {
  count++;
  count = count % 7;
  btn1.classList.remove("btn-active");
  btn2.classList.remove("btn-active");
  btn3.classList.remove("btn-active");
  btn4.classList.remove("btn-active");
  btn5.classList.remove("btn-active");
  btn6.classList.remove("btn-active");
  btn7.classList.remove("btn-active");
  var b = btnArr[count];
  var btn = `.${b}`;
  document.querySelector(btn).classList.add("btn-active");
  var v = trans[count];
  slide.style.transform = `translateX(${v})`;
}, 5000);
/////////////////////////////////
// barnd slider
var counter = 0;
var brandSlide = document.querySelector(".brand-box");
var leftArrow = document.querySelector(".left-arrow");
var rightArrow = document.querySelector(".right-arrow");
leftArrow.addEventListener("click", function () {
  if (counter < 0) {
    counter = counter + 20;
    brandSlide.style.left = `${counter}%`;
  }
});
rightArrow.addEventListener("click", function () {
  if (counter > -60) {
    counter = counter - 20;
    brandSlide.style.left = `${counter}%`;
  }
});
cartCountDisplay();
function cartCountDisplay() {
  document.querySelector(".cartCount").textContent =
    JSON.parse(localStorage.getItem("cartCount")) || 0;
}