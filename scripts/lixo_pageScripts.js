//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";
var utilizador = localStorage.getItem("currentAccount")
.slice(1,localStorage.getItem("currentAccount").length -1);

$(document).ready(preencheTabelaApagadas());
document.getElementById("botao-recuperar-fotografias").disabled = true;
$("input[type=checkbox]").attr("disabled", true);

function preencheTabelaApagadas() {

    if (JSON.parse(localStorage.getItem("imagensApagadas" + utilizador))) {
        let arrayImagens = JSON.parse(localStorage.getItem("imagensApagadas" + utilizador));
        var tabela = document.querySelector("#lixo tbody");
        tabela.innerHTML = "";
        var x = 0;
        var i = 0;
        var trElement;

        for (let imagens of arrayImagens) {
                if(i%4 == 0 || x == 0){
                    trElement = document.createElement('tr');
                    x++;
                }

                let linha = document.createElement("td");
                linha.innerHTML = "<label class='option-item'>" +
                                    "<input type='checkbox' class='checkbox' onclick='verifica()'>" +
                                    "<div class='option-inner'>" +
                                        "<img width='250px' height='155px' src='" + imagens + "'>" +
                                    "</div>" +
                                "</label>";
                trElement.appendChild(linha);
                tabela.appendChild(trElement);
                i++;

                }

        document.getElementsByClassName("dimmer")[0].style.opacity="0"

    }
}

function verifica() {
  
    if (document.querySelectorAll('input[type=checkbox]:checked').length != 0) {
        document.getElementById("botao-recuperar-fotografias").disabled = false;
        
    } else {
        $("#right-top-right-bar button img").addClass("disabled-image-button");
        document.getElementById("botao-recuperar-fotografias").disabled = true;
        
    }
}

function recuperarFotos() {

    var srcList = [];
    var arrayApagadas = document.querySelectorAll('input[type=checkbox]:checked');
    let arrayImagens = JSON.parse(localStorage.getItem("imagensApagadas" + utilizador));
    
    for (let src of JSON.parse(localStorage.getItem("imagensImportadas" + utilizador))) {
        srcList.push(src);
    }
    
    for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
        let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
        srcList.push(srcImagem)
    }

    for (let imagem of arrayApagadas) {
        let srcApagada = imagem.parentElement.children[1].children[0].getAttribute('src');
        let index = 0;
        for ( let srcImportadas of arrayImagens) {
            if (srcApagada == srcImportadas) {
                arrayImagens.splice (index, 1);
            }

            index++;
        }
    }

    localStorage.setItem("imagensApagadas" + utilizador, JSON.stringify(arrayImagens));
    localStorage.setItem("imagensImportadas" + utilizador, JSON.stringify(srcList));
    location.replace("galeria.html")   
}


function disableBackground() {
    $("#side-bar").addClass("disabled")
    $("#tabela").addClass("disabled")
    $("#top-right-bar").addClass("disabled")
    $("#memento").addClass("disabled");
}

function enableBackground() {
    $("#side-bar").removeClass("disabled")
    $("#tabela").removeClass("disabled")
    $("#top-right-bar").removeClass("disabled")
    $("#memento").removeClass("disabled");
}


function open_dropup() {
    if (document.getElementsByClassName("dropup-content")[0].style.display == "none" || 
    document.getElementsByClassName("dropup-content")[0].style.display == "") {
      document.getElementsByClassName("dropup-content")[0].style.display = "block";
      $('.dropup-content').fadeIn(100);
    } else {
      $('.dropup-content').fadeOut(100);
    }
    
}

function enable_favoritos() {
    if ( $("input[type=checkbox]").attr("disabled")) {
        document.getElementById("botao-selecionar-favoritos").innerHTML = "Cancelar"
        $("input[type=checkbox]").attr("disabled", false);
       
    } else {
        document.getElementById("botao-selecionar-favoritos").innerHTML = "Selecionar"
        document.getElementById("botao-selecionar-todas-favoritos").innerHTML = "Selecionar Todas"
        $("input[type=checkbox]").attr("disabled", true);
        document.getElementById("botao-recuperar-fotografias").disabled = true;
        for (let imagem of document.querySelectorAll('input[type=checkbox]:checked')) {
            imagem.checked = false; 
        }   
    }
}


function seleciona_todos() {
    
    if ( $("input[type=checkbox]").attr("disabled")) {
        document.getElementById("botao-selecionar-todas-favoritos").innerHTML = "Desselecionar Todas"
        document.getElementById("botao-selecionar-favoritos").innerHTML = "Cancelar"
        $("input[type=checkbox]").attr("disabled", false);
        var boxes = document.getElementsByClassName("checkbox");
        if (document.querySelectorAll('input[type=checkbox]:checked').length == 0 || 
        document.querySelectorAll('input[type=checkbox]:checked').length < document.querySelectorAll('input[type=checkbox]:not(:checked)').length) {
            for (var x = 0; x < boxes.length; x++) {
                var obj = boxes[x];
                    obj.checked = true;
                    verifica();
            }
        } else {
            for (var x = 0; x < boxes.length; x++) {
                var obj = boxes[x];
                    obj.checked = false;
                    verifica();
            }
        }
    } else {
        
        if (document.getElementById("botao-selecionar-favoritos").innerHTML == "Cancelar") {

            if (document.querySelectorAll('input[type=checkbox]:checked').length == 0) {
                document.getElementById("botao-selecionar-todas-favoritos").innerHTML = "Desselecionar Todas"
            } else {
                document.getElementById("botao-selecionar-todas-favoritos").innerHTML = "Selecionar Todas"
            }
            var boxes = document.getElementsByClassName("checkbox");
            if (document.querySelectorAll('input[type=checkbox]:checked').length == 0 || 
            document.querySelectorAll('input[type=checkbox]:checked').length < document.querySelectorAll('input[type=checkbox]:not(:checked)').length) {
                for (var x = 0; x < boxes.length; x++) {
                    var obj = boxes[x];
                        obj.checked = true;
                        verifica();
                }
            } else {
                for (var x = 0; x < boxes.length; x++) {
                    var obj = boxes[x];
                        obj.checked = false;
                        verifica();
                }
            }
            

        } else {
            document.getElementById("botao-selecionar-todas-favoritos").innerHTML = "Selecionar Todas"
            document.getElementById("botao-selecionar-favoritos").innerHTML = "Selecionar"
            $("input[type=checkbox]").attr("disabled", true);
            for (let imagem of document.querySelectorAll('input[type=checkbox]:checked')) {
                imagem.checked = false; 
            }
        }
        
        
        
    }
}


function open_popup() {
    
    var recuperarTamanho = document.querySelectorAll('input[type=checkbox]:checked').length;

    if (recuperarTamanho > 1) {
        document.getElementsByClassName("numero-fotografias-recuperar")[0].innerHTML = "Tem a certeza que quer recuperar <br>" + recuperarTamanho + " fotografias?";
    } else {
        document.getElementsByClassName("numero-fotografias-recuperar")[0].innerHTML = "Tem a certeza que quer recuperar a fotografia selecionada?";
    }
    
    document.getElementsByClassName("dimmer")[0].style.opacity="1"
    document.getElementsByClassName("popup-eliminar-fotos-geral")[0].style.display = "block";
    disableBackground();   
}

function close_popup() {
    document.getElementsByClassName("dimmer")[0].style.opacity="0"
    document.getElementsByClassName("popup-eliminar-fotos-geral")[0].style.display = "none";

    enableBackground();
}