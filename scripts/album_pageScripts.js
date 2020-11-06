//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

const NAVEGADOR = 'navegador';

function showModal() {
    document.getElementsByClassName("album_modal")[0].style.display = "inline-block";
    document.getElementsByClassName("album_modal")[0].style.zIndex = "9";
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
}

function closeModal() {
    document.getElementsByClassName("album_modal")[0].style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
}


function openAlbumPhotos(){
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
    document.getElementById("opcoes-album").style.display="block"
    document.getElementById("fundo-fotos-album").style.display="block"

}

function closeAlbumPhotos(){
    document.getElementById("opcoes-album").style.display="none"
    document.getElementById("fundo-fotos-album").style.display="none"
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
}

function importCubaPhotos() {

}

function importFrancePhotos() {

}

function importSpikePhotos() {
    
}