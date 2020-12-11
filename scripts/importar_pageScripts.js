//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";

var utilizador = localStorage.getItem("currentAccount")
.slice(1,localStorage.getItem("currentAccount").length -1);

$(document).ready(currentAccPlacer());
var arrayImagensImportadas = []; 


function filter(filter1, filter2) {
    this.firstName = first;
    this.lastName = last;
    
  }

function currentAccPlacer(){
    var usernameLoggedInToParse = localStorage.getItem("currentAccount");
    var usernameLoggedIn = JSON.parse(usernameLoggedInToParse);
    document.getElementById("usernameCurrentAccount").innerHTML = usernameLoggedIn;
}



function showModal(disponibilidade) {

    let div = document.getElementsByClassName("files_row")[0];
    let local = document.createElement("div");
    div.innerHTML = "";
    if (disponibilidade == "disponivel-pc") {
        document.getElementsByClassName("importing_modal")[0].style.display = "inline-block";
        document.getElementsByClassName("importing_modal")[0].style.zIndex = "9";
        local.innerHTML = "<input type='image' id='file_cuba' width='180' height='235' src='img_icon_importar/ferias_cuba.png' onclick='selectCuba()'>";
        div.appendChild(local);
    } else if (disponibilidade == "disponivel-google-fotos") {
        document.getElementsByClassName("importing_modal")[0].style.display = "inline-block";
        document.getElementsByClassName("importing_modal")[0].style.zIndex = "9";
        local.innerHTML ="<input type='image' id='file_franca' width='180' height='235' src='img_icon_importar/fotos_frança.png' onclick='selectFranca()'>";
        div.appendChild(local);
    } else if (disponibilidade == "disponivel-icloud") {
        document.getElementsByClassName("importing_modal")[0].style.display = "inline-block";
        document.getElementsByClassName("importing_modal")[0].style.zIndex = "9";
        local.innerHTML = "<input type='image' id='file_spike' width='180' height='235' src='img_icon_importar/fotos_spike.png' onclick='selectSpike()'>";
        div.appendChild(local);
    } else {
        document.getElementById("indisponivel-importar").style.display = "inline-block";
        document.getElementById("indisponivel-importar").style.zIndex = "9";
    }
   
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
    document.getElementById("botao-confirmar").disabled = true;
    disableBackground();
}

function closeModal() {
    document.getElementsByClassName("importing_modal")[0].style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
    document.getElementById("indisponivel-importar").style.display = "none";
    document.getElementById("indisponivel-importar").style.zIndex = "0";
    enableBackground();
}

function cancelSelection() {
    closeModal();
}

function confirmSelection() {
    localStorage.setItem("imagensImportadas" + utilizador, JSON.stringify(arrayImagensImportadas))
    localStorage.setItem("showPopup" + utilizador, "true");
}

function selectCuba() {
    document.getElementById("botao-confirmar").disabled = false;
    var arrayImagensCuba = ["img_cuba/img_1.jpg", "img_cuba/img_2.jpg", "img_cuba/img_3.jpg", 
    "img_cuba/img_4.jpg", "img_cuba/img_5.jpg", "img_cuba/img_6.jpg", "img_cuba/img_7.jpg", 
    "img_cuba/img_8.jpg", "img_cuba/img_9.jpg", "img_cuba/img_10.jpg", "img_cuba/img_11.jpg", 
    "img_cuba/img_12.jpg", "img_cuba/img_13.jpg", "img_cuba/img_14.jpg", "img_cuba/img_15.jpg", 
    "img_cuba/img_16.jpg", "img_cuba/img_17.jpg", "img_cuba/img_18.jpg", "img_cuba/img_19.jpg", 
    "img_cuba/img_20.jpg"];
    
    var arrayTagsImg = [["true", "true", "false", "false", "false", "true", "false"], ["false", "true", "false", "false", "false", "true", "false"], 
    ["false","true", "false", "false", "false", "true", "false"], ["false", "true", "false", "false", "false", "true", "false"], 
    ["false", "true", "false", "false", "false", "true", "false"], ["true", "true", "false", "false", "false", "true", "false"], 
    ["true", "true", "false", "false", "false", "true", "false"], ["true", "true", "false", "false", "false", "true", "false"], 
    ["false", "true", "false", "false", "false", "true", "false"], ["true", "true", "false", "false", "false", "true", "false"], 
    ["true", "true", "false", "false", "false", "true", "false"], ["false", "true", "false", "false", "false", "true", "false"], 
    ["true", "true", "false", "false", "false", "true", "false"], ["false", "true", "false", "false", "false", "true", "false"], 
    ["true", "true", "false", "false", "false", "true", "false"], ["false", "true", "false", "false", "false", "true", "false"],
    ["false", "true", "false", "false", "false", "true", "false"], ["false", "true", "false", "false", "false", "true", "false"], 
    ["false", "true", "false", "false", "false", "true", "false"], ["true", "true", "false", "false", "false", "true", "false"]];

    var objArray = objHandler(arrayImagensCuba, arrayTagsImg);
    

    if (localStorage.getItem("imagensImportadas" + utilizador) == null) {        
        arrayImagensImportadas = arrayImagensCuba;   
        
    }else {        
        arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas" + utilizador));

        for (let imgSrc of arrayImagensCuba) {
            arrayImagensImportadas.push(imgSrc);
        }

        localStorage.setItem("imagensImportadas" + utilizador, JSON.stringify(arrayImagensImportadas));
    }

    if(localStorage.getItem("imagensFiltros" + utilizador) == null) {        
        localStorage.setItem("imagensFiltros" + utilizador, JSON.stringify(objArray));

    }else {
        var objCheck = JSON.parse(localStorage.getItem("imagensFiltros" + utilizador));
        for (let element of objArray){
            objCheck.push(element);
        }
        localStorage.setItem("imagensFiltros" + utilizador, JSON.stringify(objCheck));
    }

}

function selectFranca() {
    document.getElementById("botao-confirmar").disabled = false;
    var arrayImagensFranca = ["img_franca/img_1.jpg", "img_franca/img_2.jpg", 
    "img_franca/img_3.jpg", "img_franca/img_4.jpg", "img_franca/img_5.jpg", 
    "img_franca/img_6.jpg", "img_franca/img_7.jpg", "img_franca/img_8.jpg", 
    "img_franca/img_9.jpg", "img_franca/img_10.jpg", "img_franca/img_11.jpg", 
    "img_franca/img_12.jpg", "img_franca/img_13.jpg", "img_franca/img_14.jpg", 
    "img_franca/img_15.jpg", "img_franca/img_16.jpg", "img_franca/img_17.jpg", 
    "img_franca/img_18.jpg", "img_franca/img_19.jpg", "img_franca/img_20.jpg"];    

    var arrayTagsImgFranca = [["false", "false", "false", "false", "true", "false", "true"], ["false", "true", "false", "false", "true", "false", "true"],
    ["false","false", "false", "false", "true", "false", "true"], ["false", "true", "false", "false", "true", "false", "false"], 
    ["false", "true", "false", "false", "true", "false", "false"], ["false", "true", "false", "false", "true", "false", "false"],
    ["false", "false", "false", "false", "true", "false", "true"], ["false", "false", "true", "false", "true", "false", "true"], 
    ["false", "true", "false", "false", "true", "false", "true"], ["false", "false", "true", "false", "true", "false", "true"],
    ["false", "true", "false", "false", "true", "false", "false"], ["false", "false", "false", "false", "true", "false", "true"], 
    ["false", "false", "false", "false", "true", "false", "true"], ["false", "true", "false", "false", "true", "false", "true"],
    ["false", "false", "false", "false", "true", "false", "false"], ["false", "true", "false", "false", "true", "false", "false"],
    ["false", "true", "true", "false", "true", "false", "false"], ["false", "true", "true", "false", "true", "false", "false"],
    ["false", "true", "false", "false", "true", "false", "true"], ["false", "true", "false", "false", "true", "false", "true"]];

    var objArray1 = objHandler(arrayImagensFranca, arrayTagsImgFranca);
    

    if (localStorage.getItem("imagensImportadas" + utilizador) == null) {
        arrayImagensImportadas = arrayImagensFranca;        
    } else {
        arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas" + utilizador));
        
        for (let imgSrc of arrayImagensFranca) {
            arrayImagensImportadas.push(imgSrc);
        }

        localStorage.setItem("imagensImportadas" + utilizador, JSON.stringify(arrayImagensImportadas));
    }

    if(localStorage.getItem("imagensFiltros" + utilizador) == null) {        
        localStorage.setItem("imagensFiltros" + utilizador, JSON.stringify(objArray1));

    }else {
        var objCheck = JSON.parse(localStorage.getItem("imagensFiltros" + utilizador));
        for (let element of objArray1){
            objCheck.push(element);          
        }
        localStorage.setItem("imagensFiltros" + utilizador, JSON.stringify(objCheck));
    }

}

function selectSpike() {
    document.getElementById("botao-confirmar").disabled = false;
    var arrayImagensSpike = ["img_spike/img_1.jpg", "img_spike/img_2.jpg",
     "img_spike/img_3.jpg", "img_spike/img_4.jpg", "img_spike/img_5.jpg", 
     "img_spike/img_6.jpg", "img_spike/img_7.jpg", "img_spike/img_8.jpg", 
     "img_spike/img_9.jpg", "img_spike/img_10.jpg", "img_spike/img_11.jpg", 
     "img_spike/img_12.jpg", "img_spike/img_13.jpg", "img_spike/img_14.jpg", 
     "img_spike/img_15.jpg", "img_spike/img_16.jpg", "img_spike/img_17.jpg", 
     "img_spike/img_18.jpg", "img_spike/img_19.jpg", "img_spike/img_20.jpg"];

    var arrayTagsImgSpike = [["false", "true", "false", "false", "false", "false", "false"], ["false", "true", "false", "false", "false", "false", "false"],
    ["false", "true", "false", "false", "false", "false", "false"], ["false", "true", "false", "true", "false", "false", "false"], 
    ["false", "true", "false", "false", "false", "false", "false"], ["false", "true", "false", "true", "false", "false", "false"],
    ["false", "true", "false", "false", "false", "false", "false"], ["false", "true", "false", "false", "false", "false", "false"],
    ["false", "true", "false", "false", "false", "false", "false"], ["false", "true", "false", "true", "false", "false", "false"],
    ["false", "true", "false", "false", "false", "false", "false"], ["false", "true", "false", "true", "false", "false", "false"], 
    ["false", "true", "false", "false", "false", "false", "false"], ["false", "true", "false", "false", "false", "false", "false"],
    ["false", "true", "false", "true", "false", "false", "false"], ["false", "true", "false", "true", "false", "false", "false"],
    ["true", "true", "false", "false", "false", "false", "false"], ["false", "true", "false", "false", "false", "false", "false"],
    ["false", "true", "false", "false", "false", "false", "false"], ["false", "true", "false", "true", "false", "false", "false"]];

    var objArray2 = objHandler(arrayImagensSpike, arrayTagsImgSpike);
    if (localStorage.getItem("imagensImportadas" + utilizador) == null) {
        arrayImagensImportadas = arrayImagensSpike;
    } else {
        arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas" + utilizador));
        
        for (let imgSrc of arrayImagensSpike) {
            arrayImagensImportadas.push(imgSrc);
        }

        localStorage.setItem("imagensImportadas" + utilizador, JSON.stringify(arrayImagensImportadas));
    }

    if(localStorage.getItem("imagensFiltros" + utilizador) == null) {        
        localStorage.setItem("imagensFiltros" + utilizador, JSON.stringify(objArray2));

    }else {
        var objCheck = JSON.parse(localStorage.getItem("imagensFiltros" + utilizador));        
        for (let element of objArray2){
            objCheck.push(element);
        }
        localStorage.setItem("imagensFiltros" + utilizador, JSON.stringify(objCheck));
    }

}


function objHandler(arrayImagens, arrayTagsImg) {
    let listObj = []
    for(var i = 0; i < arrayImagens.length; i++){
        let filterImg = arrayTagsImg[i];
        let imgSrc = arrayImagens[i];      
        var objToAdd = new filterObj(imgSrc, filterImg); 
        listObj.push(objToAdd);
    } 
    return (listObj) 
}

function filterObj(src, filterBoolean){

    this.imgSrcObj = src;
    this.praia = filterBoolean[0];
    this.dia = filterBoolean[1];
    this.desfocadas = filterBoolean[2];
    this.jack_russell = filterBoolean[3];
    this.franca = filterBoolean[4];
    this.cuba = filterBoolean[5];
    this.monumentos = filterBoolean[6];
}



function disableBackground() {
    $("#side-bar").addClass("disabled")
    $("#top_row_icons").addClass("disabled")
    $("#bot_row_icons").addClass("disabled")
    $("#memento").addClass("disabled");
}

function enableBackground() {
    $("#side-bar").removeClass("disabled")
    $("#top_row_icons").removeClass("disabled")
    $("#bot_row_icons").removeClass("disabled")
    $("#memento").removeClass("disabled");
}

function open_dropup() {
    if (document.getElementsByClassName("dropup-content")[0].style.display == "none" ||
    document.getElementsByClassName("dropup-content")[0].style.display == "") {
      $('.dropup-content').fadeIn(100);
    } else {
      $('.dropup-content').fadeOut(100);
    }
    
}