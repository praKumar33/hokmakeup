var detailsArr = JSON.parse(localStorage.getItem("account")) && [];
var FirstName = document.getElementById("firstName");
var LastName = document.getElementById("lastName");
var Email = document.getElementById("email-id");
var Pass = document.getElementById("pass");
document.querySelector("#submit-btn").addEventListener("click", function () {
  var detail = {};
  if (
    FirstName.value != "" ||
    LastName.value != "" ||
    Email.value != "" ||
    Pass.value != ""
  ) {
    detail.fName = FirstName.value;
    detail.lname = LastName.value;
    detail.mail = Email.value;
    detail.pass = Pass.value;
    detailsArr.push(detail);
    localStorage.setItem("account", JSON.stringify(detailsArr));
  } else {
    alert("Fill information correctly");
  }
});
