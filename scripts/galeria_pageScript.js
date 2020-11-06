//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(showPhotos());

function showPhotos() {
    switch (localStorage.getItem("selectedFile")) {
        case "Cuba":
            $("#tabela").find(".option-item").css( "display", "block");
            if (localStorage.getItem("showPopup") == "true") {
                showPopup();
                localStorage.setItem("showPopup", "false")
            }
            break;

        case "Franca":
            break;

        case "Spike":
            break;        
    }
}

function closePopup() {
    document.getElementsByClassName("popup")[0].style.display = "none"
}

function showPopup() {
    document.getElementsByClassName("popup")[0].style.display = "block";
}