//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(showPhotos());

let cubaAlbumPhoto =["images/cubaAlbum.jpg"] 

function showPhotos() {
    switch (localStorage.getItem("selectedFile")) {
        case "Cuba":
            return cubaAlbumPhoto[0]
            break;

        case "Franca":
            return cubaAlbumPhoto[1]
            break;

        case "Spike":
            return cubaAlbumPhoto[2]
            break;        
    }
}



function imagePlacer(){
    let imageToPlace = showPhotos()
    document.getElementsByClassName("grid-item").innerHTML = "<img src = imageToPlace>"

}