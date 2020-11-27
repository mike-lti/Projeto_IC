//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

$(document).ready(showPhotos());
$(document).ready(preencheTabelaImagens());

localStorage.removeItem("fotosPartilhar");
localStorage.removeItem("fotosAlbum");

$("#right-top-right-bar button img").addClass("disabled-image-button")
document.getElementById("botao-eliminar").disabled = true;
document.getElementById("botao-criar-galeria").disabled = true;
document.getElementById("botao-adicionar").disabled = true;
document.getElementById("botao-partilhar").disabled = true;
$("input[type=checkbox]").attr("disabled", true);

if (localStorage.getItem("imagensImportadas") == null) {
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
}




var elementos = document.querySelectorAll('input[type=checkbox]');
for (let element of elementos) {
    element.addEventListener("change", imagem_selecionada);
}

function showPhotos() {
    $("#tabela").find(".option-item").css( "display", "block");
    if (localStorage.getItem("showPopup") == "true") {
        showPopup();
        localStorage.setItem("showPopup", "false")
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

function enable_galeria() {
    if ($("input[type=checkbox]").attr("disabled")) {
        document.getElementById("botao-selecionar-galeria").innerHTML = "Cancelar"
        $("input[type=checkbox]").attr("disabled", false);
        document.getElementById("href-partilhar").href = "partilhar.html";
        document.getElementById("href-album").href = "album.html";
    } else {
        document.getElementById("botao-selecionar-galeria").innerHTML = "Selecionar"
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


function nova_galeria_eliminada() {
    var arrayFicar = document.querySelectorAll('input[type=checkbox]:not(:checked)');
    var arrayApagar = document.querySelectorAll('input[type=checkbox]:checked');
    var tabela = document.querySelector("#tabela tbody");
    var arraySrc = [];
    tabela.innerHTML = "";
    var x = 0;
    var i = 0;
    var trElement;
    /* Cria tabela que vai conter as fotos que vão ficar no album */
    var arrayFicarlength = arrayFicar.length;
    console.log(arrayFicarlength)
    for (let input of arrayFicar ) {
        if (x <= arrayFicarlength - 6) {
            if(i%4 == 0 || x == 0){
                trElement = document.createElement('tr');
                trElement.setAttribute('id', `tr${x}`);
            }
            let src = input.parentElement.children[1].children[0].getAttribute('src');
            
    
            let linha = document.createElement("td");
            linha.innerHTML = "<label class='option-item'>" +
                                    "<input type='checkbox'  class='checkbox'>" +
                                    "<div class='option-inner'>" +
                                        "<img width='250px' height='155px' src='" + src + "'>" +
                                    "</div>" +
                                "</label>";
            trElement.appendChild(linha);
            tabela.appendChild(trElement);
            i++;
            x++;$("input[type=checkbox]").attr("disabled", true);
        }
    }
    
    document.getElementsByClassName("dimmer")[0].style.opacity="0"  
    close_popup_eliminar_fotografias()
    
    var arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas")); 
    var index = 0;
    for (let imagemApagada of arrayApagar) {
        let srcApagada = imagemApagada.parentElement.children[1].children[0].getAttribute('src');
        index = 0;
        for ( let srcImportadas of arrayImagensImportadas) {
            if (srcApagada == srcImportadas) {
                delete JSON.parse(localStorage.getItem("imagensImportadas"))[index];
                console.log(index)
            } else if (arrayImagensImportadas.includes(srcImportadas) == true) {  
                arraySrc.push(srcImportadas);
            } 
            index++;
        }
    }
    console.log(arraySrc)
    localStorage.setItem("imagensImportadas", JSON.stringify(arraySrc));
    console.log(localStorage.getItem("imagensImportadas"))
    
}   

function showPopupFavoritos(){
    document.getElementsByClassName("popup")[0].style.display = "block";
    $('.popup').fadeOut(7000);
    
}

function guardarFavoritos() {

    localStorage.setItem("showPopupFavoritos", "true")

    if (localStorage.getItem("fotosFavoritas") == null) {
        let srcList = [];

        for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
            let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
            srcList.push(srcImagem)
        }

        localStorage.setItem("fotosFavoritas", JSON.stringify(srcList))
    } else {

        let srcList = JSON.parse(localStorage.getItem("fotosFavoritas"));

        for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
            let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
            srcList.push(srcImagem)
        }
    
        localStorage.setItem("fotosFavoritas", JSON.stringify(srcList));    
    }
}

function guardarFotosPartilhar() {

    let srcList = [];

    for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
        let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
        srcList.push(srcImagem)
    }

    localStorage.setItem("fotosPartilhar", JSON.stringify(srcList))
    
}

function guardarFotosAlbum() {

    if (localStorage.getItem("fotosAlbum") == null) {
        let srcList = [];

        for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
            let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
            srcList.push(srcImagem)
        }

        localStorage.setItem("fotosAlbum", JSON.stringify(srcList))
    } else {
        let srcList = JSON.parse(localStorage.getItem("fotosAlbum"));

        for (let input of document.querySelectorAll('input[type=checkbox]:checked')) {
            let srcImagem = input.parentElement.children[1].children[0].getAttribute('src');
            srcList.push(srcImagem)
        }
    
        localStorage.setItem("fotosAlbum", JSON.stringify(srcList))
    }
}




function preencheTabelaImagens() {

    if (JSON.parse(localStorage.getItem("imagensImportadas"))) {
        var tabela = document.querySelector("#tabela tbody");
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
                linha.innerHTML = "<label class='option-item'>" +
                                    "<input type='checkbox'  class='checkbox'>" +
                                    "<div class='option-inner'>" +
                                        "<img width='250px' height='155px' src='" + imagens + "'>" +
                                    "</div>" +
                                "</label>";
                trElement.appendChild(linha);
                tabela.appendChild(trElement);
                i++;

                }

        document.getElementsByClassName("dimmer")[0].style.opacity="0"

        close_popup_eliminar_fotografias()    
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
                                "<input type='checkbox'  class='checkbox-album'>" +
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

function trocaCSS() {
    document.getElementById("estilos-css").href = "styles/style_darkmode.css"
}

function openFiltros() {
    
    document.getElementById("imagem_filtros").src = "images/filtros_icon1.png";
    if ( document.getElementById("popup-filtros-galeria").style.display == "block" ) {
        document.getElementById("popup-filtros-galeria").style.display = "none";
        document.getElementById("imagem_filtros").src = "images/filtros_icon.png";
        $("input[type=checkbox]").attr("disabled", true);
    } else {
        document.getElementById("popup-filtros-galeria").style.display = "block";
        $("input[type=checkbox]").attr("disabled", false);
    }
}

function tiraFiltros() {
    $("input[type=checkbox]").attr("disabled", false);
    document.getElementById("imagem_filtros").src = "images/filtros_icon.png";
    document.getElementById("popup-filtros-galeria").style.display = "none";
}

function aplica_filtros() {

    let imagensFiltradas = []  
    let filtrosDesejados = [] 
    var listFiltrosToParse = localStorage.getItem("imagensFiltros")
    var listFiltrosImgs = JSON.parse(listFiltrosToParse);
    console.log(listFiltrosImgs)
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
        filtrosDesejados.push("desfocadas")
        console.log(filtrosDesejados)
        console.log(listFiltrosImgs)
        for(let img = 0; img < listFiltrosImgs.length; img++) {
            let imageToCheck = listFiltrosImgs[img]["desfocadas"];
            if(imageToCheck == "true"){
                imagensFiltradas.push(listFiltrosImgs[img])
                console.log(imagensFiltradas)
            }
        }
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
            let linha = document.createElement("td");
            linha.innerHTML = "<label class='option-item'>" +
                                "<input type='checkbox'  class='checkbox'>" +
                                "<div class='option-inner'>" +
                                    "<img width='250px' height='155px' src='" + srcImg + "'>" +
                                "</div>" +
                            "</label>";
                       
            trElement.appendChild(linha);
            tabela.appendChild(trElement);
        }
    }else{
        var tabela = document.querySelector("#tabela tbody");
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
                linha.innerHTML = "<label class='option-item'>" +
                                    "<input type='checkbox'  class='checkbox'>" +
                                    "<div class='option-inner'>" +
                                        "<img width='250px' height='155px' src='" + imagens + "'>" +
                                    "</div>" +
                                "</label>";
                trElement.appendChild(linha);
                tabela.appendChild(trElement);
                i++;

    }
        
    }
    checkboxDesfocadas = document.getElementById("desfocadas").checked = false;
    checkboxLocalização = document.getElementById("localização").checked = false;
    checkboxQualidade = document.getElementById("qualidade").checked = false;
    checkboxPraia = document.getElementById("praia").checked = false;
    checkboxDia = document.getElementById("dia").checked = false;
    $("input[type=checkbox]").attr("disabled", true);
    document.getElementById("imagem_filtros").src = "images/filtros_icon.png";
    document.getElementsByClassName("popupFiltrosAplicados")[0].style.display = "block"
    document.getElementById("popup-filtros-galeria").style.display = "none" 
    $('.popupFiltrosAplicados').fadeOut(7000);
}

function closePopupFiltrosAplicados(){
    document.getElementsByClassName("popupFiltrosAplicados")[0].style.display = "none"

}

function closePopup() {
    document.getElementsByClassName("popup")[0].style.display = "none"
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