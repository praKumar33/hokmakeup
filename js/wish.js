var wish = JSON.parse(localStorage.getItem("wish"));
var tbody = document.querySelector("tbody");
var count = JSON.parse(localStorage.getItem("cartCount")) || 0;
console.log(count);
displayWish(wish);
function displayWish(wish) {
  tbody.innerHTML = "";
  wish.map(function (item, i) {
    var td1 = document.createElement("td");
    td1.classList.add("wish-td1");
    var a = document.createElement("a");
    a.setAttribute("href", "itemPage.html");
    var img = document.createElement("img");
    img.setAttribute("src", item.img);
    a.append(img);
    td1.append(a);
    /////////////
    var td2 = document.createElement("td");
    td2.classList.add("wish-td2");
    var span = document.createElement("span");
    td2.innerHTML = `<span>${item.brand}</span>${item.name}`;
    //////////////////
    var td3 = document.createElement("td");
    td3.classList.add("wish-td3");
    td3.innerHTML = `<p>₹ ${item.price}`;
    //////////////////////
    var td4 = document.createElement("td");
    td4.classList.add("wish-td4");
    var remove = document.createElement("button");
    remove.textContent = "x Remove";
    td4.append(remove);
    remove.addEventListener("click", function () {
      removeFromWish(i);
    });
    ///////////////////
    var td5 = document.createElement("td");
    td5.classList.add("wish-td5");
    var cart = document.createElement("button");
    cart.textContent = "Add to cart";
    td5.append(cart);
    ///////////////////
    var tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5);
    tbody.append(tr);

    cart.addEventListener("click", function () {
      count++;
      localStorage.setItem("cartCount", count);
      console.log(count);
      cartCountDisplay();
    });
  });
}
cartCountDisplay();
function cartCountDisplay() {
  document.querySelector(".cartCount").textContent =
    JSON.parse(localStorage.getItem("cartCount")) || 0;
}

function removeFromWish(i) {
  var remItem = JSON.parse(localStorage.getItem("wish"));
  remItem.splice(i, 1);
  localStorage.setItem("wish", JSON.stringify(remItem));
  displayWish(remItem);
}
