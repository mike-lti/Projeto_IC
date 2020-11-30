//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";


var utilizador = localStorage.getItem("currentAccount")
.slice(1,localStorage.getItem("currentAccount").length -1);

$(document).ready(showPhotos());
$(document).ready(preencheTabelaImagens());
$(document).ready(currentAccPlacer());

localStorage.removeItem("fotosPartilhar" + utilizador);
localStorage.removeItem("fotosAlbum" + utilizador);
localStorage.removeItem("imagensFiltradas" + utilizador);

$("#right-top-right-bar button img").addClass("disabled-image-button")
document.getElementById("botao-eliminar").disabled = true;
document.getElementById("botao-criar-galeria").disabled = true;
document.getElementById("botao-adicionar").disabled = true;
document.getElementById("botao-partilhar").disabled = true;
$("input[type=checkbox]").attr("disabled", true);

if (localStorage.getItem("imagensImportadas" + utilizador) == null || localStorage.getItem("imagensImportadas" + utilizador) == "[]") {
    document.getElementById("p-album").innerHTML = "Ainda não tem fotografias na galeria.\
    Vá até à página <a href=importar.html>Importar</a> e descarregue as suas primeiras fotografias.";
    document.getElementById("botao-selecionar-galeria").disabled = true;
    document.getElementById("botao-selecionar-todas-galeria").disabled = true;
    $("#botao-filtros-galeria").addClass("disabled-image-button");
    for (let item of document.querySelectorAll('#tabela .option-item')) {
        item.style.display = "none";
    }
} else {
    document.getElementById("botao-selecionar-galeria").disabled = false;
    document.getElementById("botao-selecionar-todas-galeria").disabled = false;
    document.getElementById("botao-filtros-galeria").disabled = false;
    $("#botao-filtros-galeria").removeClass("disabled-image-button");
    document.getElementById("p-album").innerHTML = ""; 
}


var elementos = document.querySelectorAll('input[type=checkbox]');
for (let element of elementos) {
    element.addEventListener("change", imagem_selecionada);
}


function currentAccPlacer(){
    var usernameLoggedInToParse = localStorage.getItem("currentAccount");
    var usernameLoggedIn = JSON.parse(usernameLoggedInToParse);
    document.getElementById("usernameCurrentAccount").innerHTML = usernameLoggedIn;
}


function showPhotos() {
    $("#tabela").find(".option-item").css( "display", "block");
    if (localStorage.getItem("showPopup" + utilizador) == "true") {
        showPopup();
        localStorage.setItem("showPopup" + utilizador, "false")
    }
}         


function showPopup() {
    document.getElementsByClassName("popup")[0].style.display = "block";
    $('.popup').fadeOut(7000);
}

function imagem_selecionada() {
    
    if (document.querySelectorAll('input[type=checkbox]:checked').length > 0) {
        $("#right-top-right-bar button img").removeClass("disabled-image-button");
        $("#href-album").removeClass("disabled");
        $("#href-partilhar").removeClass("disabled");
        document.getElementById("botao-eliminar").disabled = false;    
        document.getElementById("botao-criar-galeria").disabled = false;
        document.getElementById("botao-adicionar").disabled = false;
        document.getElementById("href-album").style.color = "black";
        document.getElementById("href-partilhar").href = "partilhar.html";
        document.getElementById("href-album").href = "album.html";
        
    } else {
        $("#right-top-right-bar button img").addClass("disabled-image-button");
        $("#href-album").addClass("disabled");
        $("#href-partilhar").addClass("disabled");
        document.getElementById("botao-eliminar").disabled = true;    
        document.getElementById("botao-criar-galeria").disabled = true;
        document.getElementById("href-album").style.color = "rgb(204, 204, 204)";
        document.getElementById("botao-adicionar").disabled = true;
        document.getElementById("href-partilhar").disabled = true;
        document.getElementById("href-partilhar").href = "";
        document.getElementById("href-album").disabled = true;
        document.getElementById("href-album").href = "";
    }
}  

function seleciona_todos() {
    
    var arrayImagensSelecionadas = document.querySelectorAll('input[type=checkbox]:checked');

    if ( $("input[type=checkbox]").attr("disabled")) {
        document.getElementById("botao-selecionar-todas-galeria").innerHTML = "Desselecionar Todas"
        document.getElementById("botao-selecionar-galeria").innerHTML = "Cancelar"
        $("input[type=checkbox]").attr("disabled", false);
        var boxes = document.getElementsByClassName("checkbox");
        if (arrayImagensSelecionadas.length == 0 || 
        arrayImagensSelecionadas.length < document.querySelectorAll('input[type=checkbox]:not(:checked)').length) {
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
        
        if (document.getElementById("botao-selecionar-galeria").innerHTML == "Cancelar") {

            if (arrayImagensSelecionadas.length == 0) {
                document.getElementById("botao-selecionar-todas-galeria").innerHTML = "Desselecionar Todas"
            } else {
                document.getElementById("botao-selecionar-todas-galeria").innerHTML = "Selecionar Todas"
            }
            var boxes = document.getElementsByClassName("checkbox");
            if (arrayImagensSelecionadas.length == 0 || arrayImagensSelecionadas.length < document.querySelectorAll('input[type=checkbox]:not(:checked)').length) {
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
            document.getElementById("botao-selecionar-todas-galeria").innerHTML = "Selecionar Todas"
            document.getElementById("botao-selecionar-galeria").innerHTML = "Selecionar"
            $("input[type=checkbox]").attr("disabled", true);
            for (let imagem of arrayImagensSelecionadas) {
                imagem.checked = false; 
            }
        }
        
        
        
    }
}

function enable_galeria() {
    if ($("input[type=checkbox]").attr("disabled")) {
        document.getElementById("botao-selecionar-galeria").innerHTML = "Cancelar"
        $("input[type=checkbox]").attr("disabled", false);
        document.getElementById("href-partilhar").href = "partilhar.html";
        document.getElementById("href-album").href = "album.html";
    } else {
        document.getElementById("botao-selecionar-galeria").innerHTML = "Selecionar"
        document.getElementById("botao-selecionar-todas-galeria").innerHTML = "Selecionar Todas"
        $("input[type=checkbox]").attr("disabled", true);
        document.getElementById("botao-criar-galeria").disabled = true;
        document.getElementById("botao-adicionar").disabled = true;
        document.getElementById("botao-eliminar").disabled = true;
        document.getElementById("botao-partilhar").disabled = true;
        document.getElementById("href-partilhar").disabled = true;
        document.getElementById("href-album").disabled = true; 
        document.getElementById("href-album").style.color = "rgb(204, 204, 204)";
        $("#href-album").addClass("disabled");
        $("#href-partilhar").addClass("disabled");
        $("#right-top-right-bar button img").addClass("disabled-image-button");

        for (let imagem of document.querySelectorAll('input[type=checkbox]:checked')) {
            imagem.checked = false; 
        }   
    }
}

function open_popup(popup) {
    document.getElementsByClassName("dimmer")[0].style.opacity="1"
    document.getElementById(popup).style.display = "block";
    disableBackground();   
}

function close_popup(popup) {
    document.getElementsByClassName("dimmer")[0].style.opacity="0"
    document.getElementById(popup).style.display = "none";
    enableBackground();
}

function nova_galeria_eliminada() {
    var arrayFicar = document.querySelectorAll('input[type=checkbox]:not(:checked)');
    var arrayApagar = document.querySelectorAll('input[type=checkbox]:checked');
    var tabela = document.querySelector("#tabela tbody");
    tabela.innerHTML = "";

    var arraySrc = [];
    var x = 0;
    var i = 0;
    var trElement;
    var arrayFicarlength = arrayFicar.length

    /* Cria tabela que vai conter as fotos que vão ficar no album */
    for (let input of arrayFicar ) {
        if (x <= arrayFicarlength - 10) {
            if(i%4 == 0 || x == 0){
                trElement = document.createElement('tr');
                trElement.setAttribute('id', `tr${x}`);
            }

            let src = input.parentElement.children[1].children[0].getAttribute('src');
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
            x++;
        }
    }
    
    document.getElementsByClassName("dimmer")[0].style.opacity="0"  
    close_popup("popup-eliminar-fotos-galeria");
    
    var arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas" + utilizador)); 

    for (let imagemApagada of arrayApagar) {
        let srcApagada = imagemApagada.parentElement.children[1].children[0].getAttribute('src');
        let index = 0;
        for ( let srcImportadas of arrayImagensImportadas) {
            if (srcApagada == srcImportadas) {
                arrayImagensImportadas.splice (index, 1);
            }

            index++;
        }
    }
   
    localStorage.setItem("imagensImportadas" + utilizador, JSON.stringify(arrayImagensImportadas));    
}   

function showPopupFavoritos(){
    document.getElementsByClassName("popup")[0].style.display = "block";
    $('.popup').fadeOut(7000);
    
}

function guardarFotos(local) {
    var local = local + utilizador;
    if (local == "fotosPartilhar" + utilizador) {
        
        let srcList = [];

        for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
            let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
            srcList.push(srcImagem)
        }
    
        localStorage.setItem(local, JSON.stringify(srcList))
    } else {
        if (local == "fotosFavoritas" + utilizador) {
            localStorage.setItem("showPopupFavoritos" + utilizador, "true")
        }
        
        if (localStorage.getItem(local) == null) {
            let srcList = [];

            for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
                let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
                srcList.push(srcImagem)
            }

            localStorage.setItem(local, JSON.stringify(srcList))
        } else {

            let srcList = JSON.parse(localStorage.getItem(local));

            for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
                let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
                srcList.push(srcImagem)
            }
        
            localStorage.setItem(local, JSON.stringify(srcList));    
        }
    }
    
}

function preencheTabelaImagens() {

    if (JSON.parse(localStorage.getItem("imagensImportadas" + utilizador))) {
        let arrayImagens = JSON.parse(localStorage.getItem("imagensImportadas" + utilizador));
        var tabela = document.querySelector("#tabela tbody");
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
                linha.innerHTML = "<label class='option-item'>" +
                                    "<input type='checkbox'  class='checkbox'>" +
                                    "<div class='option-inner' onclick=close_open_slideShow('abrir','" + imagens + "')  >" +
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

function trocaCSS() {
    document.getElementById("estilos-css").href = "styles/style_darkmode.css"
}

function openFiltros() {
    
    
    document.getElementById("imagem_filtros").src = "images/filtros_icon1.png";
    if ( document.getElementById("popup-filtros-galeria").style.display == "block" ) {
        document.getElementById("popup-filtros-galeria").style.display = "none";
        document.getElementById("imagem_filtros").src = "images/filtros_icon.png";
        $("input[type=checkbox]").attr("disabled", true);
        document.getElementById("desfocadas").checked = false;
        document.getElementById("localização").checked = false;
        document.getElementById("jack_russell").checked = false;
        document.getElementById("qualidade").checked = false;
        document.getElementById("praia").checked = false;
        document.getElementById("dia").checked = false;
        document.getElementById("filtros-localizacao").style.display = "none";
    } else {
        document.getElementById("popup-filtros-galeria").style.display = "block";
        $("input[type=checkbox]").attr("disabled", false);
    }
}

function tiraFiltros() {
    $("input[type=checkbox]").attr("disabled", false);
    document.getElementById("imagem_filtros").src = "images/filtros_icon.png";
    document.getElementById("popup-filtros-galeria").style.display = "none";
    document.getElementById("desfocadas").checked = false;
    document.getElementById("localização").checked = false;
    document.getElementById("jack_russell").checked = false;
    document.getElementById("qualidade").checked = false;
    document.getElementById("praia").checked = false;
    document.getElementById("dia").checked = false;
    document.getElementById("cuba").checked = false;
    document.getElementById("franca").checked = false;
    document.getElementById("filtros-localizacao").style.display = "none";
}

function abreLocalizacao() {
    if (document.getElementById("localização").checked == true) {
        document.getElementById("filtros-localizacao").style.display = "block";
    } else {
        document.getElementById("filtros-localizacao").style.display = "none";
        document.getElementById("cuba").checked = false;
        document.getElementById("franca").checked = false;
    }
}

function aplica_filtros() {
    
    let imagensFiltradas = []  
    let filtrosDesejados = [] 
    var listFiltrosToParse = localStorage.getItem("imagensFiltros" + utilizador)
    var listFiltrosImgs = JSON.parse(listFiltrosToParse);
    var checkboxDesfocadas = document.getElementById("desfocadas").checked; 
    var checkboxJack_Russell = document.getElementById("jack_russell").checked; 
    var checkboxQualidade = document.getElementById("qualidade").checked;
    var checkboxPraia = document.getElementById("praia").checked;
    var checkboxDia = document.getElementById("dia").checked;
    var checkboxFranca = document.getElementById("franca").checked;
    var checkboxCuba = document.getElementById("cuba").checked;
    var checkboxLocalizacao = document.getElementById("localização").checked;

    localStorage.setItem("desfocadas" + utilizador, checkboxDesfocadas)
    localStorage.setItem("jack_russell" + utilizador, checkboxJack_Russell)
    localStorage.setItem("qualidade" + utilizador, checkboxQualidade)
    localStorage.setItem("praia" + utilizador, checkboxPraia)
    localStorage.setItem("dia" + utilizador, checkboxDia)
    localStorage.setItem("franca" + utilizador, checkboxFranca)
    localStorage.setItem("cuba" + utilizador, checkboxCuba)

    if(localStorage.getItem("desfocadas" + utilizador) == "true"){    
        filtrosDesejados.push(" Desfocadas")
        for(let img = 0; img < listFiltrosImgs.length; img++) {
            let imageToCheck = listFiltrosImgs[img]["desfocadas"];
            if(imageToCheck == "true"){
                imagensFiltradas.push(listFiltrosImgs[img])
                
            }
        }
    }
        if(localStorage.getItem("jack_russell" + utilizador) == "true"){
            filtrosDesejados.push(" Jack Russell")
            for(let img = 0; img < listFiltrosImgs.length; img++) {
                let imageToCheck = listFiltrosImgs[img]["jack_russell"];
                if(imageToCheck == "true"){
                    imagensFiltradas.push(listFiltrosImgs[img])
                    
                }
            }
        } 
            if(localStorage.getItem("cuba" + utilizador) == "true"){
                filtrosDesejados.push(" Cuba")
                console.log(listFiltrosImgs);
                for(let img = 0; img < listFiltrosImgs.length; img++) {
                    let imageToCheck = listFiltrosImgs[img]["cuba"];
                    console.log(imageToCheck);
                    if(imageToCheck == "true"){
                        imagensFiltradas.push(listFiltrosImgs[img])
                        console.log(imagensFiltradas)
                    }
                }
            }
                if(localStorage.getItem("franca" + utilizador) == "true"){
                    filtrosDesejados.push(" Franca")
                    console.log(listFiltrosImgs);
                    for(let img = 0; img < listFiltrosImgs.length; img++) {
                        let imageToCheck = listFiltrosImgs[img]["franca"];
                        console.log(imageToCheck);
                        if(imageToCheck == "true"){
                            imagensFiltradas.push(listFiltrosImgs[img])
                            console.log(imagensFiltradas)
                        }
                    }
                }
                    if(localStorage.getItem("qualidade" + utilizador) == "true"){
                    filtrosDesejados.push(" Qualidade")
                    }
                        if(localStorage.getItem("praia") == "true"){
                            filtrosDesejados.push(" praia")
                            for(let img = 0; img < listFiltrosImgs.length; img++) {
                                let imageToCheck = listFiltrosImgs[img]["praia"];
                                if(imageToCheck == "true"){
                                    imagensFiltradas.push(listFiltrosImgs[img]);
                                }
                            }                       
                        }
                            if(localStorage.getItem("dia" + utilizador) == "true"){
                                filtrosDesejados.push(" Dia")
                                for(let img = 0; img < listFiltrosImgs.length; img++) {
                                    let imageToCheck = listFiltrosImgs[img]["dia"];
                                    if(imageToCheck == "true"){
                                        imagensFiltradas.push(listFiltrosImgs[img])
                                    }
                                }
                            }

    
    localStorage.setItem("filtrosSelecionados" + utilizador, filtrosDesejados);
    var srcImagensFiltradas = []; 
    if(filtrosDesejados.length != 0) {
        var toPLaceInHtml = localStorage.getItem("filtrosSelecionados" + utilizador)
        document.getElementById("p-filtros-aplicados").innerHTML = "Filtros aplicados:" + toPLaceInHtml;
        var tabela = document.querySelector("#tabela tbody");
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
            srcImagensFiltradas.push(srcImg);
            let linha = document.createElement("td");
            linha.innerHTML = "<label class='option-item'>" +
                                "<input type='checkbox' class='checkbox'>" +
                                "<div class='option-inner' onclick=close_open_slideShow('abrir','" + srcImg + "')>" +
                                    "<img width='250px' height='155px' src='" + srcImg + "'>" +
                                "</div>" +
                            "</label>";
                       
            trElement.appendChild(linha);
            tabela.appendChild(trElement);
        }
    }else{
        var toPLaceInHtml = localStorage.getItem("filtrosSelecionados" + utilizador)
        document.getElementById("p-filtros-aplicados").innerHTML = "Filtros aplicados:" + toPLaceInHtml;
        var tabela = document.querySelector("#tabela tbody");
        tabela.innerHTML = "";
        let arrayImagens = JSON.parse(localStorage.getItem("imagensImportadas" + utilizador));
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
                linha.innerHTML = "<label class='option-item'>" +
                                    "<input type='checkbox' class='checkbox'>" +
                                    "<div class='option-inner' onclick=close_open_slideShow('abrir','" + imagens + "')>" +
                                        "<img width='250px' height='155px' src='" + imagens + "'>" +
                                    "</div>" +
                                "</label>";
                trElement.appendChild(linha);
                tabela.appendChild(trElement);
                i++;

    }
        
    }
    localStorage.setItem("imagensFiltradas" + utilizador, JSON.stringify(srcImagensFiltradas));
    checkboxDesfocadas = document.getElementById("desfocadas").checked = false;
    checkboxFranca = document.getElementById("franca").checked = false;
    checkboxCuba = document.getElementById("cuba").checked = false;
    checkboxLocalizacao = document.getElementById("localização").checked = false;
    checkboxJack_Russell = document.getElementById("jack_russell").checked = false;
    checkboxQualidade = document.getElementById("qualidade").checked = false;
    checkboxPraia = document.getElementById("praia").checked = false;
    checkboxDia = document.getElementById("dia").checked = false;
    $("input[type=checkbox]").attr("disabled", true);
    document.getElementById("imagem_filtros").src = "images/filtros_icon.png";
    document.getElementsByClassName("popupFiltrosAplicados")[0].style.display = "block"
    document.getElementById("popup-filtros-galeria").style.display = "none" 
    $('.popupTextoFiltrosAplicados').fadeIn(9000);
    document.getElementsByClassName("popupTextoFiltrosAplicados")[0].style.display = "block"
    $('.popupFiltrosAplicados').fadeOut(7000);
    
    document.getElementById("filtros-localizacao").style.display = "none";
}

function closePopupFiltrosAplicados(){
    document.getElementsByClassName("popupFiltrosAplicados")[0].style.display = "none";

}

function closePopup() {
    document.getElementsByClassName("popup")[0].style.display = "none";
}

function open_dropup() {
    if (document.getElementsByClassName("dropup-content")[0].style.display == "none" || 
    document.getElementsByClassName("dropup-content")[0].style.display == "") {
      document.getElementsByClassName("dropup-content")[0].style.display = "block";
      $('.dropup-content').fadeIn(1000);
    } else {
      document.getElementsByClassName("dropup-content")[0].style.display = "none";
      $('.dropup-content').fadeOut(1000);
    }
    
}

function slideShow(direcao) {
    
    if (localStorage.getItem("imagensFiltradas" + utilizador) == "[]" || localStorage.getItem("imagensFiltradas" + utilizador) == null) { 
        var arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas" + utilizador));
        var tamanhoArray = arrayImagensImportadas.length;
        var imagemInicial = document.getElementById("imagemCarrossel").getAttribute("src");
        var indiceImagemAtual = (arrayImagensImportadas.indexOf(imagemInicial));
    } else {
        var arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensFiltradas" + utilizador));
        var tamanhoArray = arrayImagensImportadas.length;
        var imagemInicial = document.getElementById("imagemCarrossel").getAttribute("src");
        var indiceImagemAtual = (arrayImagensImportadas.indexOf(imagemInicial));
    }
    
    
    
    if (direcao == "direita") {  
        if (arrayImagensImportadas.indexOf
        (arrayImagensImportadas[indiceImagemAtual + 1]) == tamanhoArray - 1) {
            document.getElementById("seta-direita").style.display = "none";
        } else {
            document.getElementById("seta-direita").style.display = "block";
        }
        var imagemAlterada = document.getElementById("imagemCarrossel").src = arrayImagensImportadas[indiceImagemAtual + 1 ];
    } else {
        if (arrayImagensImportadas.indexOf
        (arrayImagensImportadas[indiceImagemAtual - 1]) == 0) {
            document.getElementById("seta-esquerda").style.display = "none";
        } else {
            document.getElementById("seta-esquerda").style.display = "block";
        }

        var imagemAlterada = document.getElementById("imagemCarrossel").src = arrayImagensImportadas[indiceImagemAtual - 1];   
        
    }
    
    var indiceImagemAlterada = arrayImagensImportadas.indexOf(imagemAlterada);

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
    document.getElementById("tabela").disabled = true;

    document.getElementById("imagemCarrossel").src = imagem;
    let arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas" + utilizador));
    var tamanhoArray = arrayImagensImportadas.length;
    let imagemInicial = document.getElementById("imagemCarrossel").getAttribute("src");
    let indiceImagemAtual = (arrayImagensImportadas.indexOf(imagemInicial));

    if($("input[type=checkbox]").attr("disabled")) {
        if (funcao == "fechar") {
            document.getElementsByClassName("slideShow")[0].style.display = "none";
            document.getElementsByClassName("dimmer")[0].style.opacity="0";
            enableBackground();
            
    } else {
        document.getElementsByClassName("slideShow")[0].style.display = "block";
        document.getElementsByClassName("dimmer")[0].style.opacity="1";
        document.getElementById("imagemCarrossel").src = imagem;
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
    $("#tabela").addClass("disabled")
    $("#top-right-bar").addClass("disabled")

}

function enableBackground() {
    $("#side-bar").removeClass("disabled")
    $("#tabela").removeClass("disabled")
    $("#top-right-bar").removeClass("disabled")
}
