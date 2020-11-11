//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(show_album());
$(document).ready(show_albumPhoto());
$(document).ready(albumNameHandler());

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
        for (var clicked of document.querySelectorAll(
            'input[type=checkbox]:checked'
        )) {
            ids.push(
                clicked.parentElement
                    .querySelector('div')
                    .children[0].getAttribute('image-id')
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
    let filtrosDesejados = []
    var checkbox1 = document.getElementById("desfocadas").checked; //variavel tem o valor de true ou false consoante esteja selecionada ou nao
    var checkbox2 = document.getElementById("localização").checked;
    var checkbox3 = document.getElementById("qualidade").checked;
    var checkbox4 = document.getElementById("praia").checked;
    var checkbox5 = document.getElementById("dia").checked;

    document.getElementsByClassName("popupFiltrosAplicados")[0].style.display = "block"
    $('.popupFiltrosAplicados').fadeOut(7000);

    //amanha tenho de ver istro melhor ja que as variaveis so ficam definidas por uma fracao de tempo ja que depois de o botao de submit ser clicado deixam de estar definidas
    //e rever no caso de retirar filtros que ja selecionou anteriormente
    if(checkbox1 == "true"){
        filtrosDesejados.push("desfocadas")
    }
        if(checkbox2 == "true"){
            filtrosDesejados.push("localização")
    }
            if(checkbox3 == "true"){
               filtrosDesejados.push("qualidade")
    }
                if(checkbox4 == "true"){
                    filtrosDesejados.push("praia")
    }
                    if(checkbox5 == "true"){
                        filtrosDesejados.push("dia")
    }

    //for(pos = 0, pos > filtrosDesejados.length(), pos++){
        //filtrosDesejados[pos]    filtro a aplicar a comprara com id das imgs
    //}
    
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