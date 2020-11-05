//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

function showModal() {
    document.getElementsByClassName("importing_modal")[0].style.display = "inline-block";
    document.getElementsByClassName("importing_modal")[0].style.zIndex = "9";
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
}

function closeModal() {
    document.getElementsByClassName("importing_modal")[0].style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
}

function importCubaPhotos() {
    document.getElementsByClassName("importing_modal")[0].style.display = "none"
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
    document.getElementsByClassName("processHandler")[0].style.display = "inline-block"
}

function importFrancePhotos() {

}

function importSpikePhotos() {
    
}


function closeProcessHandler(){
    document.getElementsByClassName("processHandler")[0].style.display = "none"

}