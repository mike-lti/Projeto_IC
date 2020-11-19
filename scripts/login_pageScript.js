const registerEmail = "email";
const registerUsername = "username";
const registerPassword = "password";

const loginUsername = "username";
const loginPassword = "password";




function userAcc(username, password, email){

    this.username = username;
    this.password = password;
    this.email = email;

}


function usernameGetter(){
    return this.username;
}


function passGetter(){
    return this.password;
}



function registerHandler(){
    let registredAcc = [];
    formGetter = document.forms.registerData;
    registerUserData = formGetter.elements.username.value;
    registerPassData= formGetter.elements.password.value;
    registerEmailData= formGetter.elements.email.value;

    let accToApend = new userAcc(registerUserData, registerPassData, registerEmailData);

    registredAcc.push(accToApend);
    
    localStorage.setItem("accounts", JSON.stringify(registredAcc));

}


function loginHandler(){
    let formData = document.forms.loginData;
    dataUsername = formData.elements.username.value;
    dataPassword = formData.elements.password.value;
    let accToIterate = localStorage.getItem("accounts");
    console.log(accToIterate)
    for(let i = 0; accToIterate.length; i++){        
        if(dataUsername == accToIterate[i].usernameGetter() && accToIterate[i].passGetter() == dataPassword){
            location.replace("galeria.html");
        }else{
            console.log("Errado")
        }
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

