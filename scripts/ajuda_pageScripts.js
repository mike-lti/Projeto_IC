"use strict";

var utilizador = localStorage.getItem("currentAccount").slice(1,localStorage.getItem("currentAccount").length -1);
$(document).ready(currentAccPlacer());

/* Coloca o nome do utilizador na sidebar */
function currentAccPlacer(){
  var usernameLoggedInToParse = localStorage.getItem("currentAccount");
  var usernameLoggedIn = JSON.parse(usernameLoggedInToParse);
  document.getElementById("usernameCurrentAccount").innerHTML = usernameLoggedIn;
}

/* Faz o "dropup" do botão para sair da conta aparecer */
function open_dropup() {
  if (document.getElementsByClassName("dropup-content")[0].style.display == "none" ||
    document.getElementsByClassName("dropup-content")[0].style.display == "") {
    document.getElementsByClassName("dropup-content")[0].style.display = "block";
    $(".dropup-content").fadeIn(100);
  } else {
    $(".dropup-content").fadeOut(100);
  }
  
}