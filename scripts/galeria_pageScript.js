//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(showPhotos());
$(document).ready(preencheTabelaImagens());

$("#right-top-right-bar button img").addClass("disabled-image-button")
document.getElementById("botao-eliminar").disabled = true;
document.getElementById("botao-criar-galeria").disabled = true;
document.getElementById("botao-adicionar").disabled = true;
$("input[type=checkbox]").attr("disabled", true);

if (localStorage.length == 0) {
    document.getElementById("botao-selecionar-galeria").disabled = true;
    document.getElementById("botao-selecionar-todas-galeria").disabled = true;
    for (let item of document.querySelectorAll('#tabela .option-item')) {
        item.style.display = "none";
    }
} else {
    document.getElementById("botao-selecionar-galeria").disabled = false;
    document.getElementById("botao-selecionar-todas-galeria").disabled = false;
}




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
    document.getElementById("popup-adicionar-fotos-galeria").style.display = "none";
}


function nova_galeria_eliminada() {
    var arrayFicar = document.querySelectorAll('input[type=checkbox]:not(:checked)');
    var tabela = document.querySelector("#tabela tbody");
    tabela.innerHTML = "";
    var x = 0;
    var i = 0;
    var trElement;
    /* Cria tabela que vai conter as fotos que vão ficar no album */
    for (let input of arrayFicar ) {
            
        if(i%4 == 0 || x == 0){
            trElement = document.createElement('tr');
            trElement.setAttribute('id', `tr${x}`);
            x++;
        }

        let src = input.parentElement.children[1].children[0].getAttribute('src');
        let linha = document.createElement("td");
        linha.innerHTML = "<label class='option-item'>" +
                                "<input type='checkbox' class='checkbox'>" +
                                "<div class='option-inner'>" +
                                    "<img width='255px' height='145px' src='" + src + "'>" +
                                "</div>" +
                            "</label>";
        trElement.appendChild(linha);
        tabela.appendChild(trElement);
        i++;  
    }
        
    document.getElementsByClassName("dimmer")[0].style.opacity="0"  
    
    
    close_popup_eliminar_fotografias()
}   

function guardarFavoritos() {

    if (localStorage.getItem("fotosFavoritas") == null) {
        let srcList = [];

        for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
            let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
            srcList.push(srcImagem)
        }

        localStorage.setItem("fotosFavoritas", JSON.stringify(srcList))
    } else {

        let srcList = JSON.parse(localStorage.getItem("fotosFavoritas"));

        for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
            let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
            srcList.push(srcImagem)
        }
    
        localStorage.setItem("fotosFavoritas", JSON.stringify(srcList))
    }
}

function preencheTabelaImagens() {
    var tabela = document.querySelector("#tabela tbody");
    tabela.innerHTML = "";
    let arrayImagens = JSON.parse(localStorage.getItem("imagensImportadas"));
    var x = 0;
    var i = 0;
    var trElement;
    for (let lista of arrayImagens) {
        for (let imagens of lista) {
            if(i%4 == 0 || x == 0){
                trElement = document.createElement('tr');
                trElement.setAttribute('id', `tr${x}`);
                x++;
            }
            let linha = document.createElement("td");
            linha.innerHTML = "<label class='option-item'>" +
                                "<input type='checkbox' class='checkbox'>" +
                                "<div class='option-inner'>" +
                                    "<img width='255px' height='145px' src='" + imagens + "'>" +
                                "</div>" +
                            "</label>";
            trElement.appendChild(linha);
            tabela.appendChild(trElement);
            i++;

            }
        }


    document.getElementsByClassName("dimmer")[0].style.opacity="0"


    close_popup_eliminar_fotografias()
    
}
