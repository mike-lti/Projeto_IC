//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

var arrayImagensImportadas = []; 

function showModal() {
    document.getElementsByClassName("importing_modal")[0].style.display = "inline-block";
    document.getElementsByClassName("importing_modal")[0].style.zIndex = "9";
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
    document.getElementById("botao-confirmar").disabled = true;
    disableBackground()
}

function closeModal() {
    document.getElementsByClassName("importing_modal")[0].style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
    localStorage.setItem("selectedFile", "");
    enableBackground()
}

function cancelSelection() {
    localStorage.setItem("selectedFile", "");
    closeModal()
}

function confirmSelection() {
    localStorage.setItem("showPopup", "true");
}

function selectCuba() {
    document.getElementById("botao-confirmar").disabled = false;
    localStorage.setItem("selectedFile", "Cuba");
    var arrayImagensCuba = ["img_cuba/img_1.jpg", "img_cuba/img_2.jpg", "img_cuba/img_3.jpg", "img_cuba/img_4.jpg", "img_cuba/img_5.jpg", "img_cuba/img_6.jpg", "img_cuba/img_7.jpg", "img_cuba/img_8.jpg", "img_cuba/img_9.jpg", "img_cuba/img_10.jpg", "img_cuba/img_11.jpg", "img_cuba/img_12.jpg", "img_cuba/img_13.jpg", "img_cuba/img_14.jpg", "img_cuba/img_15.jpg", "img_cuba/img_16.jpg", "img_cuba/img_17.jpg", "img_cuba/img_18.jpg", "img_cuba/img_19.jpg", "img_cuba/img_20.jpg"];
   
    if (localStorage.getItem("imagensImportadas") == null) {
        arrayImagensImportadas.push(arrayImagensCuba);
        localStorage.setItem("imagensImportadas", JSON.stringify(arrayImagensImportadas));
    } else {
        arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas"));
        arrayImagensImportadas.push(arrayImagensCuba);
        localStorage.setItem("imagensImportadas", JSON.stringify(arrayImagensImportadas));
    }
}

function selectFranca() {
    document.getElementById("botao-confirmar").disabled = false;
    localStorage.setItem("selectedFile", "Franca");
    var arrayImagensFranca = ["img_franca/img_1.jpg", "img_franca/img_2.jpg", "img_franca/img_3.jpg", "img_franca/img_4.jpg", "img_franca/img_5.jpg", "img_franca/img_6.jpg", "img_franca/img_7.jpg", "img_franca/img_8.jpg", "img_franca/img_9.jpg", "img_franca/img_10.jpg", "img_franca/img_11.jpg", "img_franca/img_12.jpg", "img_franca/img_13.jpg", "img_franca/img_14.jpg", "img_franca/img_15.jpg", "img_franca/img_16.jpg", "img_franca/img_17.jpg", "img_franca/img_18.jpg", "img_franca/img_19.jpg", "img_franca/img_20.jpg"];
    if (localStorage.getItem("imagensImportadas") == null) {
        arrayImagensImportadas.push(arrayImagensFranca);
        localStorage.setItem("imagensImportadas", JSON.stringify(arrayImagensImportadas));
    } else {
        arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas"));
        arrayImagensImportadas.push(arrayImagensFranca);
        localStorage.setItem("imagensImportadas", JSON.stringify(arrayImagensImportadas));
    }

}

function selectSpike() {
    document.getElementById("botao-confirmar").disabled = false;
    localStorage.setItem("selectedFile", "Spike");
    var arrayImagensSpike = ["img_spike/img1_.jpg", "img_spike/img_2.jpg", "img_spike/img_3.jpg", "img_spike/img_4.jpg", "img_spike/img_5.jpg", "img_spike/img_6.jpg", "img_spike/img_7.jpg", "img_spike/img_8.jpg", "img_spike/img_9.jpg", "img_spike/img_10.jpg", "img_spike/img_11.jpg", "img_spike/img_12.jpg", "img_spike/img_13.jpg", "img_spike/img_14.jpg", "img_spike/img_15.jpg", "img_spike/img_16.jpg", "img_spike/img_17.jpg", "img_spike/img_18.jpg", "img_spike/img_9.jpg", "img_spike/img_20.jpg"];
    if (localStorage.getItem("imagensImportadas") == null) {
        arrayImagensImportadas.push(arrayImagensSpike);
        localStorage.setItem("imagensImportadas", JSON.stringify(arrayImagensImportadas));
    } else {
        arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas"));
        arrayImagensImportadas.push(arrayImagensSpike);
        localStorage.setItem("imagensImportadas", JSON.stringify(arrayImagensImportadas));
    }
}

function disableBackground() {
    $("#side-bar").addClass("disabled")
    $("#memento-top-left").addClass("disabled")
    $("#top_row_icons").addClass("disabled")
    $("#bot_row_icons").addClass("disabled")
}

function enableBackground() {
    $("#side-bar").removeClass("disabled")
    $("#memento-top-left").removeClass("disabled")
    $("#top_row_icons").removeClass("disabled")
    $("#bot_row_icons").removeClass("disabled")
}