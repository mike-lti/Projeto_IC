
var tempUsername = "tempuser";
var tempPassword = "temppass";


function loginHandler(){
    let formData = document.forms.loginData;
    dataUsername = formData.elements.username.value;
    console.log(dataUsername)
    dataPassword = formData.elements.password.value;

    if(dataUsername == tempUsername && tempPassword == dataPassword){
        location.replace("file:///D:/GitHubRepositories/Projeto-IC/Projeto_IC/galeria.html");

    }else{
        console.warn("Username ou palavra passe encontram-se incorretos");

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

