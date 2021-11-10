var data = [
  {
    img: "https://cdn.shopify.com/s/files/1/1743/7443/products/Wet-N-Wild-Silk-Finish-Lipstick-WhatS-Up-Doc_b219bc9c-38bb-4756-82fd-dcc75c8593c6_1024x1024.jpg?v=1615547171",
    off: "10",
    brand: "Wet N Wild",
    name: "Wet N Wild Megalast Liquid Catsuit Matte Lipstick",
    rating: "4",
    review: "80",
    cutPrice: "599",
    price: 539,
    disc: "Wet N Wild's lipstick formula contains all the same things as the other guys: rich color, vitamins A & E, aloe vera, and really feels like putting silk on your lips. If you're already thinking That is a crazy bargain, we've now added macadamia nut oil that contains antioxidants to hydrate your lips for a smooth, supple pout. Are we just crazy? Have we gone too far? Or do you deserve it? We definitely think so! One try, and we guarantee you will declare this your best lipstick brand of life.",
  },
];
var container = document.querySelector(".product-display");

var item = data[0];

var mainItem = document.createElement("div");
mainItem.classList.add("mainItem");
var imgDiv = document.createElement("div");
var img = document.createElement("img");
img.setAttribute("src", item.img);
imgDiv.classList.add("left-img");
imgDiv.append(img);
var off = document.createElement("span");
off.textContent = `${item.off}`
off.classList.add("item-off")
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
  txtDiv.append(itemName, ratingDiv, brand, price, counterDiv, subTotal);

  mainItem.append(imgDiv, txtDiv);
  container.append(mainItem);
}
