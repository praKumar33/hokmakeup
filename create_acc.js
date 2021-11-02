document.querySelector("button").addEventListener("click",buttonFun);
var detailsArr = JSON.parse(localStorage.getItem("createAccount")) || [];
function buttonFun(){
   var FirstName = document.getElementById("firstName").value;
    var LastName = document.getElementById("lastName").value;
    var Email = document.getElementById("email").value;
    var Pass = document.getElementById("pass").value;
    
    var accountDetails = {
        fName : FirstName,
        lname : LastName,
        emaiL : Email,
        password : Pass,
    };
    detailsArr.push(accountDetails);
    localStorage.setItem("createAccount",JSON.stringify(detailsArr));
//    if it was new account. account creates directly and opens home page
    // window.location.href = "";
   
    for(var i = 0; i < detailsArr.length; i++){
        var line = 0;
        if(Email == detailsArr[i].emaiL){
            line = 1
        }
    }
    if(line == 1){
        alert("Email already exist");
    }
        else{
            alert("Login Sucessful");
        }
    }
document.getElementById("home").addEventListener("click",function(){
    location.href= "home.html";
})

