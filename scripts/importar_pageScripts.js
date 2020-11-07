//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

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
    closeModal()
    localStorage.setItem("showPopup", "true");
}

function selectCuba() {
    document.getElementById("botao-confirmar").disabled = false;
    localStorage.setItem("selectedFile", "Cuba")
}

function selectFranca() {
    document.getElementById("botao-confirmar").disabled = false;
    localStorage.setItem("selectedFile", "Franca")
}

function selectSpike() {
    document.getElementById("botao-confirmar").disabled = false;
   localStorage.setItem("selectedFile", "Spike") 
}

function disableBackground() {
    $("#side-bar").addClass("disabled");
    $("#memento-top-left").addClass("disabled");
    $("#top-row-icons").addClass("disabled");
    $("bot-row-icons").addClass("disabled");
}

function enableBackground() {
    $("#side-bar").removeClass("disabled");
    $("#memento-top-left").removeClass("disabled")
    $("#top-row-icons").removeClass("disabled");
    $("bot-row-icons").removeClass("disabled");
}