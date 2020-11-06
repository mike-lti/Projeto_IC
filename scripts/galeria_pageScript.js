//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(showPhotos());

function showPhotos() {
    switch (localStorage.getItem("selectedFile")) {
        case "Cuba":
            document.getElementById("tabela").style.display = "block"
            break;

        case "Franca":
            break;

        case "Spike":
            break;        
    }
}



