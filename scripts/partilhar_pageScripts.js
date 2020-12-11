//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";
var utilizador = localStorage.getItem("currentAccount").slice(1,localStorage.getItem("currentAccount").length -1);
$(document).ready(preencheTabelaImagensPartilhar());
$(document).ready(currentAccPlacer());
$(document).ready(popupAlbum());

document.getElementById("botao-confirmar-partilha").disabled = true;

function currentAccPlacer() {
    var usernameLoggedInToParse = localStorage.getItem("currentAccount");
    var usernameLoggedIn = JSON.parse(usernameLoggedInToParse);
    document.getElementById("usernameCurrentAccount").innerHTML = usernameLoggedIn;
}

function open_popup_link(){
    
    document.getElementsByClassName("dimmer")[0].style.opacity="1";
    document.getElementsByClassName("popup-link")[0].style.display="block";
}

function linkGenerate(){
    document.getElementsByClassName("dimmer")[0].style.opacity="1";
    localStorage.removeItem("fotosPartilhar" + utilizador);
    let randomNumber = Math.floor(Math.random() * 100000001);
    let tempLink = "https://memento_" + randomNumber + ".com";
    document.getElementById("link-gerado").innerHTML = tempLink;
    document.getElementsByClassName("popup-partilha")[0].style.display="none";
    document.getElementsByClassName("popup-link")[0].style.display="block";
}

function copiar(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    document.getElementById("link-copiado").style.display = "block";
    $('#link-copiado').fadeOut(2000);
}

function closePopup(popup) {
    document.getElementsByClassName("dimmer")[0].style.opacity="0";
    document.getElementsByClassName(popup)[0].style.display = "none"
    enableBackground();
}

function popup_partilha_efetuada() {
    localStorage.removeItem("fotosPartilhar" + utilizador);
    localStorage.removeItem("fotosFavoritosPartilhar" + utilizador);
    localStorage.removeItem("albunsPartilhar" + utilizador);
    document.getElementsByClassName("dimmer")[0].style.opacity="0";
    document.getElementsByClassName("popup")[0].style.display = "block"
    document.getElementsByClassName("popup-partilha")[0].style.display="none";
    popupAlbum();
    $('.popup').fadeOut(7000);
    enableBackground();
}

function open_icon_partilha(icon) {
       
    disableBackground();
    document.getElementById("texto-seleciona").innerHTML = "Selecione as fotografias que deseja partilhar:";
    document.getElementsByClassName("popup-partilha")[0].style.display="block";
    preencheTabelaImagensPartilhar();
    document.getElementById("botao-confirmar-partilha").disabled = true;

    if (localStorage.getItem("fotosPartilhar" + utilizador) || localStorage.getItem("fotosFavoritosPartilhar" + utilizador) || localStorage.getItem("albunsFotografiasPartilhar" + utilizador)) {
        document.getElementById("texto-seleciona").innerHTML = "As fotos selecionadas para partilhar:";
        document.getElementById("botao-trocar-tipo").style.display = "none";  
        preencheTabelaImagensPartilhar();    
        $("input[type=checkbox]").attr("disabled", true);
        document.getElementById("botao-confirmar-partilha").disabled = false;
        if (localStorage.getItem("fotosPartilhar" + utilizador)) {
            var numeroFotos = JSON.parse(localStorage.getItem("fotosPartilhar" + utilizador)).length;
        } else if (localStorage.getItem("fotosFavoritosPartilhar" + utilizador)) {
            var numeroFotos = JSON.parse(localStorage.getItem("fotosFavoritosPartilhar" + utilizador)).length;
        } else {
            var numeroFotos = JSON.parse(localStorage.getItem("albunsFotografiasPartilhar" + utilizador)).length;
        }
        
        if (numeroFotos > 1) {
            document.getElementById("mensagem-sucesso-partilha").innerHTML = numeroFotos + " fotografias partilhadas com sucesso";
        } else {
            document.getElementById("mensagem-sucesso-partilha").innerHTML = "Fotografia partilhada com sucesso";
        }

    } else if (localStorage.getItem("albunsPartilhar" + utilizador) != ""){

        document.getElementById("botao-trocar-tipo").style.display = "none";  
        preencheTabelaAlbumPartilhar();
        document.getElementById("texto-seleciona").innerHTML = "Os álbuns selecionados para partilhar:";
        $("input[type=checkbox]").attr("disabled", true);
        document.getElementById("botao-confirmar-partilha").disabled = false;
        var numeroAlbuns = JSON.parse(localStorage.getItem("albunsPartilhar" + utilizador)).length
        if (numeroAlbuns> 1) {
            document.getElementById("mensagem-sucesso-partilha").innerHTML = numeroAlbuns + " álbuns partilhados com sucesso";
        } else {
            document.getElementById("mensagem-sucesso-partilha").innerHTML = "Álbum partilhado com sucesso";
        }
        
        localStorage.setItem("albunsPartilhar" + utilizador, "");
    }

    if(icon == "link") {
        document.getElementById("botao-gerar-link").style.display = "block";       
        document.getElementById("botao-confirmar-partilha").style.display = "none";
        document.getElementById("descricao").style.display = "none";
        document.getElementById("texto-descricao").style.display = "none";
    } else {
        document.getElementById("botao-confirmar-partilha").style.display = "block";
        document.getElementById("descricao").style.display = "block";
        document.getElementById("texto-descricao").style.display = "block";
        document.getElementById("botao-gerar-link").style.display = "none";
    }
    document.getElementsByClassName("dimmer")[0].style.opacity="1";
    document.getElementById("partilha-icon").src = "img_icon_partilhar/" + icon + ".png";

}

function verifica() {
   
    if (document.querySelectorAll('input[type=checkbox]:checked').length != 0) {
        document.getElementById("botao-confirmar-partilha").disabled = false;
    } else {
        document.getElementById("botao-confirmar-partilha").disabled = true;
    }
}

function preencheTabelaAlbumPartilhar() {
   
    if (document.getElementById("botao-trocar-tipo").innerHTML == "Álbuns") {

        document.getElementById("botao-trocar-tipo").innerHTML = "Fotografias"

        if (localStorage.getItem("arrayImagensDiferentesAlbuns" + utilizador) != null) {
            document.getElementById("texto-seleciona").innerHTML = "Selecione os álbuns que deseja partilhar:";
            document.getElementById("texto-seleciona").style.left = "320px";

            let imagensCapa = [];
            let arrayAlbum = JSON.parse(localStorage.getItem("arrayImagensDiferentesAlbuns" + utilizador));
            let nomesAlbum = JSON.parse(localStorage.getItem("nomesAlbums" + utilizador));
            let tabela = document.querySelector("#tabela-fotos-partilha tbody");

            tabela.innerHTML = "";

            for (let album of arrayAlbum) {
                let imgCapa = album[0];
                imagensCapa.push(imgCapa);
            }

            let x = 0;
            let i = 0;
            let trElement;
    
            for (let imagemCapa of imagensCapa) {
                    if(i%4 == 0 || x == 0){
                        trElement = document.createElement('tr');
                        x++;
                    }
    
                    let linha = document.createElement("td");
                    linha.innerHTML = "<label class='option-item-album'>" +
                                        "<input type='checkbox' class='checkbox-album' onclick='verifica()'>" +
                                        "<div class='option-inner-album' >" +
                                            "<img width='220px' height='140px' src='" + imagemCapa + "'>" +
                                            nomesAlbum[i] +
                                        "</div>" +
                                    "</label>";
                    trElement.appendChild(linha);
                    tabela.appendChild(trElement);
                    i++;
    
            }

        } else {
            document.getElementById("texto-seleciona").innerHTML = "Ainda não tem nenhum álbum. Crie um primeiro!";
        }
    } else { 
        document.getElementById("texto-seleciona").innerHTML = "Selecione as fotografias que deseja partilhar:";
        document.getElementById("botao-trocar-tipo").innerHTML = "Álbuns";
        preencheTabelaImagensPartilhar(); 
    }
}

function preencheTabelaImagensPartilhar() {

    if (localStorage.getItem("imagensImportadas" + utilizador) != null && localStorage.getItem("imagensImportadas" + utilizador) != "[]") {

        document.getElementById("bot_row_icons").style.opacity = 1;
        document.getElementById("top_row_icons").style.opacity = 1; 
        $("#top_row_icons").removeClass("disabled");
        $("#bot_row_icons").removeClass("disabled");
        document.getElementById("p-importar").innerHTML = "Escolha o local para onde pretende partilhar as suas fotografias:"; 

        if (localStorage.getItem("fotosPartilhar" + utilizador) != null) {
            document.getElementById("texto-seleciona").style.left = "320px";
            var arrayImagens = JSON.parse(localStorage.getItem("fotosPartilhar" + utilizador));
        } else if (localStorage.getItem("fotosFavoritosPartilhar" + utilizador) != null) {
            var arrayImagens = JSON.parse(localStorage.getItem("fotosFavoritosPartilhar" + utilizador));
        } else {
            var arrayImagens = JSON.parse(localStorage.getItem("imagensImportadas" + utilizador));
        }
        var tabela = document.querySelector("#tabela-fotos-partilha tbody");
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
                linha.innerHTML = "<label class='option-item-album'>" +
                                    "<input type='checkbox' class='checkbox-album' onclick='verifica()'>" +
                                    "<div class='option-inner-album'>" +
                                        "<img width='220px' height='140px' src='" + imagens + "'>" +
                                    "</div>" +
                                "</label>";
                trElement.appendChild(linha);
                tabela.appendChild(trElement);
                i++;

                }    
        
        } else {
            document.getElementById("p-importar").innerHTML = "Não tem nenhuma fotografia na sua galeria. Importe primeiro!";
            document.getElementById("bot_row_icons").style.opacity = 0.5;
            document.getElementById("top_row_icons").style.opacity = 0.5;
            $("#top_row_icons").addClass("disabled");
            $("#bot_row_icons").addClass("disabled");
        }
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

function popupAlbum() {

    if (localStorage.getItem("fotosPartilhar" + utilizador) || localStorage.getItem("fotosFavoritosPartilhar" + utilizador) || localStorage.getItem("albuns Partilhar" + utilizador) ) {
        document.getElementsByClassName("popupEstadoVisivel")[0].style.display = "block";
    } else {
        document.getElementsByClassName("popupEstadoVisivel")[0].style.display = "none";
    }
}

function removerSelecao() {
    localStorage.removeItem("fotosPartilhar" + utilizador);
    localStorage.removeItem("fotosFavoritosPartilhar" + utilizador);
    localStorage.removeItem("albunsFotografiasPartilhar" + utilizador);
    localStorage.removeItem("albunsPartilhar" + utilizador);
    closePopup("popupEstadoVisivel");
}

function disableBackground() {
    $("#side-bar").addClass("disabled");
    $("#top_row_icons").addClass("disabled");
    $(".workspace_partilhar").addClass("disabled");
    $("#memento").addClass("disabled");
}

function enableBackground() {
    $("#side-bar").removeClass("disabled")
    $("#top_row_icons").removeClass("disabled")
    $(".workspace_partilhar").removeClass("disabled");
    $("#memento").removeClass("disabled");
}
