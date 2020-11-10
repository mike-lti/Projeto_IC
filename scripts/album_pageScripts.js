//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(show_album());
$(document).ready(show_albumPhoto());
$(document).ready(albumNameHandler());

function showModal() {
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
    document.getElementsByClassName("album_modal")[0].style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
    document.getElementById("popup-sem-fotos").style.display = "none";
}

function openAlbumPhotos() {
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
    document.getElementById("opcoes-album").style.display = "block";
    var arrayElementosParaFicar =  [];
    var elements = document.querySelectorAll('table#fotos-album tbody tr td');
    var ids = JSON.parse(localStorage.getItem("ids"));
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
    for(var i = 0; i < arrayElementosParaFicar.length; i++){
       if(i%4 == 0 || x == 0){
            trElement = document.createElement('tr');
			trElement.setAttribute('id', `tr${x}`);
            x++;
       }
       trElement.appendChild(arrayElementosParaFicar[i]);
       tabela.appendChild(trElement);

    }

    
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

function imagePlacerCorfirm() {
    if (localStorage.getItem('selectedFile') == 'Cuba') {
        let ids = [];
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
        document.getElementsByClassName('grid-item')[0].style.display =
            'block';
        document.getElementById('popUpTabela1').style.display = 'none';
        document.getElementById('seleciona-fotos-album').style.display =
            'none';
        document.getElementsByClassName('dimmer')[0].style.opacity = '0';
        document.getElementsByClassName('popupAlbum')[0].style.display =
            'block';
        $('.popupAlbum').fadeOut(7000);
    }

    localStorage.setItem('album-criado', 'true');

    document.getElementById("imagem-album").src = document.getElementById(JSON.parse(localStorage.getItem("ids"))[0]).src; 
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