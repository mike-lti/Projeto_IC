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

function showPopup() {
    document.getElementsByClassName("popup")[0].style.display = "block";
}

function closePopup() {
    document.getElementsByClassName("popup")[0].style.display = "none"

}

function cancelSelection() {
    localStorage.setItem("selectedFile", "");
    closeModal()
}

function confirmSelection() {
    closeModal()
    showPopup()
}

function selectCuba() {
    localStorage.setItem("selectedFile", "Cuba")
}

function selectFranca() {
    localStorage.setItem("selectedFile", "Franca")
}

function selectSpike() {
   localStorage.setItem("selectedFile", "Spike") 
}
