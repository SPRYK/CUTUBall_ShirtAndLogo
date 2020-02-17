var modal = $("#myModal")[0]; //document.getElementById("myModal")
var content = $("#content")[0]; //document.getElementById("content")
var button = $("#modal-button")[0] //document.getElementByid("modal-button")

function ModalDisplay(c) {
    modal.style.display = "flex";
    content.innerHTML = c;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(button).click(function() {
    modal.style.display = "none";
})