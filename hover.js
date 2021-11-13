document.querySelector(".cartCount").textContent =
  JSON.parse(localStorage.getItem("cart")).length || 0;
document
  .querySelector(".makeup-link")
  .addEventListener("mouseover", function () {
    document
      .querySelector(".makeup-hover")
      .classList.remove("makeup-hover-block");
    document.querySelector(".skin-hover").classList.add("skin-hover-block");
  });
document.querySelector(".newA-link").addEventListener("mouseover", function () {
  document.querySelector(".makeup-hover").classList.add("makeup-hover-block");
});
document.querySelector(".skin-link").addEventListener("mouseover", function () {
  document.querySelector(".makeup-hover").classList.add("makeup-hover-block");
  document.querySelector(".skin-hover").classList.remove("skin-hover-block");
});
document
  .querySelector(".brands-link")
  .addEventListener("mouseover", function () {
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
  .addEventListener("mouseover", function () {
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
  .addEventListener("mouseover", function () {
    document.querySelector(".skin-hover").classList.remove("skin-hover-block");
  });
document
  .querySelector(".skin-hover")
  .addEventListener("mouseleave", function () {
    document.querySelector(".skin-hover").classList.add("skin-hover-block");
  });
////////////////
document
  .querySelector(".tutorials-link")
  .addEventListener("mouseover", function () {
    document.querySelector(".tut-hover").classList.remove("tut-hover-block");
  });
document
  .querySelector(".tutorials-link")
  .addEventListener("mouseleave", function () {
    document.querySelector(".tut-hover").classList.add("tut-hover-block");
  });
document.querySelector(".tut-hover").addEventListener("mouseover", function () {
  document.querySelector(".tut-hover").classList.remove("tut-hover-block");
});
document
  .querySelector(".tut-hover")
  .addEventListener("mouseleave", function () {
    document.querySelector(".tut-hover").classList.add("tut-hover-block");
  });
document.querySelector(".kits-link").addEventListener("mouseover", function () {
  document.querySelector(".kit-hover").classList.remove("kit-hover-block");
});
document
  .querySelector(".kits-link")
  .addEventListener("mouseleave", function () {
    document.querySelector(".kit-hover").classList.add("kit-hover-block");
  });
document.querySelector(".kit-hover").addEventListener("mouseover", function () {
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
