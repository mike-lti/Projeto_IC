function loginDimmerShower(){
    let backgroundDimmer = document.getElementsByClassName("backgroundPopups")[0];
    let loginPopup = document.getElementsByClassName("loginDimmer")[0];
    loginPopup.style.display = "block";
    backgroundDimmer.style.opacity = "1";
}


function loginDimmerCloser(){
    let backgroundDimmer = document.getElementsByClassName("backgroundPopups")[0];
    let loginPopup = document.getElementsByClassName("loginDimmer")[0];
    loginPopup.style.display = "none";
    backgroundDimmer.style.opacity = "0";



}