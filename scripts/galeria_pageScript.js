//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(showPhotos());

$("#right-top-right-bar button img").addClass("disabled-image-button")
document.getElementById("botao-eliminar").disabled = true;
document.getElementById("botao-criar-galeria").disabled = true;
document.getElementById("botao-adicionar").disabled = true;
$("input[type=checkbox]").attr("disabled", true);


var elementos = document.querySelectorAll('input[type=checkbox]');
for (let element of elementos) {
    element.addEventListener("change", imagem_selecionada);
}

function showPhotos() {
    switch (localStorage.getItem("selectedFile")) {
        case "Cuba":
            $("#tabela").find(".option-item").css( "display", "block");
            if (localStorage.getItem("showPopup") == "true") {
                showPopup();
                localStorage.setItem("showPopup", "false")
            }
            break;

        case "Franca":
            $("#tabela2").find(".option-item").css( "display", "block");
            if (localStorage.getItem("showPopup") == "true") {
                showPopup();
                localStorage.setItem("showPopup", "false")
            }
            break;

        case "Spike":
            break;        
    }
}

function closePopup() {
    document.getElementsByClassName("popup")[0].style.display = "none"
}

function showPopup() {
    document.getElementsByClassName("popup")[0].style.display = "block";
    $('.popup').fadeOut(7000);
}

function imagem_selecionada() {
    
    if (document.querySelectorAll('input[type=checkbox]:checked').length > 0) {
        $("#right-top-right-bar button img").removeClass("disabled-image-button");
        document.getElementById("botao-eliminar").disabled = false;    
        document.getElementById("botao-criar-galeria").disabled = false;
        document.getElementById("botao-adicionar").disabled = false;
    } else {
        $("#right-top-right-bar button img").addClass("disabled-image-button");
        document.getElementById("botao-eliminar").disabled = true;    
        document.getElementById("botao-criar-galeria").disabled = true;
        document.getElementById("botao-adicionar").disabled = true;
    
    }
    
}  

function seleciona_todos() {
    
    var boxes = document.getElementsByClassName("checkbox");
    if (document.querySelectorAll('input[type=checkbox]:checked').length == 0) {
        for (var x = 0; x < boxes.length; x++) {
            var obj = boxes[x];
                obj.checked = true;
                imagem_selecionada();
        }
    } else {
        for (var x = 0; x < boxes.length; x++) {
            var obj = boxes[x];
                obj.checked = false;
                imagem_selecionada();
        }
    }
}

function enable_galeria() {
    if ( $("input[type=checkbox]").attr("disabled")) {
        document.getElementById("botao-selecionar-galeria").innerHTML = "Cancelar"
        $("input[type=checkbox]").attr("disabled", false);
    } else {
        document.getElementById("botao-selecionar-galeria").innerHTML = "Selecionar"
        $("input[type=checkbox]").attr("disabled", true);
        for (let imagem of document.querySelectorAll('input[type=checkbox]:checked')) {
            imagem.checked = false; 
        }   
    }
}

function open_popup_eliminar_fotografias() {
    document.getElementsByClassName("dimmer")[0].style.opacity="1"
    document.getElementById("popup-eliminar-fotos-galeria").style.display = "block";   
}

function close_popup_eliminar_fotografias() {
    document.getElementsByClassName("dimmer")[0].style.opacity="0"
    document.getElementById("popup-eliminar-fotos-galeria").style.display = "none";
}

function open_popup_adicionar_fotografias() {
    document.getElementsByClassName("dimmer")[0].style.opacity="1"
    document.getElementById("popup-adicionar-fotos-galeria").style.display = "block";   
}

function close_popup_adicionar_fotografias() {
    document.getElementsByClassName("dimmer")[0].style.opacity="0"
    document.getElementById("popup-adicionar-fotos-galeria").style.display = "none";
}

function guardarFavoritos() {
    let srcList = [];

    for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
        let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
        srcList.push(srcImagem)
    }

    localStorage.setItem("favoritos", JSON.stringify(srcList))
}