cartCountDisplay();
function cartCountDisplay() {
  document.querySelector(".cartCount").textContent =
    JSON.parse(localStorage.getItem("cartCount")) || 0;
}
