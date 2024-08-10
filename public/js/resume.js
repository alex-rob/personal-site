var id = null;
function move() {
    var elem = document.getElementById("animation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos = pos + 1;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
const background = document.getElementById("background");
function updateSize() {
    background.style.height = window.innerHeight;
    background.style.width = window.innerWidth;
}
updateSize();
window.addEventListener("resize", updateSize);