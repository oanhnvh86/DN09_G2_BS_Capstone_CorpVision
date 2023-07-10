
function scrollll() {
    var headerr = document.getElementById("scrollTop");
    if (window.scrollY > 0) {
        headerr.classList.add("scrollheader", "greenactive");
    }
    else {
        headerr.classList.remove("scrollheader", "greenactive");
    }
}
window.addEventListener("scroll", scrollll);