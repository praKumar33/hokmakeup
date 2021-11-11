var data = JSON.parse(localStorage.getItem("item"));
var container = document.querySelector(".product-display");
var item = data[0];
document.querySelector("#nav-name").textContent = item.name;
var mainItem = document.createElement("div");
mainItem.classList.add("mainItem");
var imgDiv = document.createElement("div");
var img = document.createElement("img");
img.setAttribute("src", item.img);
imgDiv.classList.add("left-img");
imgDiv.append(img);
var off = document.createElement("span");
off.textContent = `${item.off}`;
off.classList.add("item-off");
var txtDiv = document.createElement("div");
txtDiv.classList.add("right-txt");
var itemName = document.createElement("h2");
itemName.textContent = item.name;
var star = [];
var str = "";
for (var i = 1; i <= 5; i++) {
  if (i <= Math.floor(item.rating)) {
    star.push(`<i class="fas fa-star"></i>`);
  } else {
    star.push(`<i class="far fa-star"></i>`);
  }
}
var counter = 1;
var ratingDiv = document.createElement("div");
ratingDiv.classList.add("ratingDiv");
var str1 = document.createElement("span");
str1.innerHTML = star[0];
var str2 = document.createElement("span");
str2.innerHTML = star[1];
var str3 = document.createElement("span");
str3.innerHTML = star[2];
var str4 = document.createElement("span");
str4.innerHTML = star[3];
var str5 = document.createElement("span");
str5.innerHTML = star[4];
var review = document.createElement("span");
review.classList.add("item-review");
review.textContent = `${item.review} reviews`;
ratingDiv.append(str1, str2, str3, str4, str5, review);
var brand = document.createElement("p");
brand.textContent = `Brand: ${item.brand}`;
brand.classList.add("item-brand");
var price = document.createElement("div");
price.classList.add("item-price");
price.innerHTML = `<p><span>₹${item.cutPrice} </span> ₹${item.price}</p>`;
var counterDiv = document.createElement("div");
counterDiv.classList.add("item-counter");
var checkout = document.createElement("div");
checkout.classList.add("item-checkout");
checkout.innerHTML = `<button class="item-to-crat">ADD TO CART</button>
<button class="item-to-wish">ADD TO WISH LIST</button>
<button class="item-buy">BUY IT NOW</button>`;
var subTotal = document.createElement("h4");

function incCount() {
  counter++;
  displayDom(itemName, ratingDiv, brand, price, counterDiv, subTotal);
}
function decCount() {
  if (counter > 1) {
    counter--;
    displayDom(itemName, ratingDiv, brand, price, counterDiv, subTotal);
  }
}
displayDom(itemName, ratingDiv, brand, price, counterDiv, subTotal);
function displayDom(itemName, ratingDiv, brand, price, counterDiv, subTotal) {
  subTotal.textContent = `Subtotal: ₹${item.price * counter}`;
  counterDiv.innerHTML = `<span onclick="decCount()"><i class="fas fa-chevron-down" ></i></span>
<input type="number" id="counter-dis" value=${counter}>
<span onclick="incCount()"><i class="fas fa-chevron-up" ></i></span>`;

  txtDiv.append(
    itemName,
    ratingDiv,
    brand,
    price,
    counterDiv,
    subTotal,
    checkout
  );

  mainItem.append(imgDiv, txtDiv);
  container.append(mainItem);
}
//////////////////////////////////////////////////
// discription
var discription = document.querySelector(".discription");
var about = document.querySelector(".about-brand");
var howTo = document.querySelector(".how-use");
var ingredients = document.querySelector(".ingredients");
var discriptionC = document.querySelector(".discription-c");
var aboutC = document.querySelector(".about-c");
var howToC = document.querySelector(".how-c");
var ingredientsC = document.querySelector(".ingredients-c");

discription.addEventListener("click", function () {
  discription.classList.add("name-active");
  about.classList.remove("name-active");
  howTo.classList.remove("name-active");
  ingredients.classList.remove("name-active");
  ////////////////////////
  discriptionC.classList.add("disc-active");
  aboutC.classList.remove("disc-active");
  howToC.classList.remove("disc-active");
  ingredientsC.classList.remove("disc-active");
});
about.addEventListener("click", function () {
  discription.classList.remove("name-active");
  about.classList.add("name-active");
  howTo.classList.remove("name-active");
  ingredients.classList.remove("name-active");
  ////////////////////////
  discriptionC.classList.remove("disc-active");
  aboutC.classList.add("disc-active");
  howToC.classList.remove("disc-active");
  ingredientsC.classList.remove("disc-active");
});
howTo.addEventListener("click", function () {
  discription.classList.remove("name-active");
  about.classList.remove("name-active");
  howTo.classList.add("name-active");
  ingredients.classList.remove("name-active");
  ////////////////////////
  discriptionC.classList.remove("disc-active");
  aboutC.classList.remove("disc-active");
  howToC.classList.add("disc-active");
  ingredientsC.classList.remove("disc-active");
});
ingredients.addEventListener("click", function () {
  discription.classList.remove("name-active");
  about.classList.remove("name-active");
  howTo.classList.remove("name-active");
  ingredients.classList.add("name-active");
  ////////////////////////
  discriptionC.classList.remove("disc-active");
  aboutC.classList.remove("disc-active");
  howToC.classList.remove("disc-active");
  ingredientsC.classList.add("disc-active");
});

document.querySelector(".item-to-wish").addEventListener("click", function () {
  var wish = JSON.parse(localStorage.getItem("wish"));
  wish.push(item);
  localStorage.setItem("wish", JSON.stringify(wish));
});
