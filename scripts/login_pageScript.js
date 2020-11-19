
var tempUsername = "admin";
var tempPassword = "admin";


function loginHandler(){
    let formData = document.forms.loginData;
    dataUsername = formData.elements.username.value;
    dataPassword = formData.elements.password.value;
    if(dataUsername == tempUsername && tempPassword == dataPassword){
        location.replace("galeria.html");
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

