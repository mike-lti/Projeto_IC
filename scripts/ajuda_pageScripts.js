"use strict";
$(document).ready(currentAccPlacer());

function currentAccPlacer(){
  var usernameLoggedInToParse = localStorage.getItem("currentAccount");
  var usernameLoggedIn = JSON.parse(usernameLoggedInToParse);
  document.getElementById("usernameCurrentAccount").innerHTML = usernameLoggedIn;
}


function open_dropup() {
  if (document.getElementsByClassName("dropup-content")[0].style.display == "none" || 
  document.getElementsByClassName("dropup-content")[0].style.display == "") {
    document.getElementsByClassName("dropup-content")[0].style.display = "block";
    $('.dropup-content').fadeIn(1000);
  } else {
    document.getElementsByClassName("dropup-content")[0].style.display = "none";
    $('.dropup-content').fadeOut(1000);
  }
  
}