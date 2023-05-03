var segredo = 5;
var input = document.querySelector("input");

function verifica() {

    if (input == segredo) {
        alert("Você acertou");
    }
    else {
        alert("Você errou !");
    }
}

var button = document.querySelector("button");

button.onclick = verifica;