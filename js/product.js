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
    JSON.parse(localStorage.getItem("cart")).length || 0;
}
//////////////////////////////
// hover
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
checkLog();
function checkLog() {
  if (localStorage.getItem("log")) {
    document.querySelector(".login-btn").style.display = "none";
    document.querySelector(".create-btn").style.display = "none";
    document.querySelector(".log-block").style.display = "none";
  }
}
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
