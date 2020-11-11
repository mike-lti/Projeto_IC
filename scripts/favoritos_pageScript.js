//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

var tabela = document.querySelector("table#fotos-favoritas tbody");
var favList = JSON.parse(localStorage.getItem("favoritos"))
var favFotos = [];

$(document).ready(getFavoritos());

function getFavoritos() {
    for (let srcFoto of favList) {
        let newImg = document.createElement("img");
        newImg.setAttribute("src", srcFoto);
        newImg.setAttribute("width", "255px");
        newImg.setAttribute("height", "145px");
        favFotos.push(newImg)
    }
    
    showFavoritos();
}

function showFavoritos() {
    tabela.innerHTML = "";
    var trElement;
    
    for (var i = 0; i < favFotos.length; i++) {
        if(i%4 == 0 || i == 0) {
            trElement = document.createElement('tr');
        }

        trElement.appendChild(favFotos[i]);
        tabela.appendChild(trElement);
    }
}