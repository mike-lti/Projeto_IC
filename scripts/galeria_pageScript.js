//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(imagePlacer());

let cubaAlbumPhoto = "images/cubaAlbum.jpg" 

function showPhotos() {
    switch (localStorage.getItem("selectedFile")) {
        case "Cuba":
            return cubaAlbumPhoto
            break;

        case "Franca":
            return cubaAlbumPhoto
            break;

        case "Spike":
            return cubaAlbumPhoto
            break;        
    }
}

function imagePlacer(){
    let imageToPlace = showPhotos()
    document.getElementsByClassName("grid-item").innerHTML = "<img src = imageToPlace>"

}