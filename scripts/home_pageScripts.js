//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

function loginDimmerShower() {
    let backgroundDimmer = document.getElementsByClassName("backgroundPopups")[0];
    let loginPopup = document.getElementsByClassName("loginDimmer")[0];
    loginPopup.style.display = "block";
    backgroundDimmer.style.opacity = "1";
}

function loginDimmerCloser() {
    let backgroundDimmer = document.getElementsByClassName("backgroundPopups")[0];
    let loginPopup = document.getElementsByClassName("loginDimmer")[0];
    loginPopup.style.display = "none";
    backgroundDimmer.style.opacity = "0";



}

function RegistarDimmerShower() {
    let backgroundDimmer = document.getElementsByClassName("backgroundPopups")[0];
    let registarPopup = document.getElementsByClassName("registarDimmer")[0];
    registarPopup.style.display = "block";
    backgroundDimmer.style.opacity = "1";
}

function RegistarDimmerCloser() {
    let backgroundDimmer = document.getElementsByClassName("backgroundPopups")[0];
    let registarPopup = document.getElementsByClassName("registarDimmer")[0];
    registarPopup.style.display = "none";
    backgroundDimmer.style.opacity = "0";
}
