
function Openform() {
    var openI = document.getElementById("clickSearch");
    openI.classList.toggle("active");
    var openA = document.getElementById("aClickSearch");
    openA.classList.toggle("active");
    var openInp = document.getElementById("inpClickSearch");
    openInp.classList.toggle("active");

}
document.getElementById("clickSearch").onclick = Openform;


