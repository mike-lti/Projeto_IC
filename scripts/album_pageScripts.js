//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(show_album());

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


function imagePlacer(){
    document.getElementById("popUpTabela1").style.display="block"
    document.getElementById("seleciona-fotos-album").style.display="block   "
    document.getElementsByClassName("album_modal")[0].style.display = "none";
}

function popUpTabela1Close(){
    document.getElementById("popUpTabela1").style.display="none"
    document.getElementById("seleciona-fotos-album").style.display="none"
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";

}


function imagePlacerCorfirm(){
    document.getElementsByClassName("grid-item")[0].style.display="block"
    document.getElementById("popUpTabela1").style.display="none"
    document.getElementById("seleciona-fotos-album").style.display="none"
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
    document.getElementsByClassName("popupAlbum")[0].style.display="block"
    $('.popupAlbum').fadeOut(7000);

    localStorage.setItem("album-criado", "true")
}

function show_album() {

    if (localStorage.getItem("album-criado"))    {
        document.getElementsByClassName("grid-item")[0].style.display="block"
    } else {
        document.getElementsByClassName("grid-item")[0].style.display="none"
    }
    
}

function closePopup(){
    document.getElementsByClassName("popupAlbum")[0].style.display="none"

}

function importCubaPhotos() {
    
}

function importFrancePhotos() {

}

function importSpikePhotos() {
    
}