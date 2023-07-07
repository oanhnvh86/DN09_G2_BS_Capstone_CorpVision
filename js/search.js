function formHidden(){
    var formShow = document.getElementById("formm");
    formShow.style.display = "block";
    var xClick = document.getElementById("clickClose");
    xClick.style.display = "block";


}
document.getElementById("clickSearch").onclick = formHidden;