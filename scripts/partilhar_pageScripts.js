//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

function open_popup_link(){
    document.getElementsByClassName("dimmer")[0].style.opacity="1"
    document.getElementsByClassName("popup-link")[0].style.display="block"
}

function close_popup_link(){
    document.getElementsByClassName("dimmer")[0].style.opacity="0"
    document.getElementsByClassName("popup-link")[0].style.display="none"

}

function linkGenerate(){
    let randomNumber = Math.floor(Math.random() * 100000001);
    let tempLink = "https://memento_" + randomNumber + ".com"
    document.getElementsByClassName("linkParagraph")[0].innerHTML = tempLink
}