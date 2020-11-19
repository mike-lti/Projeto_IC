//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";
var tabelaOrigin = document.querySelector("#tabela-cuba tbody");

$(document).ready(showNomeAlbum());
$(document).ready(mostraCapaAlbunsWorkspace());
//$(document).ready(aplica_filtros());

$("#right-top-right-bar button img").addClass("disabled-image-button")
document.getElementById("botao-eliminar").disabled = true;    
document.getElementById("botao-adicionar").disabled = true;
document.getElementById("href-partilhar").disabled = true;

function abreNomeAlbum() {
    $('input[type=checkbox]').prop('checked', false);
    disableBackground()
    document.getElementsByClassName("album_modal")[0].style.display = "inline-block";
    document.getElementsByClassName("album_modal")[0].style.zIndex = "9";
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
    if (localStorage.getItem("imagensImportadas") != null) {
        document.getElementById("botao-confirmar").disabled = false;
        document.getElementById("popup-sem-fotos").style.display = "none";
    } else {
        document.getElementById("botao-confirmar").disabled = true;
        document.getElementById("popup-sem-fotos").style.display = "block";
    }
}

function closeNomeAlbum() {
    enableBackground()
    document.getElementsByClassName("album_modal")[0].style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
    document.getElementById("popup-sem-fotos").style.display = "none";
}

function albumCriado() {
    enableBackground()
    document.getElementsByClassName('popup-partilha')[0].style.display ='none';
    document.getElementsByClassName('dimmer')[0].style.opacity = '0';
    document.getElementsByClassName('popupAlbum')[0].style.display ='block';
    document.getElementsByClassName('popup-partilha')[0].style.display ='none';
    $('.popupAlbum').fadeOut(7000);

    localStorage.setItem('album-criado', 'true');

}

function closeCriaAlbum() {
    document.getElementsByClassName('popup-album')[0].style.display ='none';
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
    enableBackground()
    tiraFiltros();
}

function openAlbumPhotos() {
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
    document.getElementById("opcoes-album").style.display = "block";
   
    /* Coloca a primeira foto escolhida para ser a capa do album */
    document.getElementById("fundo-fotos-album").style.display = "block";
}

function closeAlbumPhotos() {
    document.getElementById("opcoes-album").style.display = "none";
    document.getElementById("fundo-fotos-album").style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
}

function closePopupAlbumCriado() {
    document.getElementsByClassName("popupAlbum")[0].style.display = "none";

}

function openFiltros() {
    document.getElementById("imagem_filtros").src = "images/filtros_icon1.png";
    if ( document.getElementById("popup-filtros").style.display == "block" ) {
        document.getElementById("popup-filtros").style.display = "none";
        document.getElementById("imagem_filtros").src = "images/filtros_icon.png";
    } else {
        document.getElementById("popup-filtros").style.display = "block";
    }

}

function tiraFiltros() {
    document.getElementById("imagem_filtros").src = "images/filtros_icon.png";
    document.getElementById("popup-filtros").style.display = "none";
}

function aplica_filtros() {

    let imagensFiltradas = []  
    let filtrosDesejados = [] 
    var listFiltrosToParse = localStorage.getItem("imagensFiltros")
    var listFiltrosImgs = JSON.parse(listFiltrosToParse);
    //variavel tem o valor de true ou false consoante esteja selecionada ou nao
    var checkboxDesfocadas = document.getElementById("desfocadas").checked; 
    var checkboxLocalização = document.getElementById("localização").checked;
    var checkboxQualidade = document.getElementById("qualidade").checked;
    var checkboxPraia = document.getElementById("praia").checked;
    var checkboxDia = document.getElementById("dia").checked;

    localStorage.setItem("desfocadas", checkboxDesfocadas)
    localStorage.setItem("localização", checkboxLocalização)
    localStorage.setItem("qualidade", checkboxQualidade)
    localStorage.setItem("praia", checkboxPraia)
    localStorage.setItem("dia", checkboxDia)

    if(localStorage.getItem("desfocadas") == "true"){    
        filtrosDesejados.push("desfocada")
    }
        if(localStorage.getItem("localização") == "true"){
            filtrosDesejados.push("localização")
        }
            if(localStorage.getItem("qualidade") == "true"){
               filtrosDesejados.push("qualidade")
            }
                if(localStorage.getItem("praia") == "true"){
                    filtrosDesejados.push("praia")
                    for(let img = 0; img < listFiltrosImgs.length; img++) {
                        let imageToCheck = listFiltrosImgs[img]["praia"];
                        if(imageToCheck == "true"){
                            imagensFiltradas.push(listFiltrosImgs[img]);
                        }
                    }                       
                }
                    if(localStorage.getItem("dia") == "true"){
                        filtrosDesejados.push("dia")
                        for(let img = 0; img < listFiltrosImgs.length; img++) {
                            let imageToCheck = listFiltrosImgs[img]["dia"];
                            if(imageToCheck == "true"){
                                imagensFiltradas.push(listFiltrosImgs[img])
                            }
                        }
                    }

    if(filtrosDesejados.length != 0) {
        var tabela = document.querySelector("#tabela-album tbody");
        tabela.innerHTML=" ";   
        var x = 0
        var trElement;
        for(var i = 0; i < imagensFiltradas.length; i++){
            if(i % 4 == 0 || x == 0){
                trElement = document.createElement('tr');
                trElement.setAttribute('id', "tr${x}");
                x++
            }

            let srcImg = imagensFiltradas[i]["imgSrcObj"]; 
            let linha = document.createElement("td");
            linha.innerHTML = "<label class='option-item-album'>" +
                                "<input type='checkbox' class='checkbox-album'>" +
                                "<div class='option-inner-album'>" +
                                    "<img width='220px' height='140px' src='" + srcImg + "'>" +
                                "</div>" +
                            "</label>";
                       
            trElement.appendChild(linha);
            tabela.appendChild(trElement);
        }
    }else{
        var tabela = document.querySelector("#tabela-album tbody");
        tabela.innerHTML=" ";   
        var x = 0
        var trElement;
        for(var i = 0; i < listFiltrosImgs.length; i++){
            if(i % 4 == 0 || x == 0){
                trElement = document.createElement('tr');
                trElement.setAttribute('id', "tr${x}");
                x++
            }

            let srcImg = listFiltrosImgs[i]["imgSrcObj"]; 
            let linha = document.createElement("td");
            linha.innerHTML = "<label class='option-item-album'>" +
                                "<input type='checkbox' class='checkbox-album'>" +
                                "<div class='option-inner-album'>" +
                                    "<img width='220px' height='140px' src='" + srcImg + "'>" +
                                "</div>" +
                            "</label>";
                       
            trElement.appendChild(linha);
            tabela.appendChild(trElement)
        }
        
    }
    checkboxDesfocadas = document.getElementById("desfocadas").checked = false;
    checkboxLocalização = document.getElementById("localização").checked = false;
    checkboxQualidade = document.getElementById("qualidade").checked = false;
    checkboxPraia = document.getElementById("praia").checked = false;
    checkboxDia = document.getElementById("dia").checked = false;
    document.getElementById("imagem_filtros").src = "images/filtros_icon.png";
    document.getElementsByClassName("popupFiltrosAplicados")[0].style.display = "block"
    document.getElementById("popup-filtros").style.display = "none" 
    $('.popupFiltrosAplicados').fadeOut(7000);
}

function closePopupFiltrosAplicados(){
    document.getElementsByClassName("popupFiltrosAplicados")[0].style.display = "none"

}

function showNomeAlbum(){

    if (localStorage.getItem("imagensImportadas") != null) {
        document.getElementById("fotos-album").style.display = "block";
    } else {
        document.getElementById("fotos-album").style.display = "none";
    }
}

function nomeAlbumDado(){
    let ff = document.forms.nomeDoAlbum;

    preencheTabelaAlbum()
    document.getElementsByClassName('popup-album')[0].style.display ='block';
    document.getElementsByClassName("album_modal")[0].style.display = "none";
    
}

function preencheTabelaAlbum() {    
    if (JSON.parse(localStorage.getItem("imagensImportadas"))) {
        var tabela = document.querySelector("#tabela-album tbody");
        let arrayImagens = JSON.parse(localStorage.getItem("imagensImportadas"));
        tabela.innerHTML = "";
        var x = 0;
        var i = 0;
        var trElement;        
        for (let imagens of arrayImagens) {
                if(i%4 == 0 || x == 0){
                    trElement = document.createElement('tr');
                    trElement.setAttribute('id', `tr${x}`);
                    x++;
                }

                let linha = document.createElement("td");
                linha.innerHTML = "<label class='option-item-album'>" +
                                    "<input type='checkbox' onclick='imagem_selecionada()' class='checkbox-album'>" +
                                    "<div class='option-inner-album'>" +
                                        "<img width='220px' height='140px' src='" + imagens + "'>" +
                                    "</div>" +
                                "</label>";
                trElement.appendChild(linha);
                tabela.appendChild(trElement);
                i++;

                }

        document.getElementsByClassName("dimmer")[0].style.opacity="0"
  
    }
}


/* aqui cria cada album */
function preencheTabelaAlbumCriado() {
    var arrayImagensGuardadas = document.querySelectorAll('input[type=checkbox]:checked'); 
    var tabela = document.querySelector("#fotos-album tbody");
    tabela.innerHTML = "";
    var x = 0;
    var i = 0;
    var trElement;
    var arrayFotos;
    var arrayImagensAlbuns = [];

    if ( JSON.parse(localStorage.getItem("arrayImagensDiferentesAlbuns")) == null) {
        arrayFotos = [];
    } else {
        arrayFotos = JSON.parse(localStorage.getItem("arrayImagensDiferentesAlbuns"))
    }

    /* Cria tabela que vai conter as fotos que vão ficar no album */
    for (let input of arrayImagensGuardadas) {
            
        if(i%4 == 0 || x == 0){
            trElement = document.createElement('tr');
            trElement.setAttribute('id', `tr${x}`);
            x++;
        }
        let src = input.parentElement.children[1].children[0].getAttribute('src');
        arrayImagensAlbuns.push(src);
        
        let linha = document.createElement("td");
        linha.innerHTML = "<label class='option-item-album'>" +
                                "<input type='checkbox' class='checkbox-album'>" +
                                "<div class='option-inner-album'>" +
                                    "<img width='220px' height='140px' src='" + src + "'>" +
                                "</div>" +
                            "</label>";
        trElement.appendChild(linha);
        tabela.appendChild(trElement);
        i++; 

         
    }
    arrayFotos.push(arrayImagensAlbuns);
    localStorage.setItem("arrayImagensDiferentesAlbuns", JSON.stringify(arrayFotos));
    enableBackground()
    document.getElementsByClassName('popup-album')[0].style.display ='none';
    document.getElementsByClassName('dimmer')[0].style.opacity = '0';
    document.getElementsByClassName('popupAlbum')[0].style.display ='block';
    $('.popupAlbum').fadeOut(7000);
    mostraCapaAlbunsWorkspace();
   
}  

/* Aqui mostra o album selecionado no workspace */
function mostraAlbumSelecionado(indice) {
    var arrayImagensGuardadas = JSON.parse(localStorage.getItem("arrayImagensDiferentesAlbuns"))[indice]; 
    var tabela = document.querySelector("#fotos-album tbody");
    tabela.innerHTML = "";
    var x = 0;
    var i = 0;
    var trElement;
    /* Cria tabela que vai conter as fotos que vão ficar no album */
    for (let input of arrayImagensGuardadas) {
            
        if(i%4 == 0 || x == 0){
            trElement = document.createElement('tr');
            trElement.setAttribute('id', `tr${x}`);
            x++;
        }
        
        let linha = document.createElement("td");
        linha.innerHTML = "<label class='option-item-album'>" +
                                "<input type='checkbox' class='checkbox-album'>" +
                                "<div class='option-inner-album'>" +
                                    "<img width='220px' height='140px' src='" + input + "'>" +
                                "</div>" +
                            "</label>";
        trElement.appendChild(linha);
        tabela.appendChild(trElement);
        i++; 

         
    }
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
    document.getElementById("opcoes-album").style.display = "block";
    document.getElementById("fundo-fotos-album").style.display = "block"; 
   
}   

function mostraCapaAlbunsWorkspace() {  

    if (localStorage.getItem("arrayImagensDiferentesAlbuns") != null ) {
        
        document.getElementById("botao-selecionar-album").disabled = false;
        document.getElementById("botao-selecionar-todos-album").disabled = false;
        document.getElementById("botao-adicionar").disabled = false;
        document.getElementById("botao-eliminar").disabled = false;
        document.getElementById("botao-partilhar").disabled = false;
        var arrayImagensDiferentesAlbuns = JSON.parse(localStorage.getItem("arrayImagensDiferentesAlbuns"));  
        var tabela = document.querySelector("#disposicao-albuns-tabela tbody");
        tabela.innerHTML = "";
        var x = 0;
        var i = 0;
        let ff = document.forms.nomeDoAlbum;
        var trElement;
        var contador = 0;
        for (let imagens of arrayImagensDiferentesAlbuns) {
                if(i%4 == 0 || x == 0){
                    trElement = document.createElement('tr');
                    trElement.setAttribute('id', `tr${x}`);
                    x++;
                }
                let linha = document.createElement("td");
                linha.innerHTML = "<label class='option-item'>" +
                                    "<input type='checkbox' class='checkbox'>" +
                                    "<div class='option-inner' onclick='mostraAlbumSelecionado(" + contador + ")'>" +
                                        "<img width='250px' height='155px' src='" + imagens[0] + "'>" +
                                        ff.elements.aName.value +
                                    "</div>" +
                                "</label>";
                trElement.appendChild(linha);
                tabela.appendChild(trElement);
                i++;
                contador++;

                }
        
        document.getElementsByClassName("dimmer")[0].style.opacity="0"
        document.getElementsByClassName('popup-album')[0].style.display ='none';
    } else {
        document.getElementById("botao-selecionar-album").disabled = true;
        document.getElementById("botao-selecionar-todos-album").disabled = true;
        document.getElementById("botao-adicionar").disabled = true;
        document.getElementById("botao-eliminar").disabled = true;
        document.getElementById("botao-partilhar").disabled = true;
    }

    if (localStorage.getItem("imagensImportadas") != null) {
        document.getElementById("botao-criar-album").disabled = false;
    } else {
        document.getElementById("botao-criar-album").disabled = true;
    }
    
}


function disableBackground() {
    $("#side-bar").addClass("disabled");
    $("#memento-top-left").addClass("disabled");
    $("#right-top-right-bar").addClass("disabled");
    $("#left-top-right-bar").addClass("disabled");
}

function enableBackground() {
    $("#side-bar").removeClass("disabled");
    $("#memento-top-left").removeClass("disabled");
    $("#right-top-right-bar").removeClass("disabled");
    $("#left-top-right-bar").removeClass("disabled");
}

function enable_galeria() {

    if ( document.getElementById("botao-selecionar-album").innerHTML == "Selecionar") {
        document.getElementById("botao-selecionar-album").innerHTML = "Cancelar"
        $("input[type=checkbox]").attr("disabled", false);
        document.getElementById("href-partilhar").href = "partilhar.html";
        document.getElementById("botao-criar-album").disabled = true;
        

    } else {
        document.getElementById("botao-selecionar-album").innerHTML = "Selecionar"
        $("input[type=checkbox]").attr("disabled", true);
        document.getElementById("botao-criar-album").disabled = false;
        document.getElementById("botao-adicionar").disabled = true;
        document.getElementById("botao-eliminar").disabled = true;
        document.getElementById("botao-partilhar").disabled = true;
        document.getElementById("href-partilhar").disabled = true;
        document.getElementById("href-partilhar").href = ""; 
        $("#right-top-right-bar button img").addClass("disabled-image-button");
        

        for (let imagem of document.querySelectorAll('input[type=checkbox]:checked')) {
            imagem.checked = false; 
        }   
    }
}   

function imagem_selecionada() {
    
    if (document.querySelectorAll('input[type=checkbox]:checked').length > 0) {
        $("#right-top-right-bar button img").removeClass("disabled-image-button");
        document.getElementById("botao-criar-album").disabled = false;
        document.getElementById("botao-adicionar").disabled = false;
        document.getElementById("botao-eliminar").disabled = false;
        document.getElementById("botao-partilhar").disabled = false;
        document.getElementById("href-partilhar").disabled = false;
        document.getElementById("href-partilhar").href = "partilhar.html";
    } else {
        $("#right-top-right-bar button img").addClass("disabled-image-button");
        document.getElementById("botao-eliminar").disabled = true;    
        document.getElementById("botao-criar-album").disabled = true;
        document.getElementById("botao-adicionar").disabled = true;
        document.getElementById("href-partilhar").disabled = true;
        document.getElementById("href-partilhar").href = "";
    }
}  

var elementos = document.querySelectorAll('input[type=checkbox]');
for (let element of elementos) {
    element.addEventListener("change", imagem_selecionada);
}

function selecionaTodos(input) {
    
    if (input == "album") {
        var boxes = document.getElementsByClassName("checkbox");
    } else {
        var boxes = document.getElementsByClassName("checkbox-album");
    }
    
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
        }
    }
}





/* if (document.querySelectorAll('input[type=checkbox]:checked').length > 0) {
    document.getElementById("botao-confirmar-selecao").disabled = false;
} else {
    document.getElementById("botao-confirmar-selecao").disabled = true;
} */