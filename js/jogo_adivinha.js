function pularLinha() {
    document.write("<br>");
};

//função com parâmentro
function mostra(idades) {
    document.write(idades);
    pularLinha();
};

var numeroPensado = Math.round(Math.random() * 10);
var contador = 1;
while (contador <= 3) {
    var numeroChutado = parseInt(prompt("Chute um numero"))

    if (numeroChutado == numeroPensado) {
        mostra(`Você acertou, o numero pensado foi ${numeroPensado}`)
        break
    }
    else {
        mostra("Você errou")
    }
    contador++
}