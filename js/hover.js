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
console.log("dfjkh")