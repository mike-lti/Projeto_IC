//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

var utilizador = localStorage.getItem("currentAccount")
.slice(1,localStorage.getItem("currentAccount").length -1);

$(document).ready(currentAccPlacer());
$(document).ready(getFavoritos());
localStorage.removeItem("fotosFavortitosAlbum" + utilizador);

$("#right-top-right-bar button img").addClass("disabled-image-button")
document.getElementById("botao-eliminar").disabled = true;
document.getElementById("botao-criar-galeria").disabled = true;
document.getElementById("botao-adicionar").disabled = true;
$("input[type=checkbox]").attr("disabled", true);

if (localStorage.getItem("fotosFavoritas" + utilizador) == null || localStorage.getItem("fotosFavoritas" + utilizador).length == 2 ) {
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

if (localStorage.getItem("fotosFavoritas" + utilizador) == null || localStorage.getItem("fotosFavoritas" + utilizador) == "[]") {
    document.getElementById("p-album").innerHTML = "Não tem fotografias favoritas. Vá até à <a href=galeria.html>Galeria</a> e\
    selecione as fotografias que deseja adicionar aos favoritos!"; 
} else {
    document.getElementById("p-album").innerHTML = "";
}



function currentAccPlacer(){
    var usernameLoggedInToParse = localStorage.getItem("currentAccount");
    var usernameLoggedIn = JSON.parse(usernameLoggedInToParse);
    document.getElementById("usernameCurrentAccount").innerHTML = usernameLoggedIn;
}

function closePopup() {
    document.getElementsByClassName("popup")[0].style.display = "none";
}

function open_popup_eliminar_fotografias() {
    let numeroAlbunsEliminados = document.querySelectorAll('input[type=checkbox]:checked').length
    if (numeroAlbunsEliminados > 1) {
        document.getElementsByClassName("numero-albuns-eliminar")[0].innerHTML = "Tem a certeza que pretende remover " + numeroAlbunsEliminados + " fotografias dos Favoritos?"
    } else {
        document.getElementsByClassName("numero-albuns-eliminar")[0].innerHTML = "Tem a certeza que pretende remover a fotografia selecionada dos Favoritos?"
    }
    document.getElementsByClassName("dimmer")[0].style.opacity="1"
    document.getElementsByClassName("popup-eliminar-fotos-geral")[0].style.display = "block";   
}

function close_popup_eliminar_fotografias() {
    document.getElementsByClassName("dimmer")[0].style.opacity="0"
    document.getElementsByClassName("popup-eliminar-fotos-geral")[0].style.display = "none";
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
        document.getElementById("href-album").style.color = "black";
        document.getElementById("href-album").href = "album.html";
        document.getElementById("href-partilhar").disabled = false;
        document.getElementById("href-partilhar").href = "partilhar.html";
    } else {
        $("#right-top-right-bar button img").addClass("disabled-image-button");
        document.getElementById("botao-eliminar").disabled = true;    
        document.getElementById("botao-criar-galeria").disabled = true;
        document.getElementById("botao-adicionar").disabled = true;
        document.getElementById("href-album").style.color = "rgb(204, 204, 204)";
        document.getElementById("href-album").disabled = true;
        document.getElementById("href-album").href = "";
        document.getElementById("href-partilhar").disabled = true;
        document.getElementById("href-partilhar").href = "";
    
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
                    imagem_selecionada();
            }
        } else {
            for (var x = 0; x < boxes.length; x++) {
                var obj = boxes[x];
                    obj.checked = false;
                    imagem_selecionada();
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
                        imagem_selecionada();
                }
            } else {
                for (var x = 0; x < boxes.length; x++) {
                    var obj = boxes[x];
                        obj.checked = false;
                        imagem_selecionada();
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
                                "<div class='option-inner' onclick=close_open_slideShow('abrir','" + src + "')>" +
                                    "<img width='250px' height='155px' src='" + src + "'>" +
                                "</div>" +
                            "</label>";
        trElement.appendChild(linha);
        tabela.appendChild(trElement);
        i++;  
    }

    localStorage.setItem("fotosFavoritas" + utilizador, JSON.stringify(arrayFotosRestantesFavoritos));
    if ( document.querySelector("#fotos-favoritas tbody tr") == null) {
        document.getElementById("botao-eliminar").disabled = true;
        document.getElementById("botao-criar-galeria").disabled = true;
        document.getElementById("botao-adicionar").disabled = true;
        document.getElementById("botao-selecionar-favoritos").disabled = true;
        document.getElementById("botao-selecionar-todas-favoritos").disabled = true;
    }
    
    if (localStorage.getItem("fotosFavoritas" + utilizador) == "[]") {
        document.getElementById("p-album").innerHTML = "Não tem fotografias favoritas. Vá até à <a href=galeria.html>Galeria</a> e\
        selecione as fotografias que deseja adicionar aos favoritos!"; 
    } else {
        document.getElementById("p-album").innerHTML = "";
    }

    document.getElementsByClassName("dimmer")[0].style.opacity="0"  
    
    
    close_popup_eliminar_fotografias()
}   



function getFavoritos() {
    if (localStorage.getItem("fotosFavoritas" + utilizador) != null) {
        document.getElementById("p-album").innerHTML = ""; 
        var arrayImagensFavoritas = JSON.parse(localStorage.getItem("fotosFavoritas" + utilizador));
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
                                    "<div class='option-inner' onclick=close_open_slideShow('abrir','" + srcFoto + "')>" +
                                        "<img width='250px' height='155px' src='" + srcFoto + "'>" +
                                    "</div>" +
                                "</label>";
            trElement.appendChild(linha);
            tabela.appendChild(trElement);
            i++; 
                 
        }

    } else {
        document.getElementById("p-album").innerHTML = "Não tem fotografias favoritas. Vá até à <a href=galeria.html>Galeria</a> e\
        selecione as fotografias que deseja adicionar aos favoritos!"; 
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


function slideShow(direcao) {
    
    
    var arrayImagensImportadas = JSON.parse(localStorage.getItem("fotosFavoritas" + utilizador));
    var tamanhoArray = arrayImagensImportadas.length;
    var imagemInicial = document.getElementById("imagemCarrossel").getAttribute("src");
    var indiceImagemAtual = (arrayImagensImportadas.indexOf(imagemInicial));
        
    if (direcao == "direita") {  
        if (arrayImagensImportadas.indexOf
        (arrayImagensImportadas[indiceImagemAtual + 1]) == tamanhoArray - 1) {
            document.getElementById("seta-direita").style.display = "none";
        } else {
            document.getElementById("seta-direita").style.display = "block";
        }
        var imagemAlterada = document.getElementById("imagemCarrossel").src = arrayImagensImportadas[indiceImagemAtual + 1 ];
        document.getElementsByClassName("numero-fotografias")[0].innerHTML = (indiceImagemAtual + 2) + "/" + tamanhoArray;
    } else {
        if (arrayImagensImportadas.indexOf
        (arrayImagensImportadas[indiceImagemAtual - 1]) == 0) {
            document.getElementById("seta-esquerda").style.display = "none";
        } else {
            document.getElementById("seta-esquerda").style.display = "block";
        }
        var imagemAlterada = document.getElementById("imagemCarrossel").src = arrayImagensImportadas[indiceImagemAtual - 1];   
        document.getElementsByClassName("numero-fotografias")[0].innerHTML = (indiceImagemAtual) + "/" + tamanhoArray;
    }
    
    var indiceImagemAlterada = arrayImagensImportadas.indexOf(imagemAlterada);
    localStorage.setItem("imagemAtual", arrayImagensImportadas[indiceImagemAtual + 1 ]);

    if (indiceImagemAlterada == 0) {
        document.getElementById("seta-esquerda").style.display = "none";
        document.getElementById("seta-direita").style.display = "block";
    } else if (indiceImagemAlterada == tamanhoArray -1) {
        document.getElementById("seta-esquerda").style.display = "block";
        document.getElementById("seta-direita").style.display = "none";
    } else {
        document.getElementById("seta-esquerda").style.display = "block";
        document.getElementById("seta-direita").style.display = "block";
    }
   

    
}

function close_open_slideShow(funcao, imagem) {

    document.getElementsByClassName("dimmer")[0].disabled = true;
    document.getElementById("fotos-favoritas").disabled = true;

    document.getElementById("imagemCarrossel").src = imagem;
    let arrayImagensImportadas = JSON.parse(localStorage.getItem("fotosFavoritas" + utilizador));
    var tamanhoArray = arrayImagensImportadas.length;
    let imagemInicial = document.getElementById("imagemCarrossel").getAttribute("src");
    let indiceImagemAtual = (arrayImagensImportadas.indexOf(imagemInicial));

    if($("input[type=checkbox]").attr("disabled")) {
        if (funcao == "fechar") {
            document.getElementById("imagemCarrossel").src = localStorage.getItem("imagemAtual");  
            $(".slideShow").fadeToggle();
            document.getElementsByClassName("slideShow")[0].style.display = "none";
            document.getElementsByClassName("dimmer")[0].style.opacity="0";
            document.getElementsByClassName("numero-fotografias")[0].style.display = "none";
            enableBackground();
            
    } else {
        $(".slideShow").fadeToggle();
        document.getElementsByClassName("dimmer")[0].style.opacity="1";
        document.getElementsByClassName("numero-fotografias")[0].style.display = "block";
        document.getElementById("imagemCarrossel").src = imagem;
        document.getElementsByClassName("numero-fotografias")[0].innerHTML = (indiceImagemAtual + 1) + "/" + tamanhoArray;
        localStorage.setItem("imagemAtual", imagem);
        disableBackground();

        }
    }

    if (arrayImagensImportadas.indexOf
    (arrayImagensImportadas[indiceImagemAtual]) == tamanhoArray - 1) {
        document.getElementById("seta-direita").style.display = "none";
    } else {
        document.getElementById("seta-direita").style.display = "block";
    }

    if (arrayImagensImportadas.indexOf
        (arrayImagensImportadas[indiceImagemAtual]) == 0) {
            document.getElementById("seta-esquerda").style.display = "none";
    } else {
        document.getElementById("seta-esquerda").style.display = "block";
    }
    
}

function disableBackground() {
    $("#side-bar").addClass("disabled")
    $("#fotos-favoritas").addClass("disabled")
    $("#top-right-bar").addClass("disabled")
    $("#memento").addClass("disabled");
}

function enableBackground() {
    $("#side-bar").removeClass("disabled")
    $("#fotos-favoritas").removeClass("disabled")
    $("#top-right-bar").removeClass("disabled")
    $("#memento").removeClass("disabled");
}

function guardarFotos(local) {
    var local = local + utilizador;
        
    let srcList = [];

    for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
        let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
        srcList.push(srcImagem)
    }

    if (local != "fotosFavoritosPartilhar" + utilizador) {
        localStorage.setItem("criarAlbum", "True");
    }
    
    localStorage.setItem(local, JSON.stringify(srcList))
}

function indisponivel() {
    document.getElementById("indisponivel").style.display = "block";
    $('#indisponivel').fadeOut(7000);
}