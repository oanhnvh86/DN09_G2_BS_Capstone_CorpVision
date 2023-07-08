/**
 * gọi 1 biến gắn cho nó giá trị của thẻ header
 * cho thẻ đó addEventListener có sự kiện cuộn trang vị trí là x0,y0;
 * gán cho sự kiện đó có css mới*/


function scrollll() {
    var headerr = document.getElementById("scrollTop");
    if (window.scrollY > 0) {
        headerr.classList.add("scrollheader");
    }
    else {
        headerr.classList.remove("scrollheader");
    }
}
window.addEventListener("scroll", scrollll);