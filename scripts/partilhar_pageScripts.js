//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

function openLinkPopup(){
    document.getElementsByClassName("dimmer")[0].style.opacity="1"
    document.getElementsByClassName("linkPopup")[0].style.display="block"
}

function closeLinkPopup(){
    document.getElementsByClassName("dimmer")[0].style.opacity="0"
    document.getElementsByClassName("linkPopup")[0].style.display="none"

}

function linkGenerate(){
    let tempLink = "https//montaNelas420POVOASANTAIRIA2625!?!?!?.com"
    document.getElementsByClassName("linkParagraph")[0].innerHTML = tempLink
}