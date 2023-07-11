function clickToggler(){
    var bgHeader = document.getElementById("scrollTop");
        bgHeader.classList.toggle("bgheader");

}
document.getElementById("navToggler").onclick = clickToggler;