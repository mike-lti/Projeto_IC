//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";
$(document).ready(preencheTabelaImagensPartilhar());
$(document).ready(currentAccPlacer());


function currentAccPlacer(){
    var usernameLoggedInToParse = localStorage.getItem("currentAccount");
    var usernameLoggedIn = JSON.parse(usernameLoggedInToParse);
    document.getElementById("usernameCurrentAccount").innerHTML = usernameLoggedIn;
}



function open_popup_link(){
    document.getElementsByClassName("dimmer")[0].style.opacity="1";
    document.getElementsByClassName("popup-link")[0].style.display="block";
}

function close_popup_link(){
    document.getElementsByClassName("dimmer")[0].style.opacity="0";
    document.getElementsByClassName("popup-link")[0].style.display="none";

}

function linkGenerate(){
    document.getElementsByClassName("dimmer")[0].style.opacity="1";
    localStorage.removeItem("fotosPartilhar");
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

function closePopup() {
    document.getElementsByClassName("dimmer")[0].style.opacity="0";
    document.getElementsByClassName("popup")[0].style.display = "none"
}

function popup_partilha_efetuada() {
    localStorage.removeItem("fotosPartilhar");
    document.getElementsByClassName("dimmer")[0].style.opacity="0";
    document.getElementsByClassName("popup")[0].style.display = "block"
    document.getElementsByClassName("popup-partilha")[0].style.display="none";
    $('.popup').fadeOut(7000);
}

function open_icon_partilha(icon) {
    
    document.getElementsByClassName("popup-partilha")[0].style.display="block";
    preencheTabelaImagensPartilhar()

    if(icon == "link") {
        document.getElementById("botao-gerar-link").style.display = "block";
        
        document.getElementsByClassName("dimmer")[0].style.opacity="1";
        document.getElementById("botao-confirmar-partilha").style.display = "none";
        document.getElementById("descricao").style.display = "none";
        document.getElementById("texto-descricao").style.display = "none";
    } else {
        document.getElementsByClassName("dimmer")[0].style.opacity="1";
        document.getElementById("botao-confirmar-partilha").style.display = "block";
        document.getElementById("descricao").style.display = "block";
        document.getElementById("texto-descricao").style.display = "block";
        document.getElementById("botao-gerar-link").style.display = "none";
    }
    
    document.getElementById("partilha-icon").src = "img_icon_partilhar/" + icon + ".png";


}
function close_icon_partilha() {

    document.getElementsByClassName("dimmer")[0].style.opacity="0";
    document.getElementsByClassName("popup-partilha")[0].style.display="none";
}

function preencheTabelaImagensPartilhar() {

    if (localStorage.getItem("imagensImportadas")) {

        document.getElementById("bot_row_icons").style.opacity = 1;
        document.getElementById("top_row_icons").style.opacity = 1; 
        $("#top_row_icons").removeClass("disabled");
        $("#bot_row_icons").removeClass("disabled");
        document.getElementById("p-importar").innerHTML = "Escolha o local para onde pretende partilhar as suas fotografias:"; 

        if (localStorage.getItem("fotosPartilhar") != null) {
            document.getElementById("texto-seleciona").innerHTML = "Fotografias selecionadas para partilhar:";
            document.getElementById("texto-seleciona").style.left = "320px";
            var tabela = document.querySelector("#tabela-fotos-partilha tbody");
            tabela.innerHTML = "";
            let arrayImagens = JSON.parse(localStorage.getItem("fotosPartilhar"));
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

        } else {
            var tabela = document.querySelector("#tabela-fotos-partilha tbody");
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
    
        }
    } else {
        document.getElementById("p-importar").innerHTML = "Ainda não tem nenhuma fotografia na sua galeria. Importe primeiro!";
        document.getElementById("bot_row_icons").style.opacity = 0.5;
        document.getElementById("top_row_icons").style.opacity = 0.5;
        $("#top_row_icons").addClass("disabled");
        $("#bot_row_icons").addClass("disabled");

    }
    document.getElementsByClassName("dimmer")[0].style.opacity="0"
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