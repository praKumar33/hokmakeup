var data = [
  {
    img: "https://cdn.shopify.com/s/files/1/1743/7443/products/Wet-N-Wild-Silk-Finish-Lipstick-WhatS-Up-Doc_b219bc9c-38bb-4756-82fd-dcc75c8593c6_1024x1024.jpg?v=1615547171",
    off: "10",
    brand: "Wet N Wild",
    name: "Wet N Wild Megalast Liquid Catsuit Matte Lipstick",
    rating: "3",
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
var txtDiv = document.createElement("div");
txtDiv.classList.add("right-txt");
var itemName = document.createElement("h2");
itemName.textContent = item.name;
var star = [];
var str = "";
for (var i = 1; i <= 5; i++) {
  if (i <= Math.floor(item.rating)) {
    str = `<i class="far fa-star">3</i>`;
  } else {
    str = `<i class="fas fa-star">1</i>`;
  }
  star.push(str);
}
var str1 = document.createElement("div");
str1.innerHTML = star[0];
var str2 = document.createElement("div");
str1.innerHTML = star[1];
var str3 = document.createElement("div");
str1.innerHTML = star[2];
var str4 = document.createElement("div");
str1.innerHTML = star[3];
var str5 = document.createElement("div");
str1.innerHTML = star[4];
console.log(str4);
txtDiv.append(itemName, str1, str2, str3, str4, str5);
mainItem.append(imgDiv, txtDiv);
container.append(mainItem);
