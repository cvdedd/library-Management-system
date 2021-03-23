// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("search")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

/*
 When the user clicks on <span> (search icon), close the modal
span.onclick = function() {
    modal.style.display = "none";
   
}
*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// when the search icon is clicked it should display info in results
var searchIcon = document.getElementById("myform");
var results =document.getElementById("results");


searchIcon.onclick = function (){
    results.style.display = "block";
    
}