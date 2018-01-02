function close_loader() {
    document.getElementsByClassName("loader")[0].style.display = "none";         
}

function link2page(txt) {
    var base = "src/tryit_editor_v1.0.html";
    window.open(encodeURI(base + "?" + "src/articles/" + txt));
}