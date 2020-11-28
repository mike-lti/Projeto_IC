//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

"use strict";
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
    if (disponibilidade == "disponivel") {
        document.getElementsByClassName("importing_modal")[0].style.display = "inline-block";
        document.getElementsByClassName("importing_modal")[0].style.zIndex = "9";
    } else {
        document.getElementById("indisponivel-importar").style.display = "inline-block";
        document.getElementById("indisponivel-importar").style.zIndex = "9";
    }
   
    document.getElementsByClassName("dimmer")[0].style.opacity = "1";
    document.getElementById("botao-confirmar").disabled = true;
    disableBackground()
}

function closeModal() {
    document.getElementsByClassName("importing_modal")[0].style.display = "none";
    document.getElementsByClassName("dimmer")[0].style.opacity = "0";
    document.getElementById("indisponivel-importar").style.display = "none";
    document.getElementById("indisponivel-importar").style.zIndex = "0";
    enableBackground()
}

function cancelSelection() {
    closeModal()
}

function confirmSelection() {
    localStorage.setItem("imagensImportadas", JSON.stringify(arrayImagensImportadas))
    localStorage.setItem("showPopup", "true");
}

function selectCuba() {
    document.getElementById("botao-confirmar").disabled = false;
    var arrayImagensCuba = ["img_cuba/img_1.jpg", "img_cuba/img_2.jpg", "img_cuba/img_3.jpg", 
    "img_cuba/img_4.jpg", "img_cuba/img_5.jpg", "img_cuba/img_6.jpg", "img_cuba/img_7.jpg", 
    "img_cuba/img_8.jpg", "img_cuba/img_9.jpg", "img_cuba/img_10.jpg", "img_cuba/img_11.jpg", 
    "img_cuba/img_12.jpg", "img_cuba/img_13.jpg", "img_cuba/img_14.jpg", "img_cuba/img_15.jpg", 
    "img_cuba/img_16.jpg", "img_cuba/img_17.jpg", "img_cuba/img_18.jpg", "img_cuba/img_19.jpg", 
    "img_cuba/img_20.jpg"];
    
    var arrayTagsImg = [["true", "true"], ["true", "true"], ["false","true"], ["false", "false"], 
    ["false", "true"], ["true", "true"], ["true", "true"], ["true", "true"]
    , ["true", "true"], ["true", "true"], ["true", "true"], ["true", "true"]
    , ["true", "true"], ["false", "true"], ["false", "true"], ["false", "true"],
     ["true", "true"], ["false", "true"], ["false", "true"], ["true", "true"]];

    var objArray = objHandler(arrayImagensCuba, arrayTagsImg);

    if (localStorage.getItem("imagensImportadas") == null) {        
        arrayImagensImportadas = arrayImagensCuba;   
        
    }else {        
        arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas"));

        for (let imgSrc of arrayImagensCuba) {
            arrayImagensImportadas.push(imgSrc);
        }

        localStorage.setItem("imagensImportadas", JSON.stringify(arrayImagensImportadas));
    }

    if(localStorage.getItem("imagensFiltros") == null) {        
        localStorage.setItem("imagensFiltros", JSON.stringify(objArray));

    }else {
        var objCheck = JSON.parse(localStorage.getItem("imagensFiltros"));
        objCheck.push(objArray);
        localStorage.setItem("imagensFiltros", JSON.stringify(objCheck));
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


    var arrayTagsImgFranca = [["true", "true", "false"], ["true", "true", "false"],
    ["false","true", "false"], ["false", "false", "false"], 
    ["false", "true", "false"], ["true", "true", "false"],
     ["true", "true", "false"], ["true", "true", "true"]
    , ["true", "true", "false"], ["true", "true", "false"],
     ["true", "true", "false"], ["true", "true", "false"]
    , ["true", "true", "false"], ["false", "true", "false"],
     ["false", "true", "false"], ["false", "true", "false"],
     ["true", "true", "true"], ["false", "true", "true"],
      ["false", "true", "false"], ["true", "true", "false"]];
    

    var objArray1 = objHandler(arrayImagensFranca, arrayTagsImgFranca);

    if (localStorage.getItem("imagensImportadas") == null) {
        arrayImagensImportadas = arrayImagensFranca;        
    } else {
        arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas"));
        
        for (let imgSrc of arrayImagensFranca) {
            arrayImagensImportadas.push(imgSrc);
        }

        localStorage.setItem("imagensImportadas", JSON.stringify(arrayImagensImportadas));
    }

    if(localStorage.getItem("imagensFiltros") == null) {        
        localStorage.setItem("imagensFiltros", JSON.stringify(objArray1));

    }else {
        var objCheck = JSON.parse(localStorage.getItem("imagensFiltros"));
        objCheck.push(objArray1);
        localStorage.setItem("imagensFiltros", JSON.stringify(objCheck));
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

    if (localStorage.getItem("imagensImportadas") == null) {
        arrayImagensImportadas = arrayImagensSpike;
    } else {
        arrayImagensImportadas = JSON.parse(localStorage.getItem("imagensImportadas"));
        
        for (let imgSrc of arrayImagensSpike) {
            arrayImagensImportadas.push(imgSrc);
        }

        localStorage.setItem("imagensImportadas", JSON.stringify(arrayImagensImportadas));
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
}



function disableBackground() {
    $("#side-bar").addClass("disabled")
    $("#memento-top-left").addClass("disabled")
    $("#top_row_icons").addClass("disabled")
    $("#bot_row_icons").addClass("disabled")
}

function enableBackground() {
    $("#side-bar").removeClass("disabled")
    $("#memento-top-left").removeClass("disabled")
    $("#top_row_icons").removeClass("disabled")
    $("#bot_row_icons").removeClass("disabled")
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