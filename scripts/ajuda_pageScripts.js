"use strict";


function open_dropup() {
  if (document.getElementsByClassName("dropup-content")[0].style.display == "none") {
    document.getElementsByClassName("dropup-content")[0].style.display = "block";
    $('.dropup-content').fadeIn(1000);
  } else {
    document.getElementsByClassName("dropup-content")[0].style.display = "none";
    $('.dropup-content').fadeOut(1000);
  }
  
}