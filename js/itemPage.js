var data = JSON.parse(localStorage.getItem("item"));
if (JSON.parse(localStorage.getItem("cart"))) {
  document.querySelector(".cartCount").textContent =
    JSON.parse(localStorage.getItem("cart")).length || 0;
} else {
  document.querySelector(".cartCount").textContent = 0;
}

var container = document.querySelector(".product-display");
var item = data[0];
var imgArr = item.img2;
imgArr.unshift(item.img);
///////////
document.querySelector("#nav-name").textContent = item.name;
var mainItem = document.createElement("div");
mainItem.classList.add("mainItem");
////////////////////////
var imgDiv = document.createElement("div");
var img = document.createElement("img");
img.classList.add("active-img");
img.setAttribute("src", item.img);
imgDiv.classList.add("left-img");
var imgSlide = document.createElement("div");
imgSlide.classList.add("side-imgs");
imgArr.map(function (im) {
  var img2 = document.createElement("img");
  img2.setAttribute("src", im);
  img2.addEventListener("click", function () {
    img.setAttribute("src", im);
  });
  img2.addEventListener("mouseenter", function () {
    img.setAttribute("src", im);
  });
  imgSlide.append(img2);
});
imgDiv.append(imgSlide, img);
/////////////////////////
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
checkout.innerHTML = `<button class="item-to-cart">ADD TO CART</button>
<button class="item-to-wish">ADD TO WISH LIST</button>
<button class="item-buy">BUY IT NOW</button>`;
var subTotal = document.createElement("h4");
subTotal.classList.add("total-price");

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
var wishArr = JSON.parse(localStorage.getItem("wish")) || [];

document.querySelector(".item-to-wish").addEventListener("click", function () {
  if (
    document.querySelector(".item-to-wish").textContent == "ADD TO WISH LIST"
  ) {
    wishArr.push(item);
    localStorage.setItem("wish", JSON.stringify(wishArr));
    document.querySelector(".item-to-wish").textContent =
      "REMOVE FROM WISH LIST";
  } else {
    document.querySelector(".item-to-wish").textContent = "ADD TO WISH LIST";
    wishArr.pop();
    localStorage.setItem("wish", JSON.stringify(wishArr));
  }
});

var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelector(".item-to-cart").addEventListener("click", function () {
  var total = +document.querySelector(".total-price").textContent.split("₹")[1];
  var quantity = document.getElementById("counter-dis").value;
  if (document.querySelector(".item-to-cart").textContent == "ADD TO CART") {
    var cartItem = item;
    cartItem.price = total;
    cartItem.quantity = quantity;
    cartArr.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    document.querySelector(".item-to-cart").textContent = "REMOVE FROM CART";
    if (JSON.parse(localStorage.getItem("cart"))) {
      document.querySelector(".cartCount").textContent =
        JSON.parse(localStorage.getItem("cart")).length || 0;
    } else {
      document.querySelector(".cartCount").textContent = 0;
    }
  } else {
    cartArr.pop();
    localStorage.setItem("cart", JSON.stringify(cartArr));
    document.querySelector(".item-to-cart").textContent = "ADD TO CART";
    if (JSON.parse(localStorage.getItem("cart"))) {
      document.querySelector(".cartCount").textContent =
        JSON.parse(localStorage.getItem("cart")).length || 0;
    } else {
      document.querySelector(".cartCount").textContent = 0;
    }
  }
  if (JSON.parse(localStorage.getItem("cart"))) {
    document.querySelector(".cartCount").textContent =
      JSON.parse(localStorage.getItem("cart")).length || 0;
  } else {
    document.querySelector(".cartCount").textContent = 0;
  }
});
///////////////////////////////////////
var data = JSON.parse(localStorage.getItem("data"));
var prData = [];
for (var i = 0; i < 20; i++) {
  prData.push(data[i]);
}
displayItem(prData);
function displayItem(dat) {
  document.querySelector(".related-product").textContent = "";
  dat.map(function (item, i) {
    var box = document.querySelector(".related-product");
    var prod = document.createElement("div");
    prod.classList.add("prod");
    var img = document.createElement("img");
    img.classList.add("thumnail-img");
    img.setAttribute("src", item.img);
    var off = document.createElement("span");
    off.classList.add("off");
    var wish = document.createElement("span");
    wish.classList.add("wish");
    wish.classList.add("wish-block");
    wish.innerHTML = `<i class="far fa-heart"></i>`;
    wish.addEventListener("click", function () {
      wishArr.push(item);
      wish.classList.toggle("wish-red");
      localStorage.setItem("wish", JSON.stringify(wishArr));
    });
    off.textContent = `${item.off}% OFF`;
    var imgDiv = document.createElement("div");
    imgDiv.classList.add("pr-img");
    imgDiv.append(img, off, wish);
    img;
    ////////////
    var brand = document.createElement("h3");
    brand.textContent = item.brand;
    var textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    var h1 = document.createElement("h1");
    h1.textContent = item.name;
    var stars = document.createElement("div");
    stars.classList.add("product-star");
    var star = [];
    var str = "";
    for (var i = 1; i <= 5; i++) {
      if (i <= Math.floor(item.rating)) {
        star.push(`<i class="fas fa-star"></i>`);
      } else {
        star.push(`<i class="far fa-star"></i>`);
      }
    }
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
    review.classList.add("product-review");
    review.textContent = `${item.review} reviews`;
    stars.append(str1, str2, str3, str4, str5, review);
    var price = document.createElement("p");
    price.innerHTML = `<span class="cut-price">₹${item.cutPrice}</span> <span class="price">${item.price}</span>`;
    var btn = document.createElement("button");
    btn.classList.add("select-option");
    btn.textContent = "SELECT OPTIONS";
    btn.addEventListener("click", function () {
      goToProduct(item);
    });
    /////////
    textDiv.append(brand, h1, stars, price, btn);
    prod.append(imgDiv, textDiv);
    box.append(prod);
  });
}
function goToProduct(item) {
  var arr = [];
  arr.push(item);
  localStorage.setItem("item", JSON.stringify(arr));
  location.href = "itemPage.html";
}
var cart = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelector(".item-buy").addEventListener("click", function () {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.href = "checkout.html";
});
