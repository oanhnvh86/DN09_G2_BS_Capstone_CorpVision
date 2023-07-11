
function Openform(){
    var open = document.getElementById("clickSearch");
        open.classList.add("active")

}
document.getElementById("clickSearch").onclick = Openform;

function Closeform(){
    var closee = document.getElementById("clickSearch");
    closee.classList.remove("active");

}
document.getElementById("closeSearch").onclick = Closeform;
