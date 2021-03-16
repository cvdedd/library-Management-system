var btn = document.getElementById("btn");

function alertUserName(){

var userEmail= document.getElementById("userEmail").value;

alert(userEmail);

};
btn.addEventListener("click",alertUserName);