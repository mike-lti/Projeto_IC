const registerPassword = "password";
const loginUsername = "username";
const loginPassword = "password";



function userAcc(password){
    this.password = password    
}


function accUse(){
    formGetter = document.forms.registerData;
    registerUserData = formGetter.elements.username.value;  
    registerPassData= formGetter.elements.password.value;
    registerConfirmData = formGetter.elements.confirmPassword.value; 
    if(localStorage.getItem(registerUserData) == null){
        return false

    }else{
        return true
    }

}


function ValidateEmail(){

let mailValidFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
formGetterMail = document.forms.registerData;
registerEmailDataValidation= formGetter.elements.email.value;
 if (registerEmailDataValidation.match(mailValidFormat))
  {
    return (false)
  }
    
    return (true)
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
        document.getElementsByClassName("homepageOperations")[0].style.backgroundColor = "rgb(231, 84, 84);";
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "Os campos de palavra-passe têm de ser iguais"
        document.getElementsByClassName("homepageOperations")[0].style.display = "block"
        $('.homepageOperations').fadeOut(5000);
        formGetter.reset()

    }else if(ValidateEmail()){

        document.getElementsByClassName("homepageOperations")[0].style.backgroundColor = "rgb(231, 84, 84);";
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "Forneça um mail válido";
        document.getElementsByClassName("homepageOperations")[0].style.display = "block";
        $('.homepageOperations').fadeOut(7000);


    }else if(registerUserData == "" || registerPassData == "" || registerEmailData == "" || registerConfirmData == ""){
        document.getElementsByClassName("homepageOperations")[0].style.backgroundColor = "rgb(231, 84, 84);";
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "Preencha todos os campos";
        document.getElementsByClassName("homepageOperations")[0].style.display = "block";
        $('.homepageOperations').fadeOut(7000);

    
    }else if(accUse()){
        document.getElementsByClassName("homepageOperations")[0].style.backgroundColor = "rgb(231, 84, 84);";
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "O nome de utilizador já se encontra utilizado. Escolha outro."
        document.getElementsByClassName("homepageOperations")[0].style.display = "block"
        $('.homepageOperations').fadeOut(5000);
        formGetter.reset()

    
    }else{
        let accToApend = new userAcc(registerPassData);
        registredAcc.push(accToApend);        
        localStorage.setItem(registerUserData, JSON.stringify(registredAcc));
        formGetter.reset()
        RegistarDimmerCloser();
        document.getElementsByClassName("homepageOperations")[0].style.backgroundColor = "rgb(4, 125, 154)";
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "Conta criada com sucesso!";
        document.getElementsByClassName("homepageOperations")[0].style.display = "block";
        $('.homepageOperations').fadeOut(5000);
        
       
    } 

}


function loginHandler(){
    let formData = document.forms.loginData;
    dataUsername = formData.elements.username.value;
    dataPassword = formData.elements.password.value;
    if(localStorage.getItem(dataUsername) != null && JSON.parse(localStorage.getItem(dataUsername))[0]["password"] == dataPassword){
        localStorage.setItem("currentAccount", JSON.stringify(dataUsername));
        location.replace("galeria.html")
        
    }else if (localStorage.getItem(dataUsername) != null && JSON.parse(localStorage.getItem(dataUsername))[0]["password"] != dataPassword) {
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "Palavra-passe incorreta."
        document.getElementsByClassName("homepageOperations")[0].style.display = "block"
        $('.homepageOperations').fadeOut(5000);
    }else {
        document.getElementsByClassName("homepageOperations")[0].innerHTML = "O nome de utilizador não existe. Registe-o primeiro."
        document.getElementsByClassName("homepageOperations")[0].style.display = "block"
        $('.homepageOperations').fadeOut(5000);
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

function RegistarDimmerCloser() {
    let backgroundDimmer = document.getElementsByClassName("backgroundPopups")[0];
    let registarPopup = document.getElementsByClassName("registarDimmer")[0];
    registarPopup.style.display = "none";
    backgroundDimmer.style.opacity = "0";
}