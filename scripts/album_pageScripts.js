//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(show_album());
$(document).ready(show_albumPhoto());
$(document).ready(albumNameHandler());
$(document).ready(aplica_filtros());

var tabelaOriginal;

function showModal() {
    disableBackground()
    document.getElementsByClassName("album_modal")[0].style.display = "inline-block";
    document.getElementsByClassName("album_modal")[0].style.zIndex = "9";
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
    if (localStorage.getItem("selectedFile") == "Cuba") {
        document.getElementById("botao-confirmar").disabled = false;
        document.getElementById("popup-sem-fotos").style.display = "none";
    } else {
        document.getElementById("botao-confirmar").disabled = true;
        document.getElementById("popup-sem-fotos").style.display = "block";
    }
}

function closeModal() {
    enableBackground()
    document.getElementsByClassName("album_modal")[0].style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
    document.getElementById("popup-sem-fotos").style.display = "none";
}

function imagePlacerConfirm() {
    enableBackground()
    if (localStorage.getItem('selectedFile') == 'Cuba') {
        let ids = [];
        /* Itera sobre todas as images que foram escolhidas e guarda os ids das mesmas */
        for (var clicked of document.querySelectorAll('#tabela-cuba input[type=checkbox]:checked')) {
            console.log(clicked.parentElement.children[1].children[0])            
            ids.push(        
                clicked.parentElement.children[1].children[0].getAttribute('image-id')
            );

        }

        localStorage.setItem("ids",JSON.stringify(ids));
        document.getElementsByClassName('grid-item')[0].style.display ='block';
        document.getElementById('popUpTabela1').style.display = 'none';
        document.getElementById('seleciona-fotos-album').style.display ='none';
        document.getElementsByClassName('dimmer')[0].style.opacity = '0';
        document.getElementsByClassName('popupAlbum')[0].style.display ='block';
        $('.popupAlbum').fadeOut(7000);
    }

    localStorage.setItem('album-criado', 'true');

    document.getElementById("imagem-album").src = document.getElementById(JSON.parse(localStorage.getItem("ids"))[0]).src; 
    tira_filtros();
}

function openAlbumPhotos() {
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
    document.getElementById("opcoes-album").style.display = "block";
    var arrayElementosParaFicar =  [];
    var elements = document.querySelectorAll('table#fotos-album tbody tr td');
    var ids = JSON.parse(localStorage.getItem("ids"));

    /* Itera sobre as fotos à procura de img com o mesmo id das fotos escolhidas */
    for (var element of elements) {
        for(var i = 0; i < ids.length; i++){
			if (element.children[0].getAttribute('id') == ids[i]){
                arrayElementosParaFicar.push(element);
            }
		}
    }

    var tabela = document.querySelector("table#fotos-album tbody");
    tabela.innerHTML = "";
    var x = 0;
    var trElement;
    /* Cria tabela que vai conter as fotos que vão ficar no album */
    for(var i = 0; i < arrayElementosParaFicar.length; i++){
       if(i%4 == 0 || x == 0){
            trElement = document.createElement('tr');
			trElement.setAttribute('id', `tr${x}`);
            x++;
       }
       trElement.appendChild(arrayElementosParaFicar[i]);
       tabela.appendChild(trElement);

    }

    /* Coloca a primeira foto escolhida para ser a capa do album */
    document.getElementById("imagem-album").src = document.getElementById(JSON.parse(localStorage.getItem("ids"))[0]).src;    
    document.getElementById("fundo-fotos-album").style.display = "block";
}

function closeAlbumPhotos() {
    document.getElementById("opcoes-album").style.display = "none";
    document.getElementById("fundo-fotos-album").style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
}

function popUpTabela1Close() {
    document.getElementById("popUpTabela1").style.display = "none";
    document.getElementById("seleciona-fotos-album").style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
    tira_filtros();

}

function show_album() {

    if (localStorage.getItem("album-criado")) {
        document.getElementsByClassName("grid-item")[0].style.display = "block";
    } else {
        document.getElementsByClassName("grid-item")[0].style.display = "none";
    }
}

function closePopup() {
    document.getElementsByClassName("popupAlbum")[0].style.display = "none";

}

function show_albumPhoto() {
    if (localStorage.getItem("album-criado")) {
        document.getElementById("imagem-album").src = document.getElementById(JSON.parse(localStorage.getItem("ids"))[0]).src;
    }
}

function open_filtros() {
    document.getElementById("imagem_filtros").src = "images/filtros_icon1.png";
    document.getElementById("popup-filtros").style.display = "block";

}

function tira_filtros() {
    document.getElementById("imagem_filtros").src = "images/filtros_icon.png";
    document.getElementById("popup-filtros").style.display = "none";
}

function aplica_filtros() {
    var tabelaOriginal = $("#tabela-cuba tbody").children();
    console.log(tabelaOriginal)
    let imagensFiltradas = []  
    let filtrosDesejados = [] 
    var images = document.querySelectorAll("#tabela-cuba td")
    console.log(images)
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
                    for(let img = 0; img < images.length; img++) {
                        let imageToCheck = images[img].querySelector("img").getAttribute("praia");
                        console.log(imageToCheck)
                        if(imageToCheck == "true"){
                            imagensFiltradas.push(images[img]);
                        }
                    }                       
                }
                    if(localStorage.getItem("dia") == "true"){
                        filtrosDesejados.push("dia")
                        for(let img = 0; img < images.length; img++) {
                            let imageToCheck = images[img].querySelector("img").getAttribute("dia");
                            if(imageToCheck == "true"){
                                imagensFiltradas.push(images[img])
                            }
                        }
                    }


    console.log(filtrosDesejados)

    if(filtrosDesejados.length != 0) {
        var tabela = document.querySelector("#tabela-cuba tbody");
        tabela.innerHTML=" ";   
        var x = 0
        var trElement;
        for(var i = 0; i < imagensFiltradas.length; i++){
            if(i % 4 == 0 || x == 0){
                trElement = document.createElement('tr');
                trElement.setAttribute('id', "tr${x}");
                x++
            }
            trElement.appendChild(imagensFiltradas[i]);
            tabela.appendChild(trElement);
        }
    }else{
        /* var tabela = document.querySelector("#tabela-cuba tbody");
        tabela.appendChild(tabelaOriginal); */ 
        
    }
  
    
    

    document.getElementsByClassName("popupFiltrosAplicados")[0].style.display = "block"
    $('.popupFiltrosAplicados').fadeOut(7000);
}

function closePopupFiltrosAplicados(){
    document.getElementsByClassName("popupFiltrosAplicados")[0].style.display = "none"

}

function albumNameHandler(){
    document.getElementById("nome-album").innerHTML= localStorage.getItem("nomeAlbum")

    if (localStorage.getItem("selectedFile") == "Cuba") {
        document.getElementById("tabela1").style.display = "block";
        document.getElementById("popup-sem-fotos").style.display = "none";
    } else {
        document.getElementById("tabela1").style.display = "none";
    }
}

function newAlbumHandler(){
    let ff = document.forms.nomeDoAlbum;
    localStorage.setItem("nomeAlbum", ff.elements.aName.value)
    document.getElementById("nome-album").innerHTML= localStorage.getItem("nomeAlbum")

    document.getElementById("popUpTabela1").style.display = "block";
    document.getElementById("seleciona-fotos-album").style.display = "block";
    document.getElementsByClassName("album_modal")[0].style.display = "none";
}

function disableBackground() {
    $("#side-bar").addClass("disabled")
    $("#memento-top-left").addClass("disabled")
}

function enableBackground() {
    $("#side-bar").removeClass("disabled")
    $("#memento-top-left").removeClass("disabled")
}