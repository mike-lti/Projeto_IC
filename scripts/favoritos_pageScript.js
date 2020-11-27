//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

/* var tabela = document.querySelector("table#fotos-favoritas tbody");
var favList = JSON.parse(localStorage.getItem("fotosFavoritas"));
var favFotos = [];

$(document).ready(getFavoritos());

function getFavoritos() {
    for (let srcFoto of favList) {
        let newImg = document.createElement("img");
        newImg.setAttribute("src", srcFoto);
        newImg.setAttribute("width", "255px");
        newImg.setAttribute("height", "145px");
        favFotos.push(newImg)
    }
    
    showFavoritos();
}

function showFavoritos() {
    var trElement;
    
    for (var i = 0; i < favFotos.length; i++) {
        if(i%4 == 0 || i == 0) {
            trElement = document.createElement('tr');
        }

        trElement.appendChild(favFotos[i]);
        tabela.appendChild(trElement);
    }
} */


$(document).ready(getFavoritos());



$("#right-top-right-bar button img").addClass("disabled-image-button")
document.getElementById("botao-eliminar").disabled = true;
document.getElementById("botao-criar-galeria").disabled = true;
document.getElementById("botao-adicionar").disabled = true;
$("input[type=checkbox]").attr("disabled", true);

if (localStorage.getItem("fotosFavoritas") == null || localStorage.getItem("fotosFavoritas").length == 2 ) {
    document.getElementById("botao-selecionar-favoritos").disabled = true;
    document.getElementById("botao-selecionar-todas-favoritos").disabled = true;
    for (let item of document.querySelectorAll('#tabela .option-item')) {
        item.style.display = "none";
    }
} else {
    document.getElementById("botao-selecionar-favoritos").disabled = false;
    document.getElementById("botao-selecionar-todas-favoritos").disabled = false;
}

var elementos = document.querySelectorAll('input[type=checkbox]');
for (let element of elementos) {
    element.addEventListener("change", imagem_selecionada);
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

function enable_favoritos() {
    if ( $("input[type=checkbox]").attr("disabled")) {
        document.getElementById("botao-selecionar-favoritos").innerHTML = "Cancelar"
        $("input[type=checkbox]").attr("disabled", false);
    } else {
        document.getElementById("botao-selecionar-favoritos").innerHTML = "Selecionar"
        $("input[type=checkbox]").attr("disabled", true);
        for (let imagem of document.querySelectorAll('input[type=checkbox]:checked')) {
            imagem.checked = false; 
        }   
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


function nova_galeria_eliminada() {
    var arrayFicar = document.querySelectorAll('input[type=checkbox]:not(:checked)');
    var tabela = document.querySelector("#fotos-favoritas tbody");
    tabela.innerHTML = "";
    var x = 0;
    var i = 0;
    var arrayFotosRestantesFavoritos = [];
    var trElement;
    /* Cria tabela que vai conter as fotos que vão ficar no album */
    for (let input of arrayFicar ) {
            
        if(i%4 == 0 || x == 0){
            trElement = document.createElement('tr');
            trElement.setAttribute('id', `tr${x}`);
            x++;
        }

       
        let src = input.parentElement.children[1].children[0].getAttribute('src');
        arrayFotosRestantesFavoritos.push(src);
        let linha = document.createElement("td");
        linha.innerHTML = "<label class='option-item'>" +
                                "<input type='checkbox' class='checkbox'>" +
                                "<div class='option-inner'>" +
                                    "<img width='250px' height='155px' src='" + src + "'>" +
                                "</div>" +
                            "</label>";
        trElement.appendChild(linha);
        tabela.appendChild(trElement);
        i++;  
    }

    localStorage.setItem("fotosFavoritas", JSON.stringify(arrayFotosRestantesFavoritos));
    if ( document.querySelector("#fotos-favoritas tbody tr") == null) {
        document.getElementById("botao-eliminar").disabled = true;
        document.getElementById("botao-criar-galeria").disabled = true;
        document.getElementById("botao-adicionar").disabled = true;
        document.getElementById("botao-selecionar-galeria").disabled = true;
        document.getElementById("botao-selecionar-todas-galeria").disabled = true;
    }
    
    

    document.getElementsByClassName("dimmer")[0].style.opacity="0"  
    
    
    close_popup_eliminar_fotografias()
}   



function getFavoritos() {
    if (localStorage.getItem("fotosFavoritas") != null ) {
        var arrayImagensFavoritas = JSON.parse(localStorage.getItem("fotosFavoritas"));
        var tabela = document.querySelector("#fotos-favoritas tbody");
        tabela.innerHTML = "";
        var x = 0;
        var i = 0;
        var trElement;
        /* Cria tabela que vai conter as fotos que vão ficar no album */
        for (let srcFoto of arrayImagensFavoritas) {
            if(i%4 == 0 || x == 0){
                trElement = document.createElement('tr');
                trElement.setAttribute('id', `tr${x}`);
                x++;
            }
    
            let linha = document.createElement("td");
            linha.innerHTML = "<label class='option-item'>" +
                                    "<input type='checkbox' class='checkbox'>" +
                                    "<div class='option-inner'>" +
                                        "<img width='250px' height='155px' src='" + srcFoto + "'>" +
                                    "</div>" +
                                "</label>";
            trElement.appendChild(linha);
            tabela.appendChild(trElement);
            i++; 
    
            
             
        }


    }
    
   
}  


function open_dropup() {
    if (document.getElementsByClassName("dropup-content")[0].style.display == "none") {
      document.getElementsByClassName("dropup-content")[0].style.display = "block";
      $('.dropup-content').fadeIn(1000);
    } else {
      document.getElementsByClassName("dropup-content")[0].style.display = "none";
      $('.dropup-content').fadeOut(1000);
    }
    
  }