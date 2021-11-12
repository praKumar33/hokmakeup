//////////////////////////
var data = JSON.parse(localStorage.getItem("data"));
displayItem(data);
///////////////////////////
// filters

////////////////////////////////
///////////////
var fillArr = [];
function fil() {
  fillArr = [];
  var filters = document.querySelectorAll('input[type="checkbox"]');
  filters.forEach(function (filter) {
    if (filter.checked) {
      fillArr.push(filter.value);
    }
  });
  displayFilter(fillArr);
}
function displayFilter(filter) {
  var arr = [];
  var l = true;
  filter.forEach(function (fil) {
    var filterArr = data.filter(function (item) {
      var f = fil.split(">");
      cat = f[0];
      val = f[1];
      if (cat == "brand") {
        if (item.brand == val) {
          arr.push(item);
          return item;
        }
      } else if (cat == "price") {
        var v = val.split("-");
        var low = v[0];
        var high = v[1];
        if (item.price >= low && item.price <= high) {
          arr.push(item);
          return item;
        }
      } else if (cat == "discount") {
        var v = val.split("-");
        var low = v[0];
        var high = v[1];
        if (item.off >= low && item.off <= high) {
          arr.push(item);
          return item;
        }
      } else if (cat == "cat") {
        console.log(val);
        if (item.cat == val) {
          arr.push(item);
          return item;
        }
      }
    });
    l = false;
  });
  displayItem(arr);
  if (arr.length == 0 && l) {
    displayItem(data);
  }
}
///////////////////////////////////////////
function sortProducts() {
  var value = document.getElementById("sortProducts").value;
  var arr = [];
  if (value == "low") {
    arr = data.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (value == "high") {
    arr = data.sort(function (a, b) {
      return b.price - a.price;
    });
  } else if (value == "new") {
    arr = data.sort(function (a, b) {
      return a.review - b.review;
    });
  } else if (value == "new") {
    arr = data.sort(function (a, b) {
      return a.rating - b.rating;
    });
  } else if (value == "best") {
    arr = data.sort(function (a, b) {
      return b.rating - a.rating;
    });
  } else if (value == "all") {
    arr = data;
  }
  displayItem(arr);
}
var wishArr = JSON.parse(localStorage.getItem("wish")) || [];
function displayItem(dat) {
  document.querySelector(".products-sec").textContent = "";
  dat.map(function (item, i) {
    var box = document.querySelector(".products-sec");
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
    var btn2 = document.createElement("button");
    btn2.classList.add("wish-list");
    btn2.textContent = "Add to Wish List";
    btn2.addEventListener("click", function () {
      if (btn2.textContent == "Add to Wish List") {
        wishArr.push(item);
        localStorage.setItem("wish", JSON.stringify(wishArr));
        btn2.textContent = "Remove from Wish List";
      } else {
        btn2.textContent = "Add to Wish List";
        wishArr.pop();
        localStorage.setItem("wish", JSON.stringify(wishArr));
      }
    });
    var disc = document.createElement("div");
    var d = "";
    var dc = item.disc;
    for (var i = 0; i < 120; i++) {
      d = d + dc[i];
      if (i == 119) {
        d = d + "...";
      }
    }
    disc.innerHTML = d;
    disc.classList.add("disc");
    /////////
    textDiv.append(brand, h1, stars, price, disc, btn, btn2);
    prod.append(imgDiv, textDiv);
    box.append(prod);
  });
}

/////////////////////////
// wish list toggle
var imgDiv = document.querySelectorAll(".pr-img");
var wish = document.querySelectorAll(".wish");
var image = document.querySelectorAll(".thumnail-img");
imgDiv.forEach(function (img, i) {
  img.addEventListener("mouseenter", function () {
    wish[i].classList.remove("wish-block");
    image[i].setAttribute("src", data[i].img2[0]);
  });
  img.addEventListener("mouseleave", function () {
    wish[i].classList.add("wish-block");
    image[i].setAttribute("src", data[i].img);
  });
});

// document.querySelector(".pr-img").addEventListener("mouseleave", function () {
//   document.querySelector(".wish").classList.add("wish-block");
/////////////////////////
// bars
var bar1 = document.querySelector(".b1");
var bar2 = document.querySelector(".b2");
var bar3 = document.querySelector(".b3");
bar1.addEventListener("click", function () {
  bar1.classList.add("active-bar");
  bar2.classList.remove("active-bar");
  bar3.classList.remove("active-bar");
  document.querySelector(".products-sec").style.gridTemplateColumns = "100%";
  var prod = document.querySelectorAll(".prod");
  var text = document.querySelectorAll(".text-div");
  var select = document.querySelectorAll(".select-option");
  var wish = document.querySelectorAll(".wish-list");
  for (var i = 0; i < prod.length; i++) {
    prod[i].classList.add("prod-view1");
    text[i].classList.add("text-div-view1");
    select[i].classList.add("select-option-view1");
    wish[i].classList.add("wish-list-view1");
  }
});
bar2.addEventListener("click", function () {
  bar1.classList.remove("active-bar");
  bar2.classList.add("active-bar");
  bar3.classList.remove("active-bar");
  document.querySelector(".products-sec").style.gridTemplateColumns =
    "284px 284px 284px";
  var prod = document.querySelectorAll(".prod");
  var text = document.querySelectorAll(".text-div");
  var select = document.querySelectorAll(".select-option");
  var wish = document.querySelectorAll(".wish-list");
  for (var i = 0; i < prod.length; i++) {
    prod[i].classList.remove("prod-view1");
    text[i].classList.remove("text-div-view1");
    select[i].classList.remove("select-option-view1");
    wish[i].classList.remove("wish-list-view1");
  }
});
bar3.addEventListener("click", function () {
  bar1.classList.remove("active-bar");
  bar2.classList.remove("active-bar");
  bar3.classList.add("active-bar");
  document.querySelector(".products-sec").style.gridTemplateColumns =
    "repeat(4,212px)";
  var prod = document.querySelectorAll(".prod");
  var text = document.querySelectorAll(".text-div");
  var select = document.querySelectorAll(".select-option");
  var wish = document.querySelectorAll(".wish-list");
  for (var i = 0; i < prod.length; i++) {
    prod[i].classList.remove("prod-view1");
    text[i].classList.remove("text-div-view1");
    select[i].classList.remove("select-option-view1");
    wish[i].classList.remove("wish-list-view1");
  }
});

function goToProduct(item) {
  var arr = [];
  arr.push(item);
  localStorage.setItem("item", JSON.stringify(arr));
  location.href = "itemPage.html";
}
