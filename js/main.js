function myFunction(nb) {
    var checkBox = document.getElementById("myCheck"+nb);
    var text = document.getElementById("res" + nb);
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}