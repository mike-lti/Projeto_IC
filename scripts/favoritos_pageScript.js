//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

var tabela = document.querySelector("table#fotos-favoritas tbody");
var favList = JSON.parse(localStorage.getItem("favoritos"))
var favFotos = [];

$(document).ready(show_favoritos());

function getFavoritos() {
    for (let srcFoto of favList) {
        let newImg = $('<img />', {src: srcFoto, width:"255px", height:"145px"});
        favFotos.push(newImg)
    }
}

function showFavoritos() {
    tabela.innerHTML = "";
    let trElement;
    
    for (let i = 0; i < favFotos.length; i++) {
        if(i%4 == 0 || i == 0) {
            trElement = document.createElement('tr');
        }
        trElement.appendChild(favFotos[i]);
        tabela.appendChild(trElement);
    }
}

/* TESTE */