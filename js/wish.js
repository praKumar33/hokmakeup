var wish = JSON.parse(localStorage.getItem("wish"));
var tbody = document.querySelector("tbody");
var count = JSON.parse(localStorage.getItem("cart")).length || 0;
displayWish(wish);
var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
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
    td5.addEventListener("click", function () {
      var cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
      if (cart.textContent == "Add to cart") {
        cartCount++;
        item.quantity = 1;
        cartArr.push(item);
        localStorage.setItem("cart", JSON.stringify(cartArr));
        cart.textContent = "Remove from cart";
      } else {
        cartCount--;
        cartArr.pop();
        localStorage.setItem("cart", JSON.stringify(cartArr));
        cart.textContent = "Add to cart";
      }
      document.querySelector(".cartCount").textContent =
        JSON.parse(localStorage.getItem("cart")).length || 0;
    });
    ///////////////////
    var tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5);
    tbody.append(tr);
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
