//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(showPhotos());

function showPhotos() {
    switch (localStorage.getItem("selectedFile")) {
        case "Cuba":
            $("#tabela").find(".option-item").css( "display", "block");
            break;

        case "Franca":
            break;

        case "Spike":
            break;        
    }
}



