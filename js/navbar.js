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
    JSON.parse(localStorage.getItem("cart")).length || 0;
}
///////////////////////////////////////
// hower
document
  .querySelector(".makeup-link")
  .addEventListener("mouseenter", function () {
    document
      .querySelector(".makeup-hover")
      .classList.remove("makeup-hover-block");
    document.querySelector(".skin-hover").classList.add("skin-hover-block");
  });
document
  .querySelector(".newA-link")
  .addEventListener("mouseenter", function () {
    document.querySelector(".makeup-hover").classList.add("makeup-hover-block");
  });
document
  .querySelector(".skin-link")
  .addEventListener("mouseenter", function () {
    document.querySelector(".makeup-hover").classList.add("makeup-hover-block");
    document.querySelector(".skin-hover").classList.remove("skin-hover-block");
  });
document
  .querySelector(".brands-link")
  .addEventListener("mouseenter", function () {
    document.querySelector(".makeup-hover").classList.add("makeup-hover-block");
    document.querySelector(".skin-hover").classList.add("skin-hover-block");
  });
document
  .querySelector(".nav-hover")
  .addEventListener("mouseleave", function () {
    document.querySelector(".makeup-hover").classList.add("makeup-hover-block");
    document.querySelector(".skin-hover").classList.add("skin-hover-block");
  });
document
  .querySelector(".makeup-hover")
  .addEventListener("mouseenter", function () {
    document
      .querySelector(".makeup-hover")
      .classList.remove("makeup-hover-block");
  });
document
  .querySelector(".makeup-hover")
  .addEventListener("mouseleave", function () {
    document.querySelector(".makeup-hover").classList.add("makeup-hover-block");
  });
document
  .querySelector(".skin-hover")
  .addEventListener("mouseenter", function () {
    document.querySelector(".skin-hover").classList.remove("skin-hover-block");
  });
document
  .querySelector(".skin-hover")
  .addEventListener("mouseleave", function () {
    document.querySelector(".skin-hover").classList.add("skin-hover-block");
  });
////////////////////
document
  .querySelector(".tutorials-link")
  .addEventListener("mouseenter", function () {
    document.querySelector(".tut-hover").classList.remove("tut-hover-block");
  });
document
  .querySelector(".tutorials-link")
  .addEventListener("mouseleave", function () {
    document.querySelector(".tut-hover").classList.add("tut-hover-block");
  });
document
  .querySelector(".tut-hover")
  .addEventListener("mouseenter", function () {
    document.querySelector(".tut-hover").classList.remove("tut-hover-block");
  });
document
  .querySelector(".tut-hover")
  .addEventListener("mouseleave", function () {
    document.querySelector(".tut-hover").classList.add("tut-hover-block");
  });
document
  .querySelector(".kits-link")
  .addEventListener("mouseenter", function () {
    document.querySelector(".kit-hover").classList.remove("kit-hover-block");
  });
document
  .querySelector(".kits-link")
  .addEventListener("mouseleave", function () {
    document.querySelector(".kit-hover").classList.add("kit-hover-block");
  });
document
  .querySelector(".kit-hover")
  .addEventListener("mouseenter", function () {
    document.querySelector(".kit-hover").classList.remove("kit-hover-block");
  });
document
  .querySelector(".kit-hover")
  .addEventListener("mouseleave", function () {
    document.querySelector(".kit-hover").classList.add("kit-hover-block");
  });
////////////////////////
// login
var email = document.querySelector("#email");
var pass = document.querySelector("#password");
var account = JSON.parse(localStorage.getItem("account"));
document.querySelector(".login-ac").addEventListener("click", function () {
  for (var i = 0; i < account.length; i++) {
    if (account[i].mail == email.value && account[i].pass == pass.value) {
      localStorage.setItem("log", true);
    }
    checkLog();
  }
  if (!JSON.parse(localStorage.getItem("log"))) {
    email.value = "";
    pass.value = "";
    alert("wrong details!");
  }
});
checkLog();
function checkLog() {
  if (localStorage.getItem("log")) {
    document.querySelector(".login-btn").style.display = "none";
    document.querySelector(".create-btn").style.display = "none";
    document.querySelector(".log-block").style.display = "none";
    document.querySelector(".login-window").style.display = "none";
  }
}
