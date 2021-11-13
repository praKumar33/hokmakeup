cartCountDisplay();
function cartCountDisplay() {
  document.querySelector(".cartCount").textContent =
    JSON.parse(localStorage.getItem("cart")).length || 0;
}
var cartItems = JSON.parse(localStorage.getItem("cart"));

displayItems(cartItems);

function displayItems(cartItems) {
  cartItems.map(function (item, index) {
    var counter = item.quantity;
    var prodet = document.createElement("div");
    prodet.classList.add("producDetail");

    var imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");

    var img = document.createElement("img");
    img.setAttribute("src", item.img);

    imgDiv.append(img);

    var proInfo = document.createElement("div");
    proInfo.classList.add("proInfo");

    var name = document.createElement("h5");
    name.textContent = item.name;

    var brand = document.createElement("p");
    brand.textContent = item.cat;

    var brand2 = document.createElement("p");
    brand2.textContent = item.brand;
    brand2.setAttribute("class", "brandp");

    var price = document.createElement("h4");
    var sprice = document.createElement("span");
    sprice.setAttribute("class", "price-item");
    sprice.textContent = `₹ ${item.price}`;
    price.append(sprice);

    var quantity = document.createElement("h5");
    quantity.textContent = `Quantity: ${item.quantity}`;

    var buttons = document.createElement("div");
    buttons.classList.add("buttons");

    var incDec = document.createElement("div");
    incDec.classList.add("incDec");
    var dec = document.createElement("div");
    dec.classList.add("dec");
    dec.setAttribute("class", "incrdecr");
    dec.textContent = ">";

    var hr = document.createElement("hr");
    var count = document.createElement("div");
    count.classList.add("counter");
    count.textContent = item.quantity;
    var inc = document.createElement("div");
    inc.classList.add("inc");
    inc.setAttribute("class", "incrdecr");
    inc.textContent = "<";
    var hr2 = document.createElement("hr");
    incDec.append(dec, hr, count, hr2, inc);
    var update = document.createElement("div");
    update.classList.add("update");
    // update.setAttribute("class", "incDec");

    var p = document.createElement("p");
    p.textContent = "UPDATE";
    update.append(p);

    var remove = document.createElement("div");
    remove.classList.add("remove");
    var p1 = document.createElement("p");
    p1.textContent = "X REMOVE";
    remove.addEventListener("click", function () {
      makeDelete(index);
    });
    remove.append(p1);

    buttons.append(incDec, update, remove);
    proInfo.append(name, brand, brand2, price, quantity, buttons);
    prodet.append(imgDiv, proInfo);
    var hr2 = document.createElement("hr");
    document.querySelector("#products").append(prodet, hr2);

    dec.addEventListener("click", function () {
      if (counter > 0) {
        counter--;
        if (counter > 0) count.textContent = counter;
      }
    });
    inc.addEventListener("click", function () {
      counter++;
      if (counter > 0) count.textContent = counter;
    });
    update.addEventListener("click", function () {
      var price = item.price / item.quantity;
      updatePrice(counter, index, price);
    });
  });
  document.querySelector("#ammount").textContent = cartItems.reduce(function (
    a,
    b
  ) {
    return Number(a) + Number(b.price);
  },
  0);
}
var cart = JSON.parse(localStorage.getItem("cart"));
function updatePrice(count, i, price) {
  if (count == 0) {
    count = 1;
  }
  cart[i].price = price * count;
  cart[i].quantity = count;
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
function makeDelete(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
checkLog();
function checkLog() {
  if (localStorage.getItem("log")) {
    document.querySelector(".login-btn").style.display = "none";
    document.querySelector(".create-btn").style.display = "none";
    document.querySelector(".log-block").style.display = "none";
  }
}
