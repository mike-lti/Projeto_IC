//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";
var tabelaOrigin = document.querySelector("#tabela-cuba tbody");

$(document).ready(showCapaAlbum());
$(document).ready(showNomeAlbum());
//$(document).ready(aplica_filtros());

function abreNomeAlbum() {
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

    document.getElementsByClassName('grid-item')[0].style.display ='block';
    document.getElementById('popUpTabela1').style.display = 'none';
    document.getElementById('seleciona-fotos-album').style.display ='none';
    document.getElementsByClassName('dimmer')[0].style.opacity = '0';
    document.getElementsByClassName('popupAlbum')[0].style.display ='block';
    $('.popupAlbum').fadeOut(7000);

    localStorage.setItem('album-criado', 'true');

    document.getElementById("imagem-album").src = localStorage.getItem("capa_album");
}

function closeCriaAlbum() {
    document.getElementById("popUpTabela1").style.display = "none";
    document.getElementById("seleciona-fotos-album").style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
    tiraFiltros();
}

function openAlbumPhotos() {
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
    document.getElementById("opcoes-album").style.display = "block";
   
    /* Coloca a primeira foto escolhida para ser a capa do album */
    document.getElementById("imagem-album").src = localStorage.getItem("capa_album");
    document.getElementById("fundo-fotos-album").style.display = "block";
}

function closeAlbumPhotos() {
    document.getElementById("opcoes-album").style.display = "none";
    document.getElementById("fundo-fotos-album").style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
}

function showCapaAlbum() {

    if (localStorage.getItem("album-criado")) {
        document.getElementsByClassName("grid-item")[0].style.display = "block";
        document.getElementById("imagem-album").src = localStorage.getItem("capa_album"); 
    } else {
        document.getElementsByClassName("grid-item")[0].style.display = "none";
    }
}

function closePopupAlbumCriado() {
    document.getElementsByClassName("popupAlbum")[0].style.display = "none";

}

function openFiltros() {
    document.getElementById("imagem_filtros").src = "images/filtros_icon1.png";
    document.getElementById("popup-filtros").style.display = "block";

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

    document.getElementsByClassName("popupFiltrosAplicados")[0].style.display = "block"
    $('.popupFiltrosAplicados').fadeOut(7000);
}

function closePopupFiltrosAplicados(){
    document.getElementsByClassName("popupFiltrosAplicados")[0].style.display = "none"

}

function showNomeAlbum(){
    document.getElementById("nome-album").innerHTML= localStorage.getItem("nomeAlbum")

    if (localStorage.getItem("imagensImportadas") != null) {
        document.getElementById("fotos-album").style.display = "block";
    } else {
        document.getElementById("fotos-album").style.display = "none";
    }
}

function nomeAlbumDado(){
    let ff = document.forms.nomeDoAlbum;

    preencheTabelaAlbum()
    localStorage.setItem("nomeAlbum", ff.elements.aName.value)
    document.getElementById("nome-album").innerHTML= localStorage.getItem("nomeAlbum")
    document.getElementById("popUpTabela1").style.display = "block";
    document.getElementById("seleciona-fotos-album").style.display = "block";
    document.getElementsByClassName("album_modal")[0].style.display = "none";
    
}

function preencheTabelaAlbum() {    
    if (JSON.parse(localStorage.getItem("imagensImportadas"))) {
        var tabela = document.querySelector("#tabela-album tbody");
        tabela.innerHTML = "";
        let arrayImagens = JSON.parse(localStorage.getItem("imagensImportadas"));
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
                                    "<input type='checkbox' class='checkbox-album'>" +
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


function preencheTabelaAlbumCriado() {
    var arrayImagensGuardadas = document.querySelectorAll('input[type=checkbox]:checked');
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

        let src = input.parentElement.children[1].children[0].getAttribute('src');
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
        localStorage.setItem("capa_album", src);

         
    }
    
    document.getElementsByClassName("dimmer")[0].style.opacity="0"; 
   
}   

function disableBackground() {
    $("#side-bar").addClass("disabled")
    $("#memento-top-left").addClass("disabled")
}

function enableBackground() {
    $("#side-bar").removeClass("disabled")
    $("#memento-top-left").removeClass("disabled")
}


/* function preencheTabelaAlbunsTodos() {    
    var tabela = document.querySelector("#tabela-album-criados tbody");
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
            linha.innerHTML = "<label class='option-item-album'>" +
                                "<input type='checkbox' class='checkbox-album'>" +
                                "<div class='option-inner-album'>" +
                                    "<img width='220px' height='140px' src='" + imagens + "'>" +
                                "</div>" +
                            "</label>";
            trElement.appendChild(linha);
            tabela.appendChild(trElement);
            i++;

            }
        }


    document.getElementsByClassName("dimmer")[0].style.opacity="0";    
} */