"use strict";

var utilizador = localStorage.getItem("currentAccount").slice(1,localStorage.getItem("currentAccount").length -1);
$(document).ready(currentAccPlacer());


function currentAccPlacer(){
  var usernameLoggedInToParse = localStorage.getItem("currentAccount");
  var usernameLoggedIn = JSON.parse(usernameLoggedInToParse);
  document.getElementById("usernameCurrentAccount").innerHTML = usernameLoggedIn;
}


function open_dropup() {
  if (
    document.getElementsByClassName("dropup-content")[0].style.display ==
      "none" ||
    document.getElementsByClassName("dropup-content")[0].style.display == ""
  ) {
    document.getElementsByClassName("dropup-content")[0].style.display =
      "block";
    $(".dropup-content").fadeIn(100);
  } else {
    $(".dropup-content").fadeOut(100);
  }
  
}