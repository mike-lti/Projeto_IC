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