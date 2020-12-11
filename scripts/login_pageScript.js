//Grupo:003, Nomes: Francisco Pimenta - 54973, Pedro Quintão - 54971, Miguel Duarte - 54941, Gonçalo Ferreira - 55166

const registerPassword = "password";
const loginUsername = "username";
const loginPassword = "password";

function userAcc(password){
    this.password = password    
}

function loginDimmerShower() {
    let backgroundDimmer = document.getElementsByClassName("backgroundPopups")[0];
    let loginPopup = document.getElementsByClassName("loginDimmer")[0];
    loginPopup.style.display = "block";
    backgroundDimmer.style.opacity = "1";
    $(".registarHandler").addClass("disabled");
    $(".loginHandler").addClass("disabled");
}

function loginDimmerCloser() {
    let backgroundDimmer = document.getElementsByClassName("backgroundPopups")[0];
    let loginPopup = document.getElementsByClassName("loginDimmer")[0];
    loginPopup.style.display = "none";
    backgroundDimmer.style.opacity = "0";
    $(".registarHandler").removeClass("disabled");
    $(".loginHandler").removeClass("disabled");
    document.getElementsByClassName("homepageOperations")[0].style.display = "none"
}

function RegistarDimmerShower() {
    let backgroundDimmer = document.getElementsByClassName("backgroundPopups")[0];
    let registarPopup = document.getElementsByClassName("registarDimmer")[0];
    $(".registarHandler").addClass("disabled");
    $(".loginHandler").addClass("disabled");
    
    registarPopup.style.display = "block";
    backgroundDimmer.style.opacity = "1";   

}

function RegistarDimmerCloser() {
    let backgroundDimmer = document.getElementsByClassName("backgroundPopups")[0];
    let registarPopup = document.getElementsByClassName("registarDimmer")[0];
    registarPopup.style.display = "none";
    backgroundDimmer.style.opacity = "0";
    $(".registarHandler").removeClass("disabled");
    $(".loginHandler").removeClass("disabled");
    document.getElementsByClassName("homepageOperations")[0].style.display = "none"
    
}

function accUse(){
    formGetter = document.forms.registerData;
    registerUserData = formGetter.elements.username.value;  
    registerPassData= formGetter.elements.password.value;
    registerConfirmData = formGetter.elements.confirmPassword.value; 
    if(localStorage.getItem(registerUserData) == null){
        return false

    } else {
        return true
    }
}

function ValidateEmail(){
    let mailValidFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    formGetterMail = document.forms.registerData;
    registerEmailDataValidation= formGetter.elements.email.value;
    if (registerEmailDataValidation.match(mailValidFormat)){
        return (false);
    }else{
    
        return (true);
    }
}

function registerHandler(){
    let registredAcc = [];
    localStorage.setItem("accounts", JSON.stringify(registredAcc))
    formGetter = document.forms.registerData;
    registerUserData = formGetter.elements.username.value;    
    registerPassData= formGetter.elements.password.value;
    registerEmailData= formGetter.elements.email.value;
    registerConfirmData = formGetter.elements.confirmPassword.value; 
    

    if(registerPassData != registerConfirmData){
        
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "Os campos de palavra-passe têm de ser iguais"
        document.getElementsByClassName("homepageOperations")[0].style.display = "block"
        document.getElementsByClassName("homepageOperations")[0].style.bottom = "80px";
        $('.homepageOperations').fadeOut(7000);
        formGetter.reset()

    }else if(registerUserData == "" || registerPassData == "" || registerEmailData == "" || registerConfirmData == ""){       
  
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "Preencha todos os campos";
        document.getElementsByClassName("homepageOperations")[0].style.display = "block";
        document.getElementsByClassName("homepageOperations")[0].style.bottom = "80px";
        $('.homepageOperations').fadeOut(7000);


    }else if(ValidateEmail()){
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "Forneça um mail válido (ex. nome@email.pt)";
        document.getElementsByClassName("homepageOperations")[0].style.display = "block";
        document.getElementsByClassName("homepageOperations")[0].style.bottom = "80px";
        $('.homepageOperations').fadeOut(7000);

    }else if(accUse()){
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "O nome de utilizador já se encontra utilizado. Escolha outro."
        document.getElementsByClassName("homepageOperations")[0].style.display = "block"
        document.getElementsByClassName("homepageOperations")[0].style.bottom = "80px";
        $('.homepageOperations').fadeOut(5000);
        formGetter.reset()

    }else{
        let accToApend = new userAcc(registerPassData);
        registredAcc.push(accToApend);        
        localStorage.setItem(registerUserData, JSON.stringify(registredAcc));
        localStorage.setItem("currentAccount", JSON.stringify(registerUserData));        
        location.replace("galeria.html")
        formGetter.reset();
        RegistarDimmerCloser();
        $(".registarHandler").removeClass("disabled");
        $(".loginHandler").removeClass("disabled");      
    } 
}

function loginHandler(){
    let formData = document.forms.loginData;
    dataUsername = formData.elements.username.value;
    dataPassword = formData.elements.password.value;
    if (localStorage.getItem(dataUsername) != null && 
        JSON.parse(localStorage.getItem(dataUsername))[0]["password"] == dataPassword || 
        "admin" == dataUsername && "admin" == dataPassword) {

        localStorage.setItem("currentAccount", JSON.stringify(dataUsername));
        
        location.replace("galeria.html")
        
    }else if (localStorage.getItem(dataUsername) != null && 
    JSON.parse(localStorage.getItem(dataUsername))[0]["password"] != dataPassword) {
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "Palavra-passe incorreta."
        document.getElementsByClassName("homepageOperations")[0].style.display = "block"
        document.getElementsByClassName("homepageOperations")[0].style.bottom = "170px";
        $('.homepageOperations').fadeOut(7000);
    } else {
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "O nome de utilizador não existe. Registe-o primeiro."
        document.getElementsByClassName("homepageOperations")[0].style.display = "block"
        document.getElementsByClassName("homepageOperations")[0].style.bottom = "170px";
        $('.homepageOperations').fadeOut(7000);
    }     
}

function showPass(){
    var checkShow = document.getElementById("passShow");
    if(checkShow.type == "password"){
        checkShow.type = "text";
    }else{
        checkShow.type = "password";
    }
}


history.pushState(null, null, location.href); 
history.back(); 
history.forward(); 
window.onpopstate = function () { history.go(1); };
