var detailsArr = JSON.parse(localStorage.getItem("account")) || [];
var FirstName = document.getElementById("firstName");
var LastName = document.getElementById("lastName");
var Email = document.getElementById("email-id");
var Pass = document.getElementById("pass");
document.querySelector("#submit-btn").addEventListener("click", function () {
  var detail = {};
  if (
    FirstName.value != "" &&
    LastName.value != "" &&
    Email.value != "" &&
    Pass.value != ""
  ) {
    detail.fName = FirstName.value;
    detail.lname = LastName.value;
    detail.mail = Email.value;
    detail.pass = Pass.value;
    detailsArr.push(detail);
    FirstName.value = "";
    LastName.value = "";
    Email.value = "";
    Pass.value = "";
    localStorage.setItem("account", JSON.stringify(detailsArr));
    alert("account created succesfully! Please logIn");
  } else {
    alert("Fill information correctly!");
  }
});
////////////////////////
// login
var email = document.querySelector("#email");
var pass = document.querySelector("#password");
var account = JSON.parse(localStorage.getItem("account"));
document.querySelector(".login-ac").addEventListener("click", function () {
  for (var i = 0; i < account.length; i++) {
    if (account[i].mail == email.value && account[i].pass == pass.value) {
      localStorage.setItem("log", true);
    }
    checkLog();
    location.href = "index.html";
  }
  if (!JSON.parse(localStorage.getItem("log"))) {
    email.value = "";
    pass.value = "";
    alert("wrong details!");
  }
});
checkLog();
function checkLog() {
  if (localStorage.getItem("log")) {
    document.querySelector(".login-btn").style.display = "none";
    document.querySelector(".create-btn").style.display = "none";
    document.querySelector(".log-block").style.display = "none";
    document.querySelector(".login-window").style.display = "none";
  }
}
